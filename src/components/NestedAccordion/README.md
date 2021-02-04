NestedAccordion
========

> Nested accordion

### Usage

#### HTML

```html
<div class="ssb-nested-accordion">
    <button class="nested-accordion-header closed" onclick="{toggle classname to 'open'}">
        <span class="button-grid">
			<!-- If open -->
			<i class="expand-icon">{feather.chevronUp 16px}</i>
			<!-- If closed -->
			<i class="expand-icon">{feather.chevronDown 16px}</i>
			<span class="header-text">A nested accordion header</span>
        </span>
    </button>
    <div class="accordion-body closed">
		{insert content}
	</div>
</div>
```
Toggle the all instances of the `closed` className to `open` when clicked.

#### React

```jsx harmony
<Accordion primary header="This is a primary header">
  This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
  <NestedAccordion header="A nested accordion header">
    This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
  </NestedAccordion>
</Accordion>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | node | Accordion content |
| className   | string | Optional container class|
| header | string | Header text |
| openByDefault | bool | Will set the open state on init |
| onToggle | func | Callback with isOpen boolean that is triggered on open/close |

