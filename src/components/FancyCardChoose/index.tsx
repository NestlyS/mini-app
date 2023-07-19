import React, { useCallback, useMemo, useState } from 'react';
import cn from 'classnames';
import { FlippingCard } from '../FlippingCard';
import { Button, Div, Group, Text, Title } from '@vkontakte/vkui';
import { CardTypes } from '../FlippingCard/typings';
import { AnimatedLines } from '../AnimatedLines';
import ramblerSvg from '../../img/rambler.svg';
import horoSvg from '../../img/horoscopes.svg';

import './styles.css';
import { FancyTextShow } from '../FancyTextShow';
import { getCardIntrepretation, writeCardNameToLocalStorage } from './utils';

type Props = {
  card: CardTypes;
}

export const FancyCardChoose = ({ card }: Props) => {
  const [step, setStep] = useState(0);

  const onOpen = useCallback(() => {
    if (!card) return;

    setStep(1);
    writeCardNameToLocalStorage(card);
  }, [card]);

  const onTextShow = useCallback(() => {
    setStep(2);
  }, []);

  const onSecondTextShow = useCallback(() => {
    setStep(3);
  }, []);

  const onLongTextShow = useCallback(() => {
    setStep(4);
  }, []);

  const intepretation = useMemo(() => card ? getCardIntrepretation(card) : '', [card]);

  console.log(card, step);
  if (!card) return null;

  return (
    <Div className='FancyCardChooseRoot'>
      <AnimatedLines isOpened={step >= 1} />
      <FlippingCard cardType={card} onOpen={onOpen} isInitiallyOpened={false} />
      <Title level='1' className={cn('Title', step < 1 && 'hidden')} onTransitionEnd={onTextShow}>{card}</Title>
      <Title level='2' className={cn('Title', 'Second', step < 2 && 'hidden')} onTransitionEnd={onSecondTextShow}>Ваше предсказание на неделю:</Title>
      <FancyTextShow text={intepretation} onFinish={onLongTextShow} isHidden={step < 3} />
      <Group padding='m' mode='card' className={cn('FancyCardChooseGroup', step < 4 && 'hidden')}>
        <Button size="l" stretched className='FancyCardChooseButtonShare'>Поделиться</Button>
        <Text className='FancyCardChooseButtonLinkText'>Больше гороскопов на</Text>
        <a href="https://horoscopes.rambler.ru/" target='_blank' rel="noreferrer">
          <img src={ramblerSvg} />
          <img src={horoSvg} />
        </a>
      </Group>
    </Div>
  )
}