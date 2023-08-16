import React, { useMemo } from 'react';
import cn from 'classnames';
import { FlippingCard } from '../FlippingCard';
import { Button, Div, Group, Text, Title } from '@vkontakte/vkui';
import { CardTypes } from '../FlippingCard/typings';
import { AnimatedLines } from '../AnimatedLines';
import ramblerSvg from '../../img/rambler.svg';
import horoSvg from '../../img/horoscopes.svg';

import './styles.css';
import { FancyTextShow } from '../FancyTextShow';
import { getCardIntrepretation } from '../FancyCardChoose/utils';

type Props = {
  card: CardTypes;
  onClear: () => void;
}

export const FancyCardInitiallyChoosed = ({ card, onClear }: Props) => {
  const intepretation = useMemo(() => card ? getCardIntrepretation(card) : '', [card]);

  return (
    <>
      <Div className='FancyCardChooseRoot'>
        <FlippingCard cardType={card} isInitiallyOpened />
        <Title level='1' className={cn('Title')}>{card}</Title>
        <Title level='2' className={cn('Title', 'Second')}>Ваше предсказание на неделю:</Title>
        <FancyTextShow text={intepretation} isHidden={false} />
        <Group padding='m' mode='plain' className={cn('FancyCardChooseGroup')}>
          <button onClick={onClear} className='FancyCardResetButton'>Сбросить гадание</button>
          <Text className='FancyCardChooseButtonLinkText'>Больше гороскопов на</Text>
          <a href="https://horoscopes.rambler.ru/" target='_blank' rel="noreferrer" className='FancyCardChooseButtonLink'>
            <img src={ramblerSvg} />
            <img src={horoSvg} />
          </a>
        </Group>
      </Div>
      <AnimatedLines isOpened />
    </>
  )
}