RadioGroup
========

> A wrapper for multiple radio buttons

### Usage

#### HTML

```html
<div class="ssb-radio-group">
	<div class="ssb-title no-margin"><h5>Title</h5></div>
	<!-- Use flex-row If horizontal layout -->
    <div class="boxes flex-column">
        <div class="ssb-radio">
            <input tabindex="0" id="item1" type="radio" value="item1">
            <label class="radio-label" for="item1">Item 1</label>
        </div>
        <div class="ssb-radio">
            <input tabindex="0" id="item2" type="radio" value="item2">
            <label class="radio-label" for="item2">Item 2</label>
        </div>
        <div class="ssb-radio">
            <input tabindex="0" id="item3" disabled="" type="radio" value="item3">
            <label class="radio-label" for="item3">Item 3</label>
        </div>
    </div>
</div>
```

#### React

```jsx harmony
const radioItems = [
	{
		label: 'Item 1',
		value: 'item1',
	}, {
		label: 'Item 2',
		value: 'item2',
	}, {
		label: 'Item 3',
		value: 'item3',
		disabled: 'true',
	},
];

<RadioGroup header="Header" items={radioItems} onChange={() => callback} selectedValue="item2" />

<RadioGroup header="Header" items={radioItems} onChange={() => callback} selectedValue="item2" orientation="row" />

```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| header | string | Renders a h5 title |
| items | arrayOf(label, value) | Required items for rendering radio buttons |
| onChange | func | Callback function when a value is changed |
| orientation | 'column' or 'row' , default column| Vertical og horizontal layout|
| selectedValue | string | Pre selected value |

__Dependencies__
 - [RadioButton](../RadioButton)
 - [Title](../Title)
