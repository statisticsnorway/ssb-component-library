# References

> Wrapper for title, paragraph and link

### Usage

#### HTML

```html
<div class="ssb-references">
  <span class="reference-header">Source</span>
  <div>
    <a class="ssb-link" href=" " target="" rel="">
      <span class="link-text">Link 1</span>
    </a>
  </div>
  <div>
    <a class="ssb-link" href=" " target="" rel="">
      <span class="link-text">Link 2</span>
    </a>
  </div>
  <div>
    <span class="ssb-text-wrapper">A paragraph&nbsp;</span>
    <a class="ssb-link" href=" " target="" rel="">
      <span class="link-text">Link 3</span>
    </a>
  </div>
</div>
```

#### React

```jsx harmony
const referenceList = [
  {
    href: ' ',
    label: 'Link 1',
  },
  {
    href: ' ',
    label: 'Link 2',
  },
  {
    href: ' ',
    label: 'Link 3',
    plainText: 'A paragraph',
  },
]

;<References title='Sources' referenceList={referenceList} />
```

Available props:

| Name          | Type                                | Description                                |
| ------------- | ----------------------------------- | ------------------------------------------ |
| className     | string                              | Optional container class                   |
| referenceList | arrayOf({ href, label, plainText }) | Required list of objects to render content |
| title         | string                              | Header text                                |

**Dependencies**

- [Link](../Link)
- [Text](../Title)
