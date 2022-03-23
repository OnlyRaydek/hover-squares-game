export const apiGet = (setState) => {
  fetch('http://demo7919674.mockable.io/')
  .then((response) => response.json())
  .then((json) => {
    setState(json);
  }).catch(() => console.log('warn'))
};