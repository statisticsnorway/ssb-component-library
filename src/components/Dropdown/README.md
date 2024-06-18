# Dropdown

> A component that allows a user to select a value from a series of options.

### Behavior

#### Keybindings

- SPACE opens/closes the dropdown list
- UP/DOWN arrows to move up/down the list
- ENTER selects the current option
- TAB focuses into and out of the dropdown

#### Known Caveats

- When the dropdown list is open and UP/DOWN arrows are used to navigate the list, there should be no scrolling so
  long as one is still within the options that are currently in view. Scrolling must start only when an option beyond
  the current viewport is accessed via UP/DOWN arrows.

  However, there is an [open issue in one of the libraries we use](https://github.com/joshwnj/react-visibility-sensor/pull/87)
  to sense visibility of options.

  Workaround: We always scroll to an option currently navigated to using the arrow keys.

### Usage

#### HTML standard dropdown

This component needs some javascript functionality to work.

```html
<div id="dropdown" class="ssb-dropdown">
  <span id="dropdown-label">Menu header</span>
  <div class="dropdown-interactive-area">
    <button
      class="opener"
      id="button_dropdown"
      tabindex="0"
      type="button"
      aria-expanded="false"
      aria-haspopup="listbox"
      aria-labelledby="dropdown-label button_dropdown"
    >
      -- Select --
    </button>
    <!-- If closed -->
    <i class="dd-icon">{feather.chevronDown 18px}</i>
    <!-- If open -->
    <i class="dd-icon">{feather.chevronUp 18px}</i>
    <ul
      id="list_of_options_dropdown"
      class="list-of-options"
      role="listbox"
      aria-labelledby="dropdown-label"
      tabindex="-1"
      aria-activedescendant="item1"
    >
      <li class="option-list-element active focused" id="item1" role="option" aria-selected="true">Apples</li>
      <li class="option-list-element" id="item2" role="option">Rainbows</li>
      <li class="option-list-element" id="item3" role="option">Ocean</li>
    </ul>
  </div>
</div>
```

#### HTML dropdown with search (combobox with autocomplete)

This component needs some javascript functionality to work.

```html
<div id="dropdown" class="ssb-dropdown">
  <label for="input_dropdown">Menu header</label>
  <div class="dropdown-interactive-area">
    <input
      class="focused"
      id="input_dropdown"
      placeholder="Search and select"
      role="combobox"
      aria-autocomplete="list"
      aria-expanded="true"
      aria-controls="list_of_options_dropdown"
      type="text"
      aria-activedescendant="item1"
      value=""
    />
    <!-- If closed -->
    <i class="dd-icon">{feather.chevronDown 18px}</i>
    <!-- If open -->
    <i class="dd-icon">{feather.chevronUp 18px}</i>
    <ul id="list_of_options_dropdown" class="list-of-options" role="listbox" tabindex="-1">
      <li class="option-list-element active focused" id="item1" role="option" aria-selected="true">Apples</li>
      <li class="option-list-element" id="item2" role="option">Rainbows</li>
      <li class="option-list-element" id="item3" role="option">Ocean</li>
    </ul>
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

| Name         | Type                             | Description                                                                                   |
| ------------ | -------------------------------- | --------------------------------------------------------------------------------------------- |
| id           | string                           | Optional id                                                                                   |
| className    | string                           | Optional container class                                                                      |
| error        | bool                             | show error message if true                                                                    |
| errorMessage | string                           | Renders an error message underneath input field                                               |
| header       | string                           | Displays header                                                                               |
| icon         | object                           | Alternative icon                                                                              |
| items        | arrayOf({ title, id, disabled }) | Required items for rendering dropdown (_disabled_ : is optional)                              |
| onSelect     | func                             | Callback function when a title is selected                                                    |
| open         | bool                             | Selected state of dropdown                                                                    |
| placeholder  | string                           | Placeholder for dropdown                                                                      |
| searchable   | bool                             | If true, dropdown is searchable                                                               |
| selectedItem | object                           | Selected element in dropdown                                                                  |
| tabIndex     | number                           | Tab index for focus                                                                           |
| ariaLabel    | string                           | Defines a string value that labels input or span to button element, use if not visible header |
| largeSize    | bool                             | Change width to 100% and size of font and icon                                                |
