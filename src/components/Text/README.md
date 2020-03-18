Text
========

> A component for showing Text
### Usage


#### HTML

```html
<span class="ssb-text-wrapper">Default text here</span>

<span class="ssb-text-wrapper small-text">Small text here</span>

<span class="ssb-text-wrapper negative">Negative text here</span>
```

#### React

```jsx harmony
<Text>Default text here</Text>

<Text small>Small text here</Text>

<Text negative>Negative text here</Text>


```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children   | Required node | Content within the wrapper |
| className   | string | Optional container class|
| negative | Optional boolean | Styling for dark theme |
| small | Optional boolean | Style textsize |
