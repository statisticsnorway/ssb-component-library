RadioButton
========

> A clickable radio selector

### Usage

#### HTML

```html
<div class="ssb-radio">
    <input id="option1" value="option1" />
    <label class="radio-label" for="option1">Insert label</label>
</div>
```

#### React

```jsx harmony
<RadioButton
  callback={() => callbackFunction()}
  disabled={false}
  index="1"
  selected={false}
  value="option1"
>Item 1
</RadioButton>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| callback   | func | Function to trigger when value changes |
| children | node | Label for the checkbox |
| disabled | bool | Toggles disabled state of input field |
| index | number | Tab index for focus |
| selected | bool | Selected state of checkbox |
| value | Required number or string | Input field value |
