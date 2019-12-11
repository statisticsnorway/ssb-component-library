Pagination
========

> A component for navigating through pages split up in numbers

### Usage

#### HTML

```html
<nav class="ssb-pagination">
    <button class="direction-button previous">
		<i class="chevron-icon">{feather.chevronLeft 18px}</i>
		<span>Forrige</span>
    </button>
    <button class="nav-button-square">1</button>
    <button class="nav-button-square 2">2</button>
    <button class="nav-button-square 3">3</button>
    <button class="nav-button-square 4">4</button>
    <button class="nav-button-square 5 selected">5</button>
    <button class="nav-button-square 6">6</button>
    <button class="nav-button-square 7">7</button>
    <button class="nav-button-square 8">8</button>
    <div class="dotted-indicator">...</div>
    <button class="nav-button-square">20</button>
    <button class="direction-button next">
        <span>Neste</span>
        <i class="chevron-icon">{feather.chevronRight 18px}</i>
    </button>
</nav>
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
| items | arrayOf(text (string), path (string)) | Required. Items for text label and path |
| labelNext | string | Label for direction-button next , default is Next |
| labelPrevious | string | Label for direction-button previous, default is Previous |
| onSelect | func | Callback function |
| selectedPage | object | Optional. Selected item on render |
