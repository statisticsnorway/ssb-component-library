Button
========

> Action buttons

### Usage

#### HTML

```html
<button class="ssb-button">Secondary button</button>

<button class="ssb-btn primary-btn">
    <div class="sb-icon">
        <SomeIcon />
    </div>Primary icon
</button>

<button class="ssb-btn negative secondary-btn">Secondary negative button</button>

<button disabled="true">Disabled button</button>
```

#### React

```jsx harmony
<Button>Secondary button</Button>

<Button icon={<ChevronDown size="18" />} primary>Primary icon</Button>

<Button primary>Primary button</Button>

<Button negative primary>Primary negative button</Button>


<Button disabled>Disabled button</Button>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | Required node | Button text or/and icon |
| disabled | bool | Decides if the button is disabled |
| icon | node | Renders an icon |
| negative | bool | Changes design |
| onClick | function | Callback for button click |
| primary | bool | Changes style to represent a primary button |
| type | string | Button type. Can be 'submit', 'reset', or 'button'. Defaults to 'button' |
