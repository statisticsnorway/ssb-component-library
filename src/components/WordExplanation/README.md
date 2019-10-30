WordExplanation
========

> Pop-up box for explaining a word

### Usage

#### HTML
Toggle the class "open" using javascript
```html
<div>
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
<WordExplanation explanation={placeholderText}>wrapped</WordExplanation>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | node | Body content |
| explanation | string | Required explanation text for the popup |
