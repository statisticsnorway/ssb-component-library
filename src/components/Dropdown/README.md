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
        <div class="list-of-options">
            <div class="option-list-element" value="item1" id="item1">Apples</div>
            <div class="option-list-element selected" value="item2" id="item2">Rainbows</div>
            <div class="option-list-element" value="item3" id="item3">Ocean</div>
        </div>
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
| header | string | Displays header |
| icon | node | Renders an icon |
| items | arrayOf(title, id) |Required items for rendering dropdown |
| onSelect | func | Callback function when a title is selected |
| open | bool | Selected state of dropdown |
| placeholder | string | Placeholder for dropdown |
| searchable | bool | If true, dropdown is searchable |
| selectedItem | object | Selected element in dropdown |
