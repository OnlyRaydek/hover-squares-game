//* data for game modes if api doesn't work
const jsonReserved = [
  {
    name: 'easy',
    field: 5,
  },
  {
    name: 'normal',
    field: 15,
  },
  {
    name: 'hard',
    field: 25,
  },
];

export const apiGet = (setState) => {
  fetch('https://demo7919674.mockable.io/')
  .then((response) => response.json())
  .then((json) => {
    setState(json);
  }).catch(() => {
    console.log('warn: problem with link')
    setState(jsonReserved);
  })
};