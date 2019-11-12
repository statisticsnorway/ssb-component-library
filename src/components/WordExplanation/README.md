WordExplanation
========

> Pop-up box for explaining a word

### Usage

#### HTML
Toggle the class "open" using javascript
```html
<div class="ssb-word-explanation">
  <div class="we-text-wrap">Explain this</div>
  <i>Ordforklaring icon</i>
  <div class="we-animate-background"></div>
  <div class="ssb-we-popup {open or closed}">
    <div class="content-box">
      <span class="info-text">{insert explanation}</span>
      <div class="ssb-we-closing">
        <XCircle size="14" /><span>Lukk</span>
      </div>
    </div>
  </div>
</div>
```

#### React

```jsx harmony
<WordExplanation explanation={placeholderText}>Explain this</WordExplanation>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | node | Something to wrap the click event around |
| explanation | required string | Text to be inside popup |
