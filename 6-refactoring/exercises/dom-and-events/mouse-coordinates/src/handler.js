import { RESULTSPARA } from '../data/constants.js';

import { formatCoordinates } from './utils.js';

export const showMouseCoordinates = (event) => {
  // read & process user input
  // execute core logic

  // render result for user
  document.getElementById(RESULTSPARA).innerHTML = formatCoordinates(
    event.pageX,
    event.pageY,
  );

  // log action for developer
  console.log('\n--- new coordinates ---');
  console.log('x:', event.pageX);
  console.log('y:', event.pageY);
};
