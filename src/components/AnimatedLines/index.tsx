import React, { useEffect, useState } from 'react';
import { Div } from "@vkontakte/vkui";

import './styles.css';

const LINES_COUNT = 24;

type Props = {
  isOpened?: boolean;
}

export const AnimatedLines = ({ isOpened }: Props) => (
  <Div className={`AnimatedAnimatedLinesContainer ${isOpened && 'AnimatedAnimatedLinesContainer-Opened'}`}>
    <Div className='AnimatedLinesContainer'>
      {
        (new Array(LINES_COUNT).fill(0).map((_, index) =>
          <Div key={index} className={`AnimatedLine AnimatedLineRotation-${index}`} />
        ))
      }
    </Div>
  </Div>
)