FactBox
========

> Wrapper for accordion

### Usage

#### HTML

```html
<div class="ssb-fact-box ">
    <div class="ssb-accordion without-borders">
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
</div>
```

#### React

```jsx harmony
<FactBox header="This is a factbox header" text="This is paragraph text which explains the accordion" />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| className   | string | Optional container class|
| header | string | Header text |
| text | string or element | Content in fact box |
| openByDefault | bool | Open when rendered. Defaults to false |

__Dependencies__
 - [Accordion](../Accordion)
