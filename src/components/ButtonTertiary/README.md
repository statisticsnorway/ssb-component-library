Button
========

> Action button
    - with Accordion functionality
    - with normal onClick functionality

### Usage

#### HTML

```html
<div class="ssb-btn-tertiary">
    <button class="button-header closed icon">
        <span class="button-grid">
            <span class="header-text">
                Tertiary button with Icon & Accordion
            </span>
            <svg>Icon</svg>
        </span>
    </button>
    <div class="accordion-body closed"></div>
</div>

<button class="ssb-btn-tertiary">
    <button class="button-header closed no-icon">
        <span class="button-grid">
            <span class="header-text">
                Tertiary button with onClick
            </span>
        </span>
    </button>
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
