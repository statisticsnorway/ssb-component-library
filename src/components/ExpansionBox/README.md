# ExpansionBox

> Wrapper for expansionBox

### Usage

#### HTML

```html
<div className='ssb-expansion-box'>
    <button aria-expanded='false' className='header'>
        <span className='button-grid'>
        <span className='header-text'>{header}</span>
        <div className='icon-wrapper'>
            <i class="expand-icon">{feather.chevronDown 20px}</i>
        </div>
        </span>
    </button>
    <div className='content closed'>{content}</div>
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


