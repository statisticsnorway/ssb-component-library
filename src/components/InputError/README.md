InputError
========

> Text wrapper for error messages

### Usage

#### HTML

```html
<span class="ssb-input-error">Insert error message</span>
<span class="ssb-input-error negative">Insert error message</span>
```

#### React

```jsx harmony
<InputError
  errorMessage="Insert error message"
  negative={false}
/>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| errorMessage | string | Renders text |
| negative | bool | Changes text color |
