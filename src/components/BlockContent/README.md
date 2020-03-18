BlockContent
========

> A page layout component to wrap around lots of content 

### Usage

#### HTML

```html
<div class="ssb-block-content">
    <div class="section-number">1</div>
    Insert content here
</div>
```

#### React

```jsx harmony
<BlockContent sectionNumber={1}>
  Insert content here
</BlockContent> 
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children   | Required node | Content within the wrapper |
| className   | string | Optional container class|
| sectionNumber | Optional number or string | Optional rendering of a page number |
