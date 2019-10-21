Link
========

> A page layout component to wrap around lots of content 
### Usage


#### HTML

```html
<a class="ssb-link" href=" " target="" rel="">
    <span class="link-text">A regular link</span>
</a>
```

#### React

```jsx harmony
<Link href=" ">A regular link</Link>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children   | Required node | Content within the wrapper |
| href | Required string|  |
| icon | Optional node |  |
| isExternal | Optional boolean |  |
| linkType | Optional oneOf | One of 'regular', 'profiled' or 'header'  |
| negative | Optional boolean | Styling for dark theme |
