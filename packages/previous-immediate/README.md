# @rooks/use-previous-immediate


## *Note: Future updates to this package have moved to the main package* [rooks](https://npmjs.com/package/rooks). All hooks now reside in a single package which you can install using

```
npm install rooks
```

or 

```
yarn add rooks
```

Rooks is completely treeshakeable and if you use only 1 of the 50+ hooks in the package, only that hook will be bundled with your code. Your bundle will only contain the hooks that you need. Cheers!

![TitleCard](https://raw.githubusercontent.com/imbhargav5/rooks/v4-compat/packages/previous-immediate/title-card.svg)

[![Build Status](https://travis-ci.org/imbhargav5/rooks.svg?branch=master)](https://travis-ci.org/imbhargav5/rooks) ![](https://img.shields.io/npm/v/@rooks/use-previous-immediate/latest.svg) ![](https://img.shields.io/npm/l/@rooks/use-previous-immediate.svg) ![](https://img.shields.io/bundlephobia/min/@rooks/use-previous-immediate.svg) ![](https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fprevious-immediate)



## About
usePreviousImmediate returns the previous value of a variable even if it was the same or different


[//]: # (Main)

## Installation

```
npm install --save @rooks/use-previous-immediate
```

## Importing the hook

```javascript
import usePreviousImmediate from "@rooks/use-previous-immediate"
```

## Usage

```jsx
function Demo() {
  const [value, setValue] = useState(0)
  const previousValue = usePreviousImmediate(value) 
  return null
}

render(<Demo/>)
```