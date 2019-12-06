FormError
========

> Dialog box for form errors

### Usage

#### HTML

```html
<div class="ssb-form-error">
    <span class="error-icon"></span>
    <div>
        <span class="error-title">Some fields are not right!</span>
        <ul>
            <li>error 1</li>
            <li>error 2</li>
            <li>error 3</li>
        </ul>
    </div>
</div>

<div class="ssb-form-error negative">
    <span class="error-icon"></span>
    <div>
        <span class="error-title">Some fields are not right!</span>
        <ul>
            <li>error 1</li>
            <li>error 2</li>
            <li>error 3</li>
        </ul>
    </div>
</div>
```

#### React

```jsx harmony
const errors = ['error 1', 'error 2', 'error 3'];

<FormError errorMessages={errors} title="Some fields are not right:" />

<FormError negative errorMessages={errors} title="Some fields are not right!" />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| className | string | Optional container class |
| errorMessages | array | Renders list items |
| negative | Optional boolean | Will change component style. Defaults to false |
| title | string | Renders a title |
