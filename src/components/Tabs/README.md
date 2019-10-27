Tabs
========

> A tab selector component

### Usage

#### HTML

```html
<div class="ssb-tabs">
  <div class="navigation-item" onclick="insert function">
    <span>Item 1</span>
  </div>
  <div class="navigation-item" onclick="insert function">
    <span>Item 2</span>
  </div>
  <div class="navigation-item" onclick="insert function">
    <span>Item 3</span>
  </div>
</div>
```

#### React

```jsx harmony
const items = [
  {
    title: 'Item 1',
    path: 'item1/',
  },
  {
    title: 'Item 2',
    path: 'item2/',
  },
  {
    title: 'Item 3',
    path: 'item3/',
  },
];

<Tabs items={items} />
```

Available props:

| Name       | Type          | Description  |
| ---------- | ------------- | ----- |
| activeOnInit | string | Will set an item to be active on init |
| items | arrayOf({title, path}) | Sets label and path of buttons |
| onClick | func | Callback function |
