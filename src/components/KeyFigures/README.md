KeyFigures
========

> A component for showing key figures with logo

### Usage

#### HTML

```html
<!-- Standard large key figure -->
<div class="ssb-key-figures large">
  <div class="kf-icon large"><!-- Insert icon --></div>
  <div>
    <span class="kf-title">Title</span>
    <div class="kf-time">2019</div>
    <div class="number-section">
      <div class="ssb-number large">12 345</div>
      <span class="kf-title subtitle">husholdninger</span>
    </div>
  </div>
</div>

<!-- Without a number -->
<div class="ssb-key-figures large">
  <div class="kf-icon large"><!-- Insert icon --></div>
  <div>
    <span class="kf-title">Title</span>
    <div class="kf-time">2019</div>
    <span class="no-number">Tall ikke tilgjengelig</span>
  </div>
</div>

<!-- With word explanation -->
<div class="ssb-key-figures small">
  <div class="kf-icon small"><!-- Insert icon --></div>
  <div>   
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
    <div class="kf-time">2019</div>
    <div class="number-section">
      <div class="ssb-number large">12 345</div>
      <span class="kf-title subtitle">husholdninger</span>
    </div>
  </div>
</div>
```

#### React

```jsx harmony
<KeyFigures
  icon={/* Insert icon */}
  number="12345"
  numberDescription="husholdninger"
  size="small"
  title="Title"
  time="2019"
  glossary="Some string that explains the title"
/>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| icon | node | Renders an icon |
| number | string or number | Large number to be displayed |
| numberDescription | string | Subtitle |
| size | 'small', 'medium' or 'large' | Change size of number and icon |
| title | string | Displays title |
| time | string or number | Displays a year between title and number |
| glossary | string | Explanation for the title |

__Dependencies__
 - [Number](../Number)
 - [Glossary](../Glossary)
