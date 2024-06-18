# Link

> Different type of links

### Usage

#### HTML

```html
<a class="ssb-link" href=" " target="" rel="">
  <span class="link-text">A regular link</span>
</a>

<a class="ssb-link stand-alone" href=" " target="" rel="">
  <span class="link-text">A regular stand alone link with min 44px height & width</span>
</a>

<a class="ssb-link with-icon" href=" " target="" rel="">
  <div class="icon-wrapper">
    <i>{feather.arrowRight 16px}</i>
  </div>
  <span class="link-text">A regular link with icon</span>
</a>

<a class="ssb-link profiled mr-4" href=" " target="" rel="">
  <span class="link-text">A profiled link</span>
</a>

<a class="ssb-link profiled with-icon" href=" " target="" rel="">
  <div class="icon-wrapper">
    <i>{feather.arrowRight 20px}</i>
  </div>
  <span class="link-text">A profiled link with icon</span>
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

<Link href="" standAlone>A regular stand alone link with min 44px height & width</Link>

<Link href="" icon={<ArrowRight size={16} />}>A regular link with icon</Link>

<Link href="" linkType="profiled">A profiled link</Link>

<Link href=" " linkType="profiled" icon={<ArrowRight size={20} />}>A profiled link with icon</Link>

<Link href=" " linkType="header">A header link</Link>

<Link href="" negative>A regular link - Negative</Link>


```

Available props:

| Name       | Type             | Description                                                                         |
| ---------- | ---------------- | ----------------------------------------------------------------------------------- |
| ariaLabel  | string           | Defines a string value that describe the link if no link text                       |
| children   | Required node    | Something that renders to wrap the link around                                      |
| className  | string           | Optional container class                                                            |
| href       | Required string  | Destination for navigation                                                          |
| icon       | Optional node    | Renders an icon                                                                     |
| isExternal | Optional boolean | Will make the link open in new tab. Defaults to false                               |
| linkType   | Optional oneOf   | Changes the style. Can be 'regular', 'profiled', or 'header'. Defaults to 'regular' |
| negative   | Optional boolean | Will change component style. Defaults to false                                      |
| tabIndex   | number           | Tab index for focus                                                                 |
| title      | string           | The title attribute is used to provide additional information                       |
| onClick    | function         | Callback for anchor click                                                           |
| standAlone | Optional boolean | Resizing of a stand alone link to meet accessibility requirements                   |
