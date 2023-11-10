# SlantedGameToolz

A collection of functions for use in games.

- dice
- weighted dice
- percentage

## Install

```
$ yarn install
```

</br></br>

# rollDice

A fair dice roll.

#### Usage

```
import { rollDice } from "slanted-gamedev-toolz";

const diceSides = 6
const diceRollOutcome = rollDice(diceSides);

```

#### Parameters

| Parameter | Description                     |
| --------- | ------------------------------- |
| diceSides | the amount of sides on the dice |

#### Return Value

| Type   | Description                 |
| ------ | --------------------------- |
| number | the result of the dice roll |

</br></br>

# rollLowWeightedDice

An unfair fair dice roll that is more likely to roll low.

#### Usage

```
import { rollLowWeightedDice } from "slanted-gamedev-toolz";

const diceSides = 6
const diceRollOutcome = rollLowWeightedDice(diceSides);

```

#### Parameters

| Parameter | Description                     |
| --------- | ------------------------------- |
| diceSides | the amount of sides on the dice |

#### Return Value

| Type   | Description                 |
| ------ | --------------------------- |
| number | the result of the dice roll |

</br></br>

# rollHighWeightedDice

An unfair fair dice roll that is more likely to roll high.

#### Usage

```
import { rollHighWeightedDice } from "slanted-gamedev-toolz";

const diceSides = 6
const diceRollOutcome = rollHighWeightedDice(diceSides);

```

#### Parameters

| Parameter | Description                     |
| --------- | ------------------------------- |
| diceSides | the amount of sides on the dice |

#### Return Value

| Type   | Description                 |
| ------ | --------------------------- |
| number | the result of the dice roll |
