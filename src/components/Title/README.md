# Title

> A component handling header elements

### Usage

#### HTML

```html
<div class="ssb-title"><h1>Title</h1></div>

<div class="ssb-title"><h2>Title</h2></div>
```

#### React

```jsx harmony
<Title size="1">Title</Title>

<Title size="2" negative>Title</Title>
```

Available props:

| Name      | Type               | Description                 |
| --------- | ------------------ | --------------------------- |
| children  | Required node      | Child nodes                 |
| className | string             | Optional container class    |
| negative  | bool               | Toggles text color          |
| size      | 1, 2, 3, 4, 5 or 6 | Changes header element size |
