# ExpansionBox

> Wrapper for expansionBox

### Usage

#### HTML

```html Default
<div class='ssb-expansion-box'>
  <button aria-expanded='false' class='header'>
    <span class='header-text'>This is a ExpansionBox title</span>
    <div class='icon-wrapper'>
      <i class="expand-icon">{feather.chevronDown 20px}</i>
    </div>
  </button>
  <div class='content closed'>This is paragraph text</div>
</div>
```

```html SneakPeek and icon
<div class="ssb-expansion-box sneak-peek">
   <button class="header" aria-expanded="false">
      <div class="icon">
        <i>{feather.sun 32px}</i>
      </div>
      <span class="header-text">ExpansionBox with icon and sneakpeek content</span>
      <div class="icon-wrapper">
         <i class="expand-icon">{feather.chevronDown 20px}</i>
      </div>
   </button>
   <div class="content closed">
      {content}
   </div>
</div>
```

#### React

```jsx harmony
<ExpansionBox header='Default expansionBox' text='This is paragraph text which explains the expansionBox' />

<ExpansionBox header='ExpansionBox open by default' text='This is paragraph text which explains the expansionBox' openByDefault />

<ExpansionBox header='ExpansionBox with icon and sneakpeek text' text='This is paragraph text which explains the expansionBox' icon={<Sun size={32} />} sneakPeek />
```

Available props:

| Name          | Type              | Description                           |
| ------------- | ----------------- | ------------------------------------- |
| className     | string            | Optional container class              |
| header        | string            | Header text                           |
| icon          | node              | Renders an icon to the left of header |
| sneakPeek     | bool              | Show a sneakpeek of the text          |
| openByDefault | bool              | Open when rendered. Defaults to false |
| text          | string or element | Content in expansionBox                   |


