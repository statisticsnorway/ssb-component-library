# Checkbox

> A clickable box selector

### Usage

#### HTML

```html
<div class="ssb-checkbox">
  <input id="option1" value="option1" />
  <label class="checkbox-label" for="option1">Insert label</label>
</div>
```

#### React

```jsx harmony
<Checkbox callback={() => callbackFunction()} disabled={false} tabIndex='0' selected={false} value='option1'>
  Item 1
</Checkbox>
```

Available props:

| Name      | Type                      | Description                            |
| --------- | ------------------------- | -------------------------------------- |
| callback  | func                      | Function to trigger when value changes |
| children  | node                      | Label for the checkbox                 |
| className | string                    | Optional container class               |
| disabled  | bool                      | Toggles disabled state of input field  |
| selected  | bool                      | Selected state of checkbox             |
| tabIndex  | number                    | Tab index for focus                    |
| value     | Required number or string | Input field value                      |
