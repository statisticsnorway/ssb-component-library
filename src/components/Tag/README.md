Tag
========

> Action Tag

### Usage

#### HTML

```html
<button class="ssb-tag">Tag</button>

<button class="ssb-tag">
    <div class="st-icon">
        <i>{feather.star 18px}</i>
    </div>Tag with icon
</button>
```

#### React

```jsx harmony
<Tag>Tag</Tag>

<Tag icon={<Star size={18} />}>Tag with icon</Tag>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | Required node | Tag text or/and icon |
| className   | string | Optional container class|
| icon | node | Renders an icon |
| onClick | function | Callback for tag click |
