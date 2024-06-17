# Glossary

> Pop-up box for explaining a word

### Usage

#### HTML

Toggle the class "open" and aria-expanded "true" using javascript

```html
<div class="ssb-glossary">
  <button class="glossary-button" aria-expanded="false">
    <!-- click to toggle 'open' class -->
    <span class="glossary-text-wrap">Explain this</span>
    <i className="glossary-logo" aria-hidden="true">{feather.openBook 12px}</i>
  </button>
  <div class="glossary-popup {open or closed}">
    <div class="content-box">
      <span class="info-text">{insert explanation}</span>
      <div class="glossary-closing">
        <div role="button" tabindex="0">
          <i class="icon" aria-hidden="true">{feather.xCircle 14px}</i>
          <span>Lukk</span>
        </div>
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

| Name        | Type            | Description                              |
| ----------- | --------------- | ---------------------------------------- |
| children    | node            | Something to wrap the click event around |
| className   | string          | Optional container class                 |
| closeText   | string          | Close button text, default "Lukk"        |
| explanation | required string | Text to be inside popup                  |
