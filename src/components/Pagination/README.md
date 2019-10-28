Pagination
========

> A component for navigating through pages split up in numbers

### Usage

#### HTML

```html
<div class="ssb-key-figures">
  <div class="direction-button">
    <i class="chevron-icon">{chevron left icon}</i> Forrige
  </div>
  <div class="nav-button-square selected" onclick="{select this}">1</div>
  <div class="nav-button-square" onclick="{select this}">2</div>
  <div class="nav-button-square" onclick="{select this}">3</div>
  <div class="nav-button-square" onclick="{select this}">4</div>
  <div class="nav-button-square" onclick="{select this}">5</div>
  <div class="nav-button-square" onclick="{select this}">6</div>
  <div class="nav-button-square" onclick="{select this}">7</div>
  <div class="nav-button-square" onclick="{select this}">8</div>
  <div class="dotted-indicator">...</div>
  <div class="nav-button-square" onclick="{select this}">20</div>
  <div class="direction-button">
    <i class="chevron-icon">{chevron right icon}</i> Neste
  </div>
</div>
```

#### React

```jsx harmony
const items = [
  { text: '1', path: '/1' },
  { text: '2', path: '/2' },
  { text: '3', path: '/3' },
  ...
  { text: '20', path: '/20' },
];
<Pagination items={items} selectedPage={items[4]} />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| items | arraOf({text (string), path (string)}) | Required prop to render the buttons |
| onSelect | func | Callback function |
| selectedPage | object | Pre-selects a page on render |
