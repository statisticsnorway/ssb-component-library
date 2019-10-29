WordExplanation
========

> Pop-up box for explaining a word

### Usage

#### HTML
You will have to handle positioning in javascript to make it stick to the word you want explained.
```html
<div class="ssb-we-popup">
  <div class="ssb-we-arrow">
    <svg width="16" height="16">
      <rect width="16" height="16" rotate="45deg" />
    </svg>
  </div>
  <div class="content-box">
    <span class="info-text">{insert explanation}</span>
    <div class="ssb-we-closing">
      <XCircle size="14" /><span>Lukk</span>
    </div>
  </div>
</div>
```

#### React

```jsx harmony
<WordExplanation explanation={placeholderText}>wrapped</WordExplanation>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | node | Body content |
| explanation | string | Required explanation text for the popup |
