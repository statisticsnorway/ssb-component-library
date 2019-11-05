NestedAccordion
========

> Nested accordion

### Usage

#### HTML

```html
<div class="ssb-nested-accordion mt-3">
  <div class="nested-accordion-header closed" onclick="{toggle classname to 'open'}">
    {plus icon}
    <span class="header-text">Title</span>
  </div>
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
| header | string | Header text |
| openByDefault | bool | Will set the open state on init |

