---
id: use-sessionstorage
title: use-sessionstorage
sidebar_label: use-sessionstorage
---

# @rooks/use-sessionstorage

### Session storage react hook. Easily manage session storage values.

<br/>

![Build Status](https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg)![](https://img.shields.io/npm/v/@rooks/use-sessionstorage/latest.svg) ![](https://img.shields.io/npm/l/@rooks/use-sessionstorage.svg) ![](https://img.shields.io/npm/dt/@rooks/use-sessionstorage.svg) ![](https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fsessionstorage)

<a href="https://spectrum.chat/rooks"><img src="https://withspectrum.github.io/badge/badge.svg" alt="Join the community on Spectrum"/></a>

### Installation

```
npm install --save @rooks/use-sessionstorage
```

### Importing the hook

```javascript
import useSessionstorage from "@rooks/use-sessionstorage";
```

### Usage

```jsx
function Demo() {
  const [value, set, remove] = useSessionstorage("my-value", 0);
  // Can also be used as {value, set, remove}

  return (
    <p>
      Value is {value}{" "}
      <button onClick={() => set(value !== null ? parseFloat(value) + 1 : 0)}>
        Increment
      </button>
      <button onClick={remove}>Remove </button>
    </p>
  );
}

render(<Demo />);
```

    