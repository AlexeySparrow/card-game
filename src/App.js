import "./app.css"

function App() {

    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;

            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    })();

    cards.forEach(card => card.addEventListener('click', flipCard));

  return (
      <section className="memory-game">
        <div className="memory-card" data-framework="aurelia">
          <img className="front-face" src="img/aurelia.svg" alt="Aurelia"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>
        <div className="memory-card" data-framework="aurelia">
          <img className="front-face" src="img/aurelia.svg" alt="Aurelia"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>

        <div className="memory-card" data-framework="vue">
          <img className="front-face" src="img/vue.svg" alt="Vue"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>
        <div className="memory-card" data-framework="vue">
          <img className="front-face" src="img/vue.svg" alt="Vue"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>

        <div className="memory-card" data-framework="angular">
          <img className="front-face" src="img/angular.svg" alt="Angular"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>
        <div className="memory-card" data-framework="angular">
          <img className="front-face" src="img/angular.svg" alt="Angular"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>

        <div className="memory-card" data-framework="ember">
          <img className="front-face" src="img/ember.svg" alt="Ember"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>
        <div className="memory-card" data-framework="ember">
          <img className="front-face" src="img/ember.svg" alt="Ember"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>

        <div className="memory-card" data-framework="backbone">
          <img className="front-face" src="img/backbone.svg" alt="Backbone"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>
        <div className="memory-card" data-framework="backbone">
          <img className="front-face" src="img/backbone.svg" alt="Backbone"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>

        <div className="memory-card" data-framework="react">
          <img className="front-face" src="img/react.svg" alt="React"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>
        <div className="memory-card" data-framework="react">
          <img className="front-face" src="img/react.svg" alt="React"/>
          <img className="back-face" src="img/js-badge.svg" alt="JS Badge"/>
        </div>
      </section>
  );
}

export default App;
