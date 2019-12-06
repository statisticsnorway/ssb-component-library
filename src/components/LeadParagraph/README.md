Lead Paragraph
========

> A component for showing a lead paragraph
### Usage


#### HTML

```html
<p class="ssb-lead-paragraph">Default text here</p>

<p class="ssb-lead-paragraph negative">Negative text here</p>
```

#### React

```jsx harmony
<LeadParagraph>Default text here</LeadParagraph>

<LeadParagraph negative>Negative text here</LeadParagraph>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children   | Required node | Content within the wrapper |
| className   | string | Optional container class|
| negative | Optional boolean | Toggles text color |
