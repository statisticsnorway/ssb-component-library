Number
========

> A component for showing number in different size

### Usage

#### HTML

```html
<div class="ssb-number small">123</div>

<div class="ssb-number medium">123 456</div>

<div class="ssb-number large">123 456 789</div>
```

#### React

```jsx harmony
<Number number="123" size="small" />

<Number number="123456" size="medium" />

<Number number="123456789" size="large" />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| size | 'small', 'medium' or 'large' | Change size on number|
| number | Required 'string' or 'number' | Number content |
