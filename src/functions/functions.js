const randomNumber = (from = 1, to = 100) => Math.floor(Math.random() * to) + from;

const chooseSign = (signs) => signs[Math.floor(Math.random() * signs.length)];

export { randomNumber, chooseSign };
