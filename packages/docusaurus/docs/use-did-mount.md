---
id: use-did-mount
title: use-did-mount
sidebar_label: use-did-mount
---

# @rooks/use-did-mount

### componentDidMount hook for React
<br/>

![Build Status](https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg)![](https://img.shields.io/npm/v/@rooks/use-did-mount/latest.svg) ![](https://img.shields.io/npm/l/@rooks/use-did-mount.svg) ![](https://img.shields.io/npm/dt/@rooks/use-did-mount.svg) ![](https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fdid-mount)

<a href="https://spectrum.chat/rooks"><img src="https://withspectrum.github.io/badge/badge.svg" alt="Join the community on Spectrum"/></a>

### Installation

```
npm install --save @rooks/use-did-mount
```

### Importing the hook

```javascript
import useDidMount from "@rooks/use-did-mount"
```


### Usage

```jsx
function Demo() {
  useDidMount(function(){
    console.log("mounted")
  });
  return null
}

render(<Demo/>)
```

### Arguments

| Argument | Type     | Description                    |
| -------- | -------- | ------------------------------ |
| callback | function | function to be called on mount |


    