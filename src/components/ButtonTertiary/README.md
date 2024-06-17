# Button Tertiary

> Action button

    - with Accordion functionality
    - with normal onClick functionality

### Usage

#### HTML

```html
<div class="ssb-btn-tertiary">
  <button class="button-header closed icon">
    <span class="button-grid">
      <span class="header-text"> Tertiary button with Icon & Accordion </span>
      <i>{feather.chevronDown 18px}</i>
    </span>
  </button>
  <div class="accordion-body closed"></div>
</div>

<button class="ssb-btn-tertiary">
  <button class="button-header closed no-icon">
    <span class="button-grid">
      <span class="header-text"> Tertiary button with onClick </span>
    </span>
  </button>
</button>

<button class="ssb-btn-tertiary negative">
  <button class="button-header closed no-icon" disabled>
    <span class="button-grid">
      <span class="header-text"> Tertiary button with onClick </span>
    </span>
  </button>
</button>
```

#### React

```jsx harmony

<ButtonTertiary header="Tertiary button with Icon & Accordion">
    <p>Explain something about something with something clever.</p>
</ButtonTertiary>

<ButtonTertiary header="Tertiary button with onClick" accordion={false} onClick={() => testOnClick()} />

<ButtonTertiary header="Knapp negative med Icon & Accordion" negative disabled>
	<p>Explain something about something with something clever.</p>
</ButtonTertiary>

```

Available props:

| Name          | Type     | Description                                                            |
| ------------- | -------- | ---------------------------------------------------------------------- |
| id            | string   | Button text or/and icon                                                |
| children      | node     | Button text or/and icon                                                |
| className     | string   | Optional container class                                               |
| header        | string   | Header text                                                            |
| openByDefault | bool     | Will set the open state on init                                        |
| tabIndex      | number   | Tab index for focus                                                    |
| accordion     | bool     | Will signify button & icon, with an accordion feature on initial state |
| disabled      | bool     | Decides if the button is disabled                                      |
| negative      | bool     | Changes design                                                         |
| onClick       | function | Callback for button click                                              |
