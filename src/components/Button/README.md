Button
========

> Action buttons

### Usage

#### HTML

```html
<button class="ssb-button">Click me!</button>

<button class="ssb-button primary-btn">
    <SomeIcon />
    Click me!
</button>

<button disabled="true">Disabled</button>
```

#### React

```jsx harmony
<Button>Click me!</Button>

<Button primary>Click me!</Button>

<Button disabled>Disabled</Button>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | Required node | Button text or/and icon |
| disabled | bool | Toggles disable state |
| onClick | function | Callback function |
| primary | bool | Changes design |
| type | string | Changes button type |
