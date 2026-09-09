# A small (0.5 kb) dom utility

## Install

```
npm install @ddaghan/dom
```

## Use

```js
import {dom} from '@ddaghan/dom'

document.body.appendChild(dom('main', {}, [
    dom('h1', {}, ['Hello world!']),
    dom('button', {onclick : () => alert('clicked')}, ['click me']),
    dom('div', {}, [
        dom('span', {}, ['lorem ipsum'])
    ])
]));
```
