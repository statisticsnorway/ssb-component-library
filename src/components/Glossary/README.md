Glossary
========

> Pop-up box for explaining a word

### Usage

#### HTML
This component requires that the user handles the opening and positioning of the
tooltip that contains the explanation of the word. 

```html
<div class="ssb-glossary">
  <button class="glossary-button"><!-- click to open -->
    <div class="glossary-text-wrap">Explain this</div>
    <i class="glossary-logo">{feather.bookOpen 12px}</i>
    <div class="glossary-animate-background"></div>
  </button>

  <!-- This contains the explanation and needs js for positioning -->
  <div class="ssb-glossary-popup {open or closed}">
    <div class="content-box">
      <span class="info-text">{insert explanation}</span>
      <div class="ssb-glossary-closing">
        <i class="icon">{feather.xCircle 14px}</i>
        <span>Lukk</span>
      </div>
    </div>
  </div>
</div>
```

#### React

```jsx harmony
<Glossary explanation={placeholderText}>Explain this</Glossary>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | node | Something to wrap the click event around |
| explanation | required string | Text to be inside popup |
