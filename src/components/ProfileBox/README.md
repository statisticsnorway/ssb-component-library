ProfileBox
========

> Wrapper for Link and Text

### Usage

#### HTML

```html
<div class="ssb-profile-box">
    <a class="ssb-link header" href=" " target="" rel="">
        <span class="link-text">This is a title link</span>
    </a>
    <p class="ssb-paragraph ">Explaining text about something.</p>
</div>
```

#### React

```jsx harmony
<ProfileBox link=" " text="Explaining text about something." title="This is a title link" />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| link | string | Destination for navigation |
| text | string | Renders text |
| title | string | Link text  |
