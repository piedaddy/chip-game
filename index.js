document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')


  const game1 = new Game (0);
  const chip1 = new Chip (3, 4,'red', '1');
  const chip2 = new Chip (5, 10,'blue', '2');
  const chip3 = new Chip (1, 7,'purple', '3');

  chip1.mount(app);
  chip2.mount(app);
  chip3.mount(app);
  game1.mount(app);

});


