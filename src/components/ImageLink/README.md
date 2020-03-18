ImageLink
========

> Clickable image box with title

### Usage

#### HTML
```html
<a class="ssb-image-link" href=" ">
    <div class="image-background"><img src="" alt="" /></div>
    <span class="il-type">Type</span>
    <span class="il-title">Title</span>
    {feather.arrowRightCircle 32px}
</a>
```

#### React
```jsx harmony
<ImageLink image={<img src={doge} alt="image" />} onClick={function} type="Type" title="Tittel" />
```
```jsx harmony
<ImageLink image={<img src={doge} alt="image" />} link="./" type="Type" title="Tittel" />
```
Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| className   | string | Optional container class|
| image | required element | An image to be put as background |
| link | string | Link to be navigated to |
| onClick | func | Function callback to be used instead of link |
| title | string | Title text |
| type | string | Type text |
