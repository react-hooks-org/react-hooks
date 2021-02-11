# @rooks/use-stack-state

![TitleCard](https://raw.githubusercontent.com/imbhargav5/rooks/HEAD/packages/stack-state/title-card.svg)

[![Build Status](https://travis-ci.org/imbhargav5/rooks.svg?branch=master)](https://travis-ci.org/imbhargav5/rooks) ![](https://img.shields.io/npm/v/@rooks/use-stack-state/latest.svg) ![](https://img.shields.io/npm/l/@rooks/use-stack-state.svg) ![](https://img.shields.io/bundlephobia/min/@rooks/use-stack-state.svg) ![](https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fstack-state)



## About
A React hook that manages state in the form of a stack


[//]: # (Main)

## Installation

```
npm install --save @rooks/use-stack-state
```

## Importing the hook

```javascript
import useStackState from "@rooks/use-stack-state"
```

## Usage

```jsx
function Demo() {
  // here list is still 1,2,3
  // listInReverse is basically list in stack order. 
  // which is last-in first-out
  // so basically listInReverse = 3,2,1
  // controls contains utils to change the stack;
  const [list, controls, listInReverse] =  useStackState([1,2,3]);
  const {push, peek, pop, length} = controls;

  // push(1)
  // pop()
  // peek()
  
  // This will render items in LIFO order
  return <div>
    {listInStackOrder.map(item => <span>{item}</span>)}
  </div>
}

render(<Demo/>)
```
