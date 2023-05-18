class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.timer'); // новое свойство
    this.timerDuration = 0; // новое свойство
    this.reset();

    this.registerEvents();
  }

  reset() {
    this.resetTimer(); // Добавлено
    this.stopTimer(); // Добавлено
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */

    document.addEventListener('keypress', (event) => {
      const symbol = this.currentSymbol;

      if (symbol.textContent === event.key) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  startTimer() {
    // Сколько букв в слове
    this.timerDuration = this.wordElement.textContent.length;
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerDuration--;
      this.updateTimerDisplay();
      if (this.timerDuration === 0) {
        this.fail();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  updateTimerDisplay() {
    this.timerElement.textContent = this.timerDuration;
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  resetTimer() {
    this.timerDuration = 0;
    clearInterval(this.timerInterval);
    this.updateTimerDisplay();
  }


  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.startTimer();
    this.updateTimerDisplay(); // Добавлено
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'я люблю javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))