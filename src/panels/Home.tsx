import React, { useCallback, useMemo, useState } from 'react';
import cn from 'classnames';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Title } from '@vkontakte/vkui';
import { FlippingCard } from '../components/FlippingCard';
import { CardTypes } from '../components/FlippingCard/typings';

import './Home.css';
import { AnimatedLines } from '../components/AnimatedLines';
import { FancyCardChoose } from '../components/FancyCardChoose';
import { clearCardName, pickRandomCard, readCardNameToLocalStorage } from '../components/FancyCardChoose/utils';
import { FancyCardInitiallyChoosed } from '../components/FancyCardInitiallyChoosed';

type Props = {
	id: string,
	go: () => void,
	fetchedUser: {
		photo_200: string,
		first_name: string,
		last_name: string,
		city: {
			title: string,
		},
	},
}

const Home = ({ id, go, fetchedUser }: Props) => {
	const [card, isReaded] = useMemo(() => {
		const readedCard = readCardNameToLocalStorage();
		console.log(readedCard);
		if (readedCard) return [readedCard, true];
		return [pickRandomCard(), false];
	}, []);

	console.log(card, isReaded)


	return (
		<Panel id={id}>
			<PanelHeader fixed shadow className='Header' >Рамблер/Таро</PanelHeader>
			{fetchedUser &&
				<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
					<Cell
						before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
						subtitle={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
					>
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Cell>
				</Group>}

			<Div className='MainBackground'>
				<Title level='1' className={cn('MainTitle')}>Рамблер / Таро</Title>
				<Title level='2' className={cn('MainTitle', 'SecondTitle')}>Узнай свою судьбу</Title>
				{isReaded ? <FancyCardInitiallyChoosed card={card} /> : <FancyCardChoose card={card} />}
			</Div>
		</Panel>
	)
};

export default Home;
