KeyFigures
========

> A component for showing key figures with logo

### Usage

#### HTML

```html
<div class="ssb-key-figures">
  <div class="kf-icon large"><i /></div>
  <div>
    <span class="ssb-title kf-title">Title</span>
    <div>2019</div>
    <div class="ssb-number large">12 345</div>
    <h4 class="ssb-title kf-title">husholdninger</h4>
  </div>
</div>

<div class="ssb-key-figures">
  <div class="kf-icon small"><i /></div>
  <div>   
    <div class="ssb-word-explanation">
      <div class="we-text-wrap">
        <div class="ssb-title kf-title">Explain this</div>
      </div>
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
    <div class="kf-time">2019</div>
    <div class="ssb-number small">12 345</div>
    <h4 class="ssb-title kf-title">husholdninger</h4>
  </div>
</div>
```

#### React

```jsx harmony
<KeyFigures
  icon={<Icon />}
  number="12345"
  numberDescription="husholdninger"
  size="small"
  title="Title"
  time="2019"
  wordExplanation="Some string that explains the title"
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
| wordExplanation | string | Explanation for the title |

__Dependencies__
 - [Number](../Number)
 - [Title](../Title)
 - [WordExplanation](../WordExplanation)
