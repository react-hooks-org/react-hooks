# @rooks/use-input
![TitleCard](https://raw.githubusercontent.com/imbhargav5/rooks/HEAD/packages/input/title-card.svg)

![Build Status](https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg)![](https://img.shields.io/npm/v/@rooks/use-input/latest.svg) ![](https://img.shields.io/npm/l/@rooks/use-input.svg) ![](https://img.shields.io/npm/dt/@rooks/use-input.svg) ![](https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Finput)




## About 
Input hook for React.
<br/>


## Installation

```
npm install --save @rooks/use-input
```

## Importing the hook

```javascript
import useInput from "@rooks/use-input"
```


## Usage

**Base**

```jsx
function Demo() {
  const myInput = useInput("hello");
  return (
    <div>
      <input {...myInput} />
      <p>
        Value is <b>{myInput.value}</b>
      </p>
    </div>
  );
}

render(<Demo/>)
```

**With optional validator**

```jsx
function Demo() {
  const myInput = useInput("hello", {
    validate: (newValue) => newValue.length < 15
  });
  return (
    <div>
      <p> Max length 15 </p>
      <input {...myInput} />
      <p>
        Value is <b>{myInput.value}</b>
      </p>
    </div>
  );
}

render(<Demo/>)
```

### Arguments

| Argument     | Type   | Description                 | Default value |
| ------------ | ------ | --------------------------- | ------------- |
| initialValue | string | Initial value of the string | ""            |
| opts         | object | Options                     | {}            |


### Options

| Option key | Type     | Description                                                                                                             | Default value |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------- | ------------- |
| validate   | function | Validator function which receives changed valued before update as well as current value and should return true or false | undefined     |

### Return value

| Return value      | Type   | Description                                                                                                          |
| ----------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| {value, onChange} | Object | Object containing {value : "String", onChange: "function that accepts an event and updates the value of the string"} |

