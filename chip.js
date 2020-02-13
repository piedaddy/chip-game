class Chip {
  constructor(top, left, color, number, game) {
    this.top = top;
    this.left = left;
    this.color = color;
    this.number = number;
    this.game = game;
  }

  render () {
    this.element = document.createElement('div');
    this.element.className = 'main';
    this.element.innerHTML = (`
    <div class ="chip"> ${this.number}</div>
    `)

    const chip = this.element.querySelector('.chip');
    chip.style.left = this.left + 'em';
    chip.style.top = this.top + 'em';
    chip.style.backgroundColor = this.color;
    chip.textContent = this.number;
  }

  update() {
    this.element.addEventListener('click', () => {
      let amount = document.querySelector('.amount');
      amount.textContent = Number(amount.textContent) + Number(this.number);
      this.element.style.display = "none";
    })
  }

  mount(parent) {
    this.render();
    this.update();
    parent.appendChild(this.element);
  }
};