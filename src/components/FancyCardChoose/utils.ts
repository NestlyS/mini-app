import { CardTypes } from "../FlippingCard/typings";
import { CARD_INTEPRETATIONS } from "./contants";

// Ключ по которому кладутся данные
const LOCAL_STORAGE_CARD_NAME = 'Q1VSUkVOVF9XRUVLX0NBUkQ=';
const WEEK_IN_MILLS = 1000 * 60 * 60 * 24 * 7;

const crypt = (str: string) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) << 1)).join('');
const encrypt = (str: string) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) >> 1)).join('');

export const writeCardNameToLocalStorage = (cardName: CardTypes) => {
  const secretCardName = crypt(cardName);
  const secretDate = crypt((new Date()).getTime().toString());
  const payload = [secretCardName, secretDate];

  localStorage.setItem(LOCAL_STORAGE_CARD_NAME, JSON.stringify(payload));
}

export const readCardNameToLocalStorage = (): CardTypes | null => {
  const jsonPayload = localStorage.getItem(LOCAL_STORAGE_CARD_NAME);

  if (!jsonPayload) return null;

  try {
    const [secretCardName, secretDate] = JSON.parse(jsonPayload);
    const cardName = encrypt(secretCardName);
    const date = Number(encrypt(secretDate));

    if (Number.isNaN(date)) return null;
    if (((new Date()).getTime() - date) > WEEK_IN_MILLS) return null;
    if (Object.values(CardTypes).findIndex(val => val === cardName) === -1) return null;
    return cardName as CardTypes;
  } catch {
    return null;
  }
}

export const clearCardName = () => {
  localStorage.removeItem(LOCAL_STORAGE_CARD_NAME);
}

export const getRandomValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


export const pickRandomCard = (): CardTypes => {
  const cardNames = Object.values(CardTypes);
  const randomIndex = getRandomValue(0, cardNames.length - 1);
  return cardNames[randomIndex];
}

export const getCardIntrepretation = (cardName: CardTypes): string => {
  const intrepretation = CARD_INTEPRETATIONS[cardName];

  if (Array.isArray(intrepretation)) {
    const randomIndex = getRandomValue(0, intrepretation.length - 1);
    return intrepretation[randomIndex];
  }

  return intrepretation;
}