// Export <Example> React Component to Npm Package
import { Example } from "./components/Example/Example";
// Now people can do
// import { Example } from 'your-package-name';

import {
	percentageChance,
	rollDice,
	rollHighWeightedDice,
	rollLowWeightedDice,
} from "./_dice/diceUtil";

export {
	rollDice,
	percentageChance,
	rollLowWeightedDice,
	rollHighWeightedDice,
};

// Now people can do
// import { rollDice } from 'your-package-name';

// How to publish to NPM?
// set version in package.json > `npm publish`
//
