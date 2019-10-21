Link
========

> Different type of links
### Usage


#### HTML

```html
<a class="ssb-link" href=" " target="" rel="">
    <span class="link-text">A regular link</span>
</a>

<a class="ssb-link with-icon" href=" " target="" rel="">
    <SomeIcon/>
  <span class="link-text">A regular link with icon</span>
</a>

<a class="ssb-link profiled" href=" " target="" rel="">
    <span class="link-text">A profiled link</span>
</a>

<a class="ssb-link header" href=" " target="" rel="">
    <span class="link-text">A header link</span>
</a>

<a class="ssb-link negative" href=" " target="" rel="">
    <span class="link-text">A regular link - Negative</span>
</a>
```

#### React

```jsx harmony
<Link href="">A regular link</Link>

<Link href="" icon={<ArrowRight size={20} />}>A regular link with icon</Link>

<Link href="" linkType="profiled">A profiled link</Link>

<Link href="" linkType="header">A header link</Link>

<Link href="" negative>A regular link - Negative</Link>


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
