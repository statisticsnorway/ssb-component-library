# PictureCard

> Clickable image box with title

### Usage

#### HTML

```html
<a class="ssb-picture-card" href=" ">
  <div class="image-background"><img src="" alt="" /></div>
  <span class="il-type">Type</span>
  <span class="il-title">Title</span>
  {feather.arrowRightCircle 32px}
</a>
```

#### React

```jsx harmony
<PictureCard imageSrc={url} altText="alt text" onClick={function} type="Type" title="Tittel" />
```

```jsx harmony
<PictureCard imageSrc={url} altText='alt text' link='./' type='Type' title='Tittel' />
```

Available props:

| Name      | Type            | Description                                  |
| --------- | --------------- | -------------------------------------------- |
| className | string          | Optional container class                     |
| imageSrc  | required (url)  | URL of the image to be used                  |
| altText   | required string | alt text for screen readers                  |
| link      | string          | Link to be navigated to                      |
| onClick   | func            | Function callback to be used instead of link |
| title     | string          | Title text                                   |
| type      | string          | Type text                                    |
