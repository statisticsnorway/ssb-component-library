# Dialog

> A component for showing messages to the user

### Usage

#### HTML

```html
<div class="ssb-dialog info">
  <div class="icon-panel">
    <i class="icon">{feather.alertCircle 40px}</i>
  </div>
  <div class="dialog-content">
    <span class="dialog-title">A fitting title</span>
    <div class="content">Insert content here</div>
  </div>
</div>

<div class="ssb-dialog warning">
  <div class="icon-panel">
    <i class="icon">{feather.alertTriangle 40px}</i>
  </div>
  <div class="dialog-content">
    <span class="dialog-title">A fitting title</span>
    <div class="content">Insert content here</div>
  </div>
</div>
```

#### React

```jsx harmony
<Dialog title="A fitting title Info dialog">
  Insert content here
</Dialog>

<Dialog type='warning' title="A fitting title Warning dialog">
  Insert content here
</Dialog>
```

Available props:

| Name      | Type                | Description                |
| --------- | ------------------- | -------------------------- |
| children  | Required node       | Content within the wrapper |
| className | string              | Optional container class   |
| title     | Required string     | Bold text as a title       |
| type      | 'info' or 'warning' | Changes color and icon     |

**Dependencies**

- [Paragraph](../Paragraph)
