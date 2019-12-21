# react-alert-template-basic-with-icons

> Basic alert template with icons for [react-alert](https://github.com/schiehll/react-alert)

[![version](https://img.shields.io/npm/v/react-alert-template-basic-with-icons.svg?style=flat-square)](http://npm.im/react-alert-template-basic-with-icons)

## Installation

```bash
$ npm install --save react-alert-template-basic-with-icons
```

## Usage

You can use this package with `react-alert` by importing AlertTemplate from this package and giving it to the AlertProvider from `react-alert`. Alternatively, you can create a styled alert component, and then give the styled component to the AlertProvider as the template. You can override the default template style, and change the icon colors like so:

```js
// StyledAlertTemplate.js
import React from 'react';
import AlertTemplate from 'react-alert-template-basic-with-icons'

// Template style overrides
const styleOverrides = {
    backgroundColor: 'white',
    color: 'black',
    width: '450px'
}

export default (props) => (
    <AlertTemplate
        {...props}
        iconColors={{ close: 'black' }} 
        style={{ ...props.style, ...styleOverrides }}
    />
)
```

You can also create your own custom alert template and use the exposed icons. You can import the icons like so:

```js
//MyAlertTemplate.js

import React from 'react';
import { InfoIcon, SuccessIcon, ErrorIcon, CloseIcon } from 'react-alert-template-basic-with-icons'

const MyAlertTemplate = () => {} //Create your template with the icon components here

export default MyAlertTemplate
```

## Options

You can provide an `iconColors` prop to AlertTemplate in order to change the color of the icons. It takes an object of the following type:

```js
iconColors?: {
  info?: string,
  success?: string,
  error?: string,
  close?: string
}
```

The default colors are:

```js
info: '#2E9AFE'
success: '#31B404'
error: '#FF0040'
close: '#FFFFFF'
```

