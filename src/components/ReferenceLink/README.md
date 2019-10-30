Reference link
========

> Wrapper for title, paragraph and link
### Usage


#### HTML

```html
<div class="ssb-reference-link">
    <h5 class="ssb-title no-margin">Source</h5>
    <p class="ssb-paragraph no-margin">
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">Source link</span>
        </a>
    </p>
</div>

<div class="ssb-reference-link">
    <h5 class="ssb-title no-margin">Source</h5>
    <p class="ssb-paragraph  no-margin">Paragraph text before link
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">Some kinda reference link</span>
        </a>
    </p>
</div>
```

#### React

```jsx harmony
<ReferenceLink title="Source" linkText="Source link" href=" " />

<ReferenceLink title="Source" linkText="Some kinda reference link" paragraphText="Paragraph text before link" href=" " />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| href | string| Destination for navigation |
| linkText | string | Link text  |
| paragraphText | string| Text before link |
| title | string| Header text |
