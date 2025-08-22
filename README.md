# SlantedGameToolz


SlantedGameToolz is a collection of tools designed to be used in games made with typescript. UI components are rendered with react. 
 

- These tools can be used in iOS and Android apps when built with [**Capacitor**](https://capacitorjs.com/)
- These tools can be used in PC and Mac apps when built with [**Electron**](https://www.electronjs.org/)


## Tools  

- dice
- weighted dice
- percentage
- React components

<br/> 

# Components

### ImportExportLocalStorage

todo: complete this section


can access zustand state:
``` typescript 
const { isLoading } = useIsLoadingLocalStorage();
const { setIsLoading, handleResetGame } =
		useImportExportLocalStorageActions();
const { saveLocalStorageData, clearLocalStorageData, saveGameData } =
		useLocalSaveData();
```

### LocalizationSelect

saves the selected language in localstorage under key `lagCode`

- add `.png` images to `/public/flags/`
- required files `en.png, de.png, es.png, zh.png, ja.png, ko.png, fr.png, ru.png, it.png, pt.png, hi.png`
  

![LocalizationSelect](/public/marketingImages/LocalizationSelect.png)

```typescript 
import { LocalizationSelect } from "slanted-gamedev-toolz";

function App() {
	return (
	  <LocalizationSelect />
	);
}
export default App;
```

### HexBtn
todo
### SquareTileButton
todo

# Functions

## Dice Utils
 - `rollDice()` A fair dice roll.
 - `rollLowWeightedDice()` An unfair fair dice roll that is more likely to roll low.
 - `rollLowWeightedDice()` An unfair fair dice roll that is more likely to roll high.

## Array Utils
 - `removeObjectsWithSameName()` Removes objects from the first array if their `name` property matches any object's `name` in the second array.
 - `randomArrayItem()` Returns a random item from the provided array.

## Number Utils
- `numberWithCommas()` Formats a number with comma separators and optional suffixes for large values. Ex. 1,000,000(M)
- `isNumberTooLarge()` Checks if a number exceeds JavaScript's `Number.MAX_SAFE_INTEGER`.

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
  - or
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

https://www.npmjs.com/package/slanted-gamedev-toolz

https://github.com/theslantedroom/SlantedGameDevToolz
### Examples

- [Idle Trillionaire](https://www.idletrillionaire.com/)
- [Turn Based Boxing](https://www.hbcboxing.online/)
