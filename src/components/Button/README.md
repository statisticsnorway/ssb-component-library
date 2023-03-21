Button
========

> Action buttons

### Usage

#### HTML

```html
<button class="ssb-button">Secondary button</button>

<button class="ssb-btn primary-btn">Primary button</button>

<button class="ssb-btn primary-btn">
    <div class="sb-icon">
        <i>{feather.chevronDown 18px}</i>
    </div>Primary icon
</button>

<button class="ssb-btn negative">Secondary negative button</button>

<button disabled="true">Disabled button</button>
```

#### React

```jsx harmony
<Button>Secondary button</Button>

<Button icon={<ChevronDown />} primary>Primary icon</Button>

<Button primary>Primary button</Button>

<Button primary ariaLabel={'Button with primariy role'}>Button with aria label</Button>

<Button negative primary>Primary negative button</Button>

<Button disabled>Disabled button</Button>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | Required node | Button text or/and icon |
| className | String | Optional container class |
| ariaLabel | String | Optional aria-label text for screen readers |
| disabled | bool | Decides if the button is disabled |
| icon | node | Renders an icon |
| negative | bool | Changes design |
| onClick | function | Callback for button click |
| primary | bool | Changes style to represent a primary button |
| type | string | Button type. Can be 'submit', 'reset', or 'button'. Defaults to 'button' |
| onKeyDown | function | Callback for keyboard button click |