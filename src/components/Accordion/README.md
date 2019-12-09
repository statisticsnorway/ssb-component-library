Accordion
========

> Expandable accordion

### Usage

#### HTML

```html
<div class="ssb-accordion">
    <button class="accordion-header closed" onclick="{toggle classname to 'open'}" tabindex="0">
        <span class="button-grid">
          <h5 class="ssb-title header-text no-margin">This is a standard accordion</h5>
          <i class="expand-icon">{feather.chevronDown 20px}</i>
        </span>
    </button>
    <div class="accordion-body closed">
        {insert content}
    </div>
</div>

<div class="ssb-accordion with-sub-header">
    <button class="accordion-header closed" onclick="{toggle classname to 'open'}" tabindex="0">
        <span class="button-grid">
			<h5 class="ssb-title sub-header no-margin">Tabell 1</h5>
			<h5 class="ssb-title header-text no-margin">This is a accordion with a sub-header</h5>
			<i class="expand-icon">{feather.chevronDown 20px}</i>
		</span>
    </button>
    <div class="accordion-body closed">
        {insert content}
    </div>
</div>

<div class="ssb-accordion without-borders">
    <button class="accordion-header closed" onclick="{toggle classname to 'open'}" tabindex="0">
        <span class="button-grid">
          <h5 class="ssb-title header-text no-margin">This is a accordion without border</h5>
          <i class="expand-icon">{feather.chevronDown 20px}</i>
        </span>
    </button>
    <div class="accordion-body closed">
        {insert content}
    </div>
</div>


<div class="ssb-accordion mt-3">
    <button class="accordion-header closed" onclick="{toggle classname to 'open'}" tabindex="0">
        <span class=" button-grid ">
        	<h5 class="ssb-title header-text no-margin ">This is a nested accordion</h5>
            <!-- If open -->
            <i class="expand-icon">{feather.chevronDown 20px}</i>
            <!-- If closed -->
            <i class="expand-icon">{feather.chevronDown 20px}</i>
      	</span>
    </button>
    <div class="accordion-body open ">This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
        <div class="ssb-nested-accordion mt-3 ">
            <button class="nested-accordion-header closed " onclick="{toggle classname to 'open'}">
                <span class=" button-grid ">
                    <!-- If open -->
                    <i class="expand-icon">{feather.chevronDown 16px}</i>
                    <!-- If closed -->
                    <i class="expand-icon">{feather.chevronDown 16px}</i>
                    <span class="header-text ">This is a nested accordion</span>
                </span>
            </button>
            <div class="nested-accordion-body closed">
               {insert content}
            </div>
        </div>
    </div>
</div>
```
Toggle the all instances of the `closed` className to `open` when clicked.

#### React

```jsx harmony
<Accordion header="Standard accordion">
    This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
</Accordion>

<Accordion header="Standard accordion without border" withoutBorders>
    This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
</Accordion>

<Accordion subHeader="Tabell 1" header="This is a accordion with a sub-header">
    This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
</Accordion>

<Accordion header="Nested accordions">
    This is paragraph text which explains the accordion
    <NestedAccordion header="Nested accordions">
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
| subHeader | string | Renders the header with the sub header design |
| withoutBorders | bool | Default false, Accordion without border on top and bottom if value is true |

__Dependencies__
 - [Title](../Title)

