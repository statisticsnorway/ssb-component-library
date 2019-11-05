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
| children   | Required node | Something that renders to wrap the link around |
| className   | string | Optional container class|
| href | Required string| Destination for navigation |
| icon | Optional node | Renders an icon  |
| isExternal | Optional boolean | Will make the link open in new tab. Defaults to false |
| linkType | Optional oneOf |Changes the style. Can be 'regular', 'profiled', or 'header'. Defaults to 'regular' |
| negative | Optional boolean | Will change component style. Defaults to false |
