class Game {
  constructor(score) {
    this.score = score;
    this.chip = new Chip;
  }

  addChip (x, y, color, value) {
    let chipNew = new Chip (x, y, color, value)
    chipNew.mount(app);
    }

  render () {
    this.element = document.createElement('div');
    this.element.className = "score"
    this.element.innerHTML = (`
      <h2>Score:</h2>
      <div class="amount">0</div>
      <button class="button">More Chips</button>
    `)

    let button = this.element.querySelector('.button');
    button.addEventListener('click', () => {
      let newColor1 = Math.floor((Math.random() * 15) * 15 + 1);
      let newColor2 = Math.floor((Math.random() * 17) * 15 + 1);
      let newColor3 = Math.floor((Math.random() * 15) * 15 + 1);

      this.addChip(Math.floor((Math.random() * 14) + 2), Math.floor(Math.random() * 15 + 1), `rgb(${newColor1},${newColor2}, ${newColor3})`, Math.floor((Math.random() * 5) + 1));
    })
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }

};

