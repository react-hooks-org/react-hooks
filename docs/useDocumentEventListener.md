---
id: useDocumentEventListener
title: useDocumentEventListener
sidebar_label: useDocumentEventListener
---


    

## About

A react hook to an event listener to the document object

[//]: # "Main"

## Installation

    npm install --save rooks

## Importing the hook

```javascript
import {useDocumentEventListener} from "rooks"
```

## Usage

```jsx
function Demo() {
  useDocumentEventListener("click", function(){
    console.log("clicked")
  });
  return null
}

render(<Demo/>)
```


---

## Codesandbox Examples

### Basic Usage    

<iframe src="https://codesandbox.io/embed/usedocumenteventlistener-ebpcc?fontsize=14&hidenavigation=1&theme=dark"
style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
title="useDocumentEventListener"
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
>


## Join Bhargav's discord server
You can click on the floating discord icon at the bottom right of the screen and talk to us in our server.

