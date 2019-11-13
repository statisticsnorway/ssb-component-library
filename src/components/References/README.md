References
========

> Wrapper for title, paragraph and link
### Usage


#### HTML

```html
<div class="ssb-references">
  <h5 class="ssb-title no-margin">Sources</h5>
  <a class="ssb-link" href=" " target="" rel="">
    <span class="link-text">Source link</span>
  </a>
</div>

<div class="ssb-references">
  <h5 class="ssb-title no-margin">Sources</h5>
  <span class="ssb-text-wrapper">Plain text</span>
  <a class="ssb-link" href=" " target="" rel="">
    <span class="link-text">Source link</span>
  </a>
</div>
```

#### React

```jsx harmony
const referenceList = [
  {
    href: ' ',
    label: 'Link 1',
  }, {
    href: ' ',
    label: 'Link 2',
  }, {
    href: ' ',
    label: 'Link 3',
    plainText: 'A paragraph',
  },
];

<References title="Sources" referenceList={referenceList} />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| referenceList | arrayOf({ href, label, plainText }) | Required list of objects to render content |
| title | string| Header text |

__Dependencies__
 - [Link](../Link)
 - [Text](../Title)
