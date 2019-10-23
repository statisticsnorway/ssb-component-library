RadioGroup
========

> A wrapper for multiple radio buttons

### Usage

#### HTML

```html
<div class="ssb-radio-group">
    <div class="ssb-title no-margin"><h5>Title</h5></div>
    <div class="ssb-radio">
        <input type="radio" id="option1" value="option1" />
        <label class="radio-label" for="option1">Insert label</label>
    </div>
    <div class="ssb-radio">
        <input type="radio" id="option2" value="option2" />
        <label class="radio-label" for="option2">Insert label</label>
    </div>
</div>
```

#### React

```jsx harmony
<RadioGroup
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

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| header | string | Renders a h5 title |
| items | arrayOf(label, value) | Required items for rendering radio buttons |
| onChange | func | Callback function when a value is changed |
| selectedValue | string | Pre selected value |
