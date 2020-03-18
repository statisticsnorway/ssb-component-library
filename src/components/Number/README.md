Number
========

> A component for showing number in different size
> The number should be properly formatted

### Usage

#### HTML

```html
<div class="ssb-number small">123</div>

<div class="ssb-number medium">123 456</div>

<div class="ssb-number large">123 456 789</div>
```

#### React

```jsx harmony
<Number size="small">123</Number>

<Number size="medium">123 456</Number>

<Number size="large">123 456 789</Number>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | node | Renders a node |
| className   | string | Optional container class|
| size | 'small', 'medium' or 'large' | Change size on number |
