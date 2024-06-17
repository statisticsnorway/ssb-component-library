# Paragraph

> A component for showing a paragraph

### Usage

#### HTML

```html
<p class="ssb-paragraph">Default text here</p>

<p class="ssb-paragraph negative">Negative text here</p>
```

#### React

```jsx harmony
<Paragraph>Default text here</Paragraph>

<Paragraph negative>Negative text here</Paragraph>
```

Available props:

| Name      | Type             | Description                |
| --------- | ---------------- | -------------------------- |
| children  | Required node    | Content within the wrapper |
| className | String           | Optional container class   |
| negative  | Optional boolean | Toggles text color         |
