Dialog
========

> A component for showing messages to the user

### Usage

#### HTML

```html
<div class="ssb-dialog">
    <div class="icon-panel">
        <Icon />
    </div>
    <div class="dialog-content">
        <span class="dialog-title">A fitting title</span>
        <p>Insert content here</p>
    </div>
</div>
```

#### React

```jsx harmony
<Dialog type='warning' title="A fitting title">
  Insert content here
</Dialog> 
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children   | Required node | Content within the wrapper |
| pageNumber | Optional number or string | Optional rendering of a page number |
