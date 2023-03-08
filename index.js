const ScoreDisplay = document.getElementById("score");

const cards = [
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
];

cards.sort(() => 0.5 - Math.random());
let names = [];
let ids = [];
let won = [];

const gridDisplay = document.querySelector("#grid");
const CreateBoard = () => {
  cards.forEach((card, index) => {
    const cardDisplay = document.createElement("img");
    cardDisplay.src = "images/blank.png";
    cardDisplay.id = index;
    cardDisplay.addEventListener("click", () => {
      FlipCard(card, cardDisplay, index);
    });
    gridDisplay.appendChild(cardDisplay);
  });
};
CreateBoard();
const FlipCard = (card, cardDisplay, index) => {
  cardDisplay.src = card.img;
  names.push(card.name);
  ids.push(index);
  const cards = document.querySelectorAll("img");
  if (names.length % 2 === 0) {
    if (index === ids[0]) {
      alert("you have choose same image");
      cards[index].src = "images/blank.png";
      names = [];
      ids = [];
    } else {
      setTimeout(() => {
        if (names[0] === names[1]) {
          alert("there are same");
          ids.forEach((id) => (cards[id].src = "images/white.png"));
          won.push(1);
          ScoreDisplay.innerHTML = won.length;
          names = [];
          ids = [];
          if (won.length === 6) {
            ScoreDisplay.innerHTML = "You Are a Hero";
            alert("you win");
            window.location.reload();
          }
        } else {
          alert("Try Again");
          ids.forEach((id) => (cards[id].src = "images/blank.png"));
          names = [];
          ids = [];
        }
      }, 500);
    }
  }
};
