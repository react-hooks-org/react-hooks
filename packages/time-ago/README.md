# @rooks/use-time-ago
![TitleCard](https://raw.githubusercontent.com/imbhargav5/rooks/HEAD/packages/time-ago/title-card.svg)

![Build Status](https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg)![](https://img.shields.io/npm/v/@rooks/use-time-ago/latest.svg) ![](https://img.shields.io/npm/l/@rooks/use-time-ago.svg) ![](https://img.shields.io/npm/dt/@rooks/use-time-ago.svg) ![](https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Ftime-ago)




## About 
A React Hook to get time ago for timestamp millisecond value.
<br/>

## Installation

```
npm install --save @rooks/use-time-ago
```

## Importing the hook

```javascript
import useTimeAgo from "@rooks/use-time-ago"
```


## Usage

```jsx
function Demo() {
  const [date, setDate] = useState(new Date());
  const timeAgo = useTimeAgo(date.getTime() - 1000 * 12, {
    locale: "zh_CN"
  });
  const timeAgo2 = useTimeAgo(date.getTime() - 1000 * 12);
  return (
    <>
      <p>{timeAgo}</p>
      <p>{timeAgo2}</p>
    </>
  );
}

render(<Demo/>)
```

### Arguments

| Argument | Type   | Description    | Default value      |
| -------- | ------ | -------------- | ------------------ |
| input    | Date   | Timestamp      | etc                | Any input that time-ago.js supports | undefined |
| options  | Object | Options object | {   intervalMs:0 } |

#### Options

| Options      | Type         | Description                                                            | Default value |
| ------------ | ------------ | ---------------------------------------------------------------------- | ------------- |
| intervalMs   | milliseconds | Duration after which time-ago has to be calculated                     | 1000          |
| locale       | String       | Locale in which value is expected                                      | undefined     |
| relativeDate | Date         | Relative date object with respect to which time-ago is to be calcuated | Current Time  |

### Returned Value

Timeago string is returned.

