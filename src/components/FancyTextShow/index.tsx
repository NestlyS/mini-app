import { Div } from '@vkontakte/vkui';
import React from 'react';
import cn from 'classnames';
import './styles.css';

type Props = {
  text: string;
  isHidden?: boolean;
  shouldPlayAnimation?: boolean;
  onFinish?: () => void;
}

export const FancyTextShow = React.memo(function FancyTextShow({ text, onFinish, isHidden }: Props) {
  return (
    <Div className={cn('FancyTextShowRoot', isHidden && 'hidden')}>
      {isHidden ? text : text.split(' ').map((word, index, arr) => {
        const additionalProps = arr.length - 1 === index ? { onAnimationEnd: onFinish } : {};

        return <span key={`${word}-${index}`} className='FancyTextShowItem' style={{
          animation: `fade-in 0.8s ${(index + 1) * 0.1}s forwards cubic-bezier(0.11, 0, 0.5, 0)`
        }} {...additionalProps}>{word}&ensp;</span>
      })}
    </Div>
  )
});