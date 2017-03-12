# react-xmasonry

[![Dependencies][dep-image]][dep-url]
[![License][license-image]][license-url]

Simple, minimalistic and featured native masonry layout for React JS.

<h4>General Features</h4>
<ul>
    <li>React JS <b>native</b> masonry layout implementation with no dependencies.</li>
    <li>Minimalistic design and simple use case.</li>
    <li>Ability to control blocks width (in columns) and column width.</li>
    <li>Responsive, mobile-friendly approach (so there is no "fixed block width" option).</li>
    <li>Fully customizable: use CSS animations and transitions you wish (use <i>.xmasonry</i> and <i>.xblock</i> selectors).</li>
</ul>

Visit [the demo page](https://zitros.github.io/react-xmasonry) for more details.

Installation
------------

```bash
npm install react-xmasonry --save
```

Example of Usage
----------------

Import `XMasonry` and `XBlock` components:

```js
import { XMasonry, XBlock } from "react-xmasonry";
```

The simplest layout using JSX and a little styling looks as following:

```jsx
<XMasonry>
    <XBlock>
        <div className="card">
            <h1>Card One</h1>
            <p>Any text</p>
        </div>
    </XBlock>
    <XBlock width="2">
        <div className="card">
            <h1>Card Two</h1>
            <p>Any text</p>
        </div>
    </XBlock>
</XMasonry>
```

There is no more JavaScript than positioning and sizing! Use any CSS to make animations and 
transitions you like (`.xmasonry` and `.xblock` selectors), for example:

```css
@keyframes comeIn {
    0% { transform: scale(0) }
    75% { transform: scale(1.03) }
    100% { transform: scale(1) }
}

.xmasonry .xblock {
    animation: comeIn ease 0.5s;
    animation-iteration-count: 1;
}

.card {
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 1px 3px darkgray;
}
```

See the [example page sources](https://github.com/ZitRos/react-xmasonry/blob/master/docs/index.jsx).

Using Components
----------------

There are several properties you can assign to `XMasonry` and `XBlock` components.

### `<XMasonry>` Component Properties

| Property | Default | Description |
|---|---|---|
| `center` | `true` | A boolean value determining whether nested `<XBlock>`s should be centered if there are empty columns left |
| `responsive` | `true` | A boolean value determining whether the layout should be responsive to window size changes |
| `targetBlockWidth` | `300` | A number which determines the "target" width in pixels of the nested `<XBlock>`s. The layout takes all available space, and determines the number of columns using this value. For example, if container has `600` px of available width and we specify `targetBlockWidth={200}`, we will get exactly `3` columns of `200` px width. And it will still be `3` columns if there is `660` pixels available, this time with each column taking `220` px. |

### `<XBlock>` Component Properties

| Property | Default | Description |
|---|---|---|
| `width` | `1` | A number which determines nested block width **in columns**. If the number of columns available is less than the specified width, nested block will shrink to fit available space. |

[license-image]: https://img.shields.io/github/license/mashape/apistatus.svg
[license-url]: LICENSE
[dep-image]: https://img.shields.io/badge/dependencies-none-brightgreen.svg
[dep-url]: http://npm.anvaka.com/#/view/2d/react-xmasonry
