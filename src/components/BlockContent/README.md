BlockContent
========

> A page layout component to wrap around lots of content 

### Usage

#### HTML

```html
<div class="ssb-block-content">
    <div class="page-number">1</div>
    Insert content here
</div>
```

#### React

```jsx harmony
<BlockContent pageNumber={1}>
  Insert content here
</BlockContent> 
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children   | Required node | Content within the wrapper |
| pageNumber | Optional number or string | Optional rendering of a page number |
