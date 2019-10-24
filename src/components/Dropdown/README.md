Dropdown
========

> A component that allows a user to select a value from a series of options.

### Usage

#### HTML

```html
<div class="ssb-dropdown">
    <label for="input-dropdown">Menu header</label>
    <div class="dropdown-interactive-area">
        <input class="focused" id="input-dropdown" disabled="" placeholder="Select item" value="">
        <div class="dd-icon"><i /></div>
        <ul class="list-of-options">
            <li class="option-list-element false">
                <option value="item1" id="item1">Apples</option>
            </li>
            <li class="option-list-element false">
                <option value="item2" id="item2">Rainbows</option>
            </li>
            <li class="option-list-element false">
                <option value="item3" id="item3">Ocean</option>
            </li>
        </ul>
    </div>
</div>
```

#### React

```jsx harmony
<Dropdown header="Menu header" icon={<ChevronDown />} items={items} />

<Dropdown header="Menu header" icon={<ChevronDown />} selectedItem={{ title: 'Ocean', id: 'item3' }} items={items} />

<Dropdown header="Menu header" icon={<ChevronDown />} searchable items={items} />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| icon | node | Renders an icon |
| items | arrayOf(title, id) |Required items for rendering dropdown |
| header | string | Displays header |
| onSelect | func | Callback function when a title is selected |
| open | bool | Selected state of dropdown |
| placeholder | string | Placeholder for dropdown |
| searchable | bool | If true, dropdown is searchable |
| selectedItem | object | Selected element in dropdown |
