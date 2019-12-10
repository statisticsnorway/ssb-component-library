Dropdown
========

> A component that allows a user to select a value from a series of options.

### Usage

#### HTML
This component needs some javascript functionality to work.
```html
<div class="ssb-dropdown">
    <label for="input-dropdown">Menu header</label>
    <div class="dropdown-interactive-area">
        <button onclick="toggle the open class">
            <input class="focused" id="input-dropdown" disabled="" placeholder="Select item" value="">
            <!-- If closed -->
            <i class="dd-icon">{feather.chevronDown 18px}</i>
            <!-- If open -->
            <i class="dd-icon">{feather.chevronUp 18px}</i>
        </button>
        <div class="list-of-options">
            <button class="option-list-element" value="item1" id="item1" onclick="select item and close">Apples</button>
            <button class="option-list-element" value="item2" id="item2" onclick="select item and close">Rainbows</button>
            <button class="option-list-element" value="item3" id="item3" onclick="select item and close">Ocean</button>
        </div>
    </div>
</div>
```

#### React

```jsx harmony
const items = [
	{
		title: 'Apples',
		id: 'item1',
	}, {
		title: 'Rainbows',
		id: 'item2',
	}, {
		title: 'Ocean',
		id: 'item3',
	}, {
		title: 'Automobiles and other fun things to talk about',
		id: 'item4',
	}, 
];

<Dropdown header="Menu header" items={items} />

<Dropdown header="Menu header" selectedItem={{ title: 'Ocean', id: 'item3' }} items={items} />

<Dropdown header="Menu header" searchable items={items} />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| header | string | Displays header |
| items | arrayOf(title, id) |Required items for rendering dropdown |
| onSelect | func | Callback function when a title is selected |
| open | bool | Selected state of dropdown |
| placeholder | string | Placeholder for dropdown |
| searchable | bool | If true, dropdown is searchable |
| selectedItem | object | Selected element in dropdown |
