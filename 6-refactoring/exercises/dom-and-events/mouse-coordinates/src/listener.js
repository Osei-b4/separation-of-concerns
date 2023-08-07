import { LISTENEREVENT } from '../data/constants.js';
import { showMouseCoordinates } from './handler.js';

export const MouseMoveListener = (Element) => {
  Element.addEventlistener(LISTENEREVENT, showMouseCoordinates);
};
