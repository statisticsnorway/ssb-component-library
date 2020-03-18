Glossary
========

> Pop-up box for explaining a word

### Usage

#### HTML
Toggle the class "open" using javascript
```html
<button class="ssb-glossary"><!-- click to toggle 'open' class -->
  <div class="glossary-text-wrap">Explain this</div>
  <i>{feather.openBook 12px}</i>
  <div class="glossary-animate-background"></div>
  <div class="ssb-glossary-popup {open or closed}">
    <div class="content-box">
      <span class="info-text">{insert explanation}</span>
      <div class="ssb-glossary-closing">
        <i class="icon">{feather.xCircle 14px}</i>
        <span>Lukk</span>
      </div>
    </div>
  </div>
</button>
```

#### React

```jsx harmony
<Glossary explanation={placeholderText}>Explain this</Glossary>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | node | Something to wrap the click event around |
| className   | string | Optional container class|
| closeText | string | Close button text, default "Lukk"  |
| explanation | required string | Text to be inside popup |
