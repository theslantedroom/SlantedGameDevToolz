# SlantedGameToolz


SlantedGameToolz is a collection of tools designed to be used in games made with typescript. UI components are rendered with react. 
 

- These tools can be used in iOS and Android apps when built with [**Capacitor**](https://capacitorjs.com/)
- These tools can be used in PC and Mac apps when built with [**Electron**](https://www.electronjs.org/)


## Tools  

- dice
- weighted dice
- percentage
- React components


</br></br>


# Usage Instructions  

## Components
```typescript 
import { Example } from "slanted-gamedev-toolz";

function App() {
	return (
	  <Example />
	);
}
export default App;
```

# Dice
 - `rollDice()` A fair dice roll.
 - `rollLowWeightedDice()` An unfair fair dice roll that is more likely to roll low.
 - `rollLowWeightedDice()` An unfair fair dice roll that is more likely to roll high.

#### Example Usage

```typescript 
import { rollDice } from "slanted-gamedev-toolz";

 const outcome = rollDice(6); // roll 6 sided dice
 console.log(`outcome:`, outcome)
```

| Parameter | Type | Description                     |
| - | - | - |
| diceSides | number | sides on the dice |


| Returns  | Type | Description                 |
| - |- | - |
|   | number | the result of the dice roll |

</br></br>




 


 

# Developer Instructions



To Publish:
set version in package.json > `npm publish`





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


### How to publish to NPM
bump version in package.json > `npm publish`

ex: "version": "1.0.24"

### Examples

- [Idle Trillionaire](https://www.idletrillionaire.com/)
- [Turn Based Boxing](https://www.hbcboxing.online/)
