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

```html SneakPeek and aiIcon
<div class="ssb-expansion-box sneak-peek">
   <button class="header" aria-expanded="false">
      <div class="icon">
        <i>{SparklesIcon 32px}</i>
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

<ExpansionBox header='ExpansionBox with AI icon and sneakpeek text' text='This is paragraph text which explains the expansionBox' aiIcon sneakPeek />
```

Available props:

| Name          | Type              | Description                                                    |
| ------------- | ----------------- | -------------------------------------------------------------  |
| aiIcon        | bool              | Show a AI icon to the left of header                           |
| className     | string            | Optional container class                                       |
| header        | string            | Header text                                                    |
| sneakPeek     | bool              | Show a sneakpeek of the text                                   |
| openByDefault | bool              | Open when rendered. Defaults to false                          |
| text          | string or element | Content in expansionBox                                        |


