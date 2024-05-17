const randomNumberGenerator = (num) => {
  return Math.floor(Math.random() * num);
};

const outcomes = {
  contactQuality: [
    "screaming line drive",
    "slow roller",
    "fly ball",
    "hard grounder",
    "Texas leaguer",
  ],
  hitResult: ["a single", "a double", "a triple", "a home run", "an out"],
  crowdReaction: ["booing", "going wild", "ecstactic", "not impressed"],
};

for (let prop in outcomes) {
  let value = randomNumberGenerator(outcomes[prop].length);

  switch (prop) {
    case "contactQuality":
      console.log(`You hit a ${outcomes[prop][value]}.`);
      break;
    case "hitResult":
      console.log(`It's ${outcomes[prop][value]}!`);
      break;
    case "crowdReaction":
      console.log(`The crowd is ${outcomes[prop][value]}!`);
      break;
    default:
      console.log(`Say it ain't so!`);
  }
}
