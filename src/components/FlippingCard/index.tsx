import React, { useCallback, useState } from 'react';

import back from '../../img/Обложка.png';
import { Div } from '@vkontakte/vkui';
import { CardTypes } from './typings';

import Tower from '../../img/Башня.png';
import Priestess from '../../img/Верховная жрица.png';
import Lovers from '../../img/Влюбленные.png';
import Devil from '../../img/Дьявол.png';
import Star from '../../img/Звезда.png';
import Hierofant from '../../img/Иерофант.png';
import Imperor from '../../img/Император.png';
import Impress from '../../img/Императрица.png';
import Chariot from '../../img/Колесница.png';
import Fortune from '../../img/Колесо фортуны.png';
import Moon from '../../img/Луна.png';
import Mage from '../../img/Маг.png';
import World from '../../img/Мир.png';
import Hermit from '../../img/Отшельник.png';
import Hanged from '../../img/Повешенный.png';
import Strength from '../../img/Сила.png';
import Death from '../../img/Смерть.png';
import Sun from '../../img/Солнце.png';
import Justice from '../../img/Справедливость.png';
import Judgment from '../../img/Суд.png';
import Temperance from '../../img/Умеренность.png';
import Jester from '../../img/Шут.png';

const URL_TO_ENUM_MAP: Record<CardTypes, string> = {
	[CardTypes.Tower]: Tower,
	[CardTypes.Priestess]: Priestess,
	[CardTypes.Lovers]: Lovers,
	[CardTypes.Devil]: Devil,
	[CardTypes.Star]: Star,
	[CardTypes.Hierofant]: Hierofant,
	[CardTypes.Imperor]: Imperor,
	[CardTypes.Impress]: Impress,
	[CardTypes.Chariot]: Chariot,
	[CardTypes.Fortune]: Fortune,
	[CardTypes.Moon]: Moon,
	[CardTypes.Mage]: Mage,
	[CardTypes.World]: World,
	[CardTypes.Hermit]: Hermit,
	[CardTypes.Hanged]: Hanged,
	[CardTypes.Strength]: Strength,
	[CardTypes.Death]: Death,
	[CardTypes.Sun]: Sun,
	[CardTypes.Justice]: Justice,
	[CardTypes.Judgment]: Judgment,
	[CardTypes.Temperance]: Temperance,
	[CardTypes.Jester]: Jester,
}


import './styles.css';

type Props = {
	cardType: CardTypes;
	isInitiallyOpened?: boolean;
	onOpen?: () => void;
}

export const FlippingCard = ({ cardType, onOpen, isInitiallyOpened = false }: Props) => {
	const [isOpened, setOpened] = useState(isInitiallyOpened);

	const onImageClick = useCallback(() => {
		setOpened(val => {
			if (val) return val;

			const newVal = !val;
			if (newVal) onOpen?.();
			return newVal;
		});
	}, [onOpen]);

	return (
		<Div className='CardRoot'>
			<Div className={`BackCard Left ${isOpened ? '' : 'Animated'}`}>
				<img src={back} className='Card' />
			</Div>
			<Div className={`BackCard Right ${isOpened ? '' : 'Animated'}`}>
				<img src={back} className='Card' />
			</Div>
			<Div className={`Container ${isOpened ? 'opened' : ''}`}>
				<Div className='SecondContainer'>
					<Div className={`Front`}>
						<img src={back} className='Card' onClick={onImageClick} />
					</Div>
					<Div className={`Back`}>
						<img src={URL_TO_ENUM_MAP[cardType]} className='Card' />
					</Div>
				</Div>
			</Div>
		</Div>
	)
};
