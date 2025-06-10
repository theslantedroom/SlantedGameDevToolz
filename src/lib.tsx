// Export <Example> React Component to Npm Package
import { Example } from "./components/Example/Example";
// Now people can do
// import { Example } from 'your-package-name';

import {
	randomArrayItem,
	removeObjectsWithSameName,
} from "./_arrays/_arrayUtils";

import {
	percentageChance,
	rollDice,
	rollDiceIsMaxRoll,
	rollHighWeightedDice,
	rollLowWeightedDice,
} from "./_dice/diceUtil";

import { isNumberTooLarge } from "./_numbers/_numberUtils";
import { ImportExportLocalStorage } from "./components/ImportExportLocalStorage/ImportExportLocalStorage";
import { LocalizationSelect } from "./components/LocalizationSelect/LocalizationSelect";
import { HexBtn } from "./components/buttons/HexBtn/HexBtn";

export {
	percentageChance,
	rollDice,
	rollLowWeightedDice,
	rollHighWeightedDice,
	removeObjectsWithSameName,
	randomArrayItem,
	isNumberTooLarge,
	rollDiceIsMaxRoll,
	ImportExportLocalStorage,
	LocalizationSelect,
	HexBtn,
};

// Now people can do
// import { rollDice } from 'your-package-name';

// How to publish to NPM?
// set version in package.json > `npm publish`
//
