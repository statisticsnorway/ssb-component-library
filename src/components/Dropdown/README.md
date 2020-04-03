Dropdown
========

> A component that allows a user to select a value from a series of options.

### Behavior

#### Keybindings

- SPACE opens/closes the dropdown list
- UP/DOWN arrows to move up/down the list
- ENTER selects the current option

#### Known Caveats

- When the dropdown list is open and UP/DOWN arrows are used to navigate the list, there should be no scrolling so
  long as one is still within the options that are currently in view. Scrolling must start only when an option beyond
  the current viewport is accessed via UP/DOWN arrows.
  
  However, there is an [open issue in one of the libraries we use](https://github.com/joshwnj/react-visibility-sensor/pull/87)
  to sense visibility of options. 
  
  Workaround: We always scroll to an option currently navigated to using the arrow keys.
  
- We notice that when using keyboard or mouse exclusively of each other navigation works fine, but not together 
  (for example, mouse selection along with keyboard up/down navigation). 

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
        disabled: true,
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
| className   | string | Optional container class|
| header | string | Displays header |
| items | arrayOf({ title, id, disabled }) |Required items for rendering dropdown (*disabled* : is optional) |
| onSelect | func | Callback function when a title is selected |
| open | bool | Selected state of dropdown |
| placeholder | string | Placeholder for dropdown |
| searchable | bool | If true, dropdown is searchable |
| selectedItem | object | Selected element in dropdown |
