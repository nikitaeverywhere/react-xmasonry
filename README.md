# react-xmasonry

Simple, minimalistic and featured native masonry layout for React JS.

Example of Usage
----------------

The simplest layout using JSX looks as following:

```jsx
<XMasonry>
    <Card>
        <h1>Card One</h1>
        <p>Any text</p>
    </Card>
    <Card width="2">
        <h1>Card Two</h1>
        <p>Any text</p>
    </Card>
</XMasonry>
```

There is no more JavaScript than positioning and sizing! Use any CSS to make animations you like, 
for example:

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

Preview
-------

![Screenshot](https://cloud.githubusercontent.com/assets/4989256/23816799/6926b8c2-05f7-11e7-8766-bc3c7d10047c.png)

Too see the preview, open [the demo page](https://zitros.github.io/react-xmasonry).