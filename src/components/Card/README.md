Card
========

> Wrapper for a Profile Box

### Usage

#### HTML

```html
<div class="ssb-card">
  <button class="clickable" onclick="do something">
    <div class="card-content"> <!-- add class 'centered' to center all content -->
      {fill with content}
    </div>
  </button>
  /* Optional download field */
  <a download href=" " class="download-section">
    {feather.download}
    <span>Last ned</span>
  </a>
</div>

<!-- With image on left side -->
<div class="ssb-card">
  <button class="clickable left-orientation" onclick="do something">
    <div class="card-content with-image">
      {fill with content}
    </div>
  </button>
</div>

<!-- With image on top side -->
<div class="ssb-card">
  <button class="clickable top-orientation" onclick="do something">
    <div class="card-content with-image">
      {fill with content}
    </div>
  </button>
</div>
```

#### React

```jsx harmony
<Card centered fileLocation=" " onClick={() => {}}>
  fill with content
</Card>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| centered | bool | Centers text |
| children | node | Required. Fills box with content |
| fileLocation | string | Path to downloadable file. Ads the download field |
| image | element | Image element |
| imageElement | oneOf(['left', 'top']) | Position of the image |
| onClick | func | Callback function |
