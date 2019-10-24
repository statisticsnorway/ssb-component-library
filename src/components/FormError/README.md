FormError
========

> Text wrapper for error messages

### Usage

#### HTML

```html
<span class="ssb-form-error">Insert error message</span>
<span class="ssb-form-error negative">Insert error message</span>
```

#### React

```jsx harmony
<FormError
  errorMessage="Insert error message"
  negative={false}
/>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| errorMessage | string | Renders text |
| negative | bool | Changes text color |
