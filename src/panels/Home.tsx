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
	id: string
}

const Home = ({ id }: Props) => {
	const [rerenderKey, setKey] = useState(0);

	const [card, isReaded] = useMemo(() => {
		const readedCard = readCardNameToLocalStorage();
		console.log(readedCard);
		if (readedCard) return [readedCard, true];
		return [pickRandomCard(), false];
	}, [rerenderKey]);

	const onClear = useCallback(() => {
		clearCardName();
		setKey(val => val + 1);
	}, []);

	return (
		<Panel id={id} className='Root'>
			<Div className='MainBackground'>
				<Title level='1' className={cn('MainTitle')}>Таро на неделю</Title>
				<Title level='2' className={cn('MainTitle', 'SecondTitle')}>{isReaded ? 'Ваше предсказание готово' : 'Кликни на колоду'}</Title>
				{isReaded ? <FancyCardInitiallyChoosed card={card} onClear={onClear} /> : <FancyCardChoose key={rerenderKey} card={card} onClear={onClear} />}
			</Div>
		</Panel>
	)
};

export default Home;
