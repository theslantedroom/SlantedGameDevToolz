# SlantedGameToolz


SlantedGameToolz is a collection of tools designed to be used in games made with typescript. UI components are rendered with react. 
 

- These tools can be used in iOS and Android apps when built with [**Capacitor**](https://capacitorjs.com/)
- These tools can be used in PC and Mac apps when built with [**Electron**](https://www.electronjs.org/)


## Usage Instructions  

- dice
- weighted dice
- percentage
- todo.... and more


</br></br>



# rollDice

A fair dice roll.

#### Usage

```bash
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

```bash
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

```bash
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









# Developer Instructions



You want to contribute to SlantedGameToolz?
- Install the repo dependencies
- Render components
  - storybook `yarn storybook`
  - Vite app `yarn dev`
- Make code changes
- Submit PR


From the root of the repo, open a terminal then run:

```
$ yarn install
```

</br></br>

### Examples

- [Idle Trillionaire](https://www.idletrillionaire.com/)
- [Turn Based Boxing](https://www.hbcboxing.online/)
