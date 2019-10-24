CheckboxGroup
========

> A wrapper for multiple checkbox buttons

### Usage

#### HTML

```html
<div class="ssb-checkbox-group">
  <div class="ssb-title no-margin"><h5>Title</h5></div>
  <div class="ssb-checkbox">
    <input type="checkbox" id="option1" value="option1" />
    <label class="checkbox-label" for="option1">Insert label</label>
  </div>
  <div class="ssb-checkbox">
    <input type="checkbox" id="option2" value="option2" />
    <label class="checkbox-label" for="option2">Insert label</label>
  </div>
</div>
```

#### React

```jsx harmony
<CheckboxGroup
  header="Header"
  items={
    {
      label: 'Item 1',
      value: 'item1',
    },
    {
      label: 'Item 2',
      value: 'item2',
    },
  }
  onChange={() => callback}
  selectedValue="item2"
/>
```

Available props:

| Name | Type | Description |
| ---- | ---- | ---- |
| header | string | Renders a h5 title |
| items | arrayOf(label, value) | Required items for rendering radio buttons |
| onChange | func | Callback function when a value is changed |
| selectedValue | string | Pre selected value |
