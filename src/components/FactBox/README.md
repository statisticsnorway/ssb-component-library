FactBox
========

> Wrapper for accordion

### Usage

#### HTML

```html
<div class="ssb-fact-box">
	<div class="ssb-accordion">
	  <div class="accordion-header closed" onclick="{toggle classname to 'open'}">
		{plus icon}
		<div class="ssb-title header-text no-margin"><h5>Title</h5></div>
	  </div>
	  <div class="accordion-body closed">
		{insert content}
	  </div>
	</div>
</div>
```

#### React

```jsx harmony
<FactBox header="This is a header" text="This is paragraph text which explains the accordion" />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| header | string | Header text |
| text | string or element | Content in fact box |
| openByDefault | bool | Open when rendered. Defaults to false |
