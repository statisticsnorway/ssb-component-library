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
| disabled | bool | Decides if the button is disabled |
| onClick | function | Callback for button click |
| primary | bool | Changes style to represent a primary button |
| type | string | Button type. Can be 'submit', 'reset', or 'button'. Defaults to 'button' |
