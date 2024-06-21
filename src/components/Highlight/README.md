# Highlight

> A component for highlighting words, parts of a text line or paragraph.

### Usage

#### HTML

```html
<mark class="ssb-mark">Default text here</mark>

<mark class="ssb-mark negative">Negative text here</mark>
```

#### React

```jsx harmony
<Highlight>Default text here</Highlight>

<Highlight negative>Negative text here</Highlight>


```

Available props:

| Name      | Type             | Description                |
| --------- | ---------------- | -------------------------- |
| children  | Required node    | Content within the wrapper |
| className | string           | Optional container class   |
| negative  | Optional boolean | Styling for dark theme     |
