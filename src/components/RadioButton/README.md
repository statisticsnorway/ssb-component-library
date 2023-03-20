RadioButton
========

> A clickable radio selector

### Usage

#### HTML

```html
<div class="ssb-radio">
    <input tabindex="0" id="id-item" type="radio" value="item">
    <label class="radio-label" for="id-item">Item</label>
</div>
```

#### React

```jsx harmony
<RadioButton
  callback={() => callbackFunction()}
  disabled={false}
  tabIndex="0"
  selected={false}
  value="option1"
  id="id-item"
>Item
</RadioButton>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| callback   | func | Function to trigger when value changes |
| children | node | Label for the checkbox |
| className   | string | Optional container class|
| disabled | bool | Toggles disabled state of input field |
| selected | bool | Selected state of checkbox |
| tabIndex | number | Tab index for focus |
| value | Required number or string | Input field value |
| id | string | Optional id |
