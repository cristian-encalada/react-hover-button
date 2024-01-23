# React Hover Button

[![Version][npm-image]][npm-url]

![btn](./btn.gif)

A Button Component of React. Inspired By [Hover/focus effects](https://codepen.io/thebabydino/pen/vQNVQe/")

## Get Started

### Install

```bash
npm i @devbug/react-hover-button
```

### Usage

```jsx
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HoverButtonDiagonal } from "@devbug/react-hover-button";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <HoverButtonDiagonal
            width="12em"
            height="2.5em"
            maskColor="black"
            background="white"
            
          >
          Hover me!
          </HoverButtonDiagonal>
  </React.StrictMode>,
)
```

#### Props List

```json
  color = "#000"，//font color
  width = "12em", // button width
  height,   // button height and lineheight
  background, // buton backgound
  maskColor, // mask color and background color
  children = "Hover me",
  onClick,
  loading = false,
  disabled = false
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

Original work:

- **[react-hover-button](https://github.com/daryl-z/react-hover-button)**
  - MIT. Copyright (c) 2017 daryl-z

Updated to support React v18:
- **[@devbug/react-hover-button](https://github.com/cristian-encalada/react-hover-button)**
  - Copyright (c) 2024 Cristian Encalada


[npm-image]: https://img.shields.io/npm/v/@devbug/react-hover-button.svg?style=flat-square
[npm-url]:   https://www.npmjs.com/package/@devbug/react-hover-button
