TextArea
========

> A component for showing TextArea
### Usage


#### HTML

```html
<div class="ssb-text-area ">
    <label for="textarea-input">Label</label>
    <div class="text-area-wrapper">
        <textarea id="textarea-input" placeholder="I can be resized..."></textarea>
    </div>
</div>

<div class="ssb-text-area">
   <label for="textarea-input">Label</label>
   <div class="text-area-wrapper">
        <textarea id="textarea-input" placeholder="With cols and rows" rows="20" cols="20"></textarea>
    </div>
</div>
```

#### React

```jsx harmony
<TextArea label="Label" placeholder="I can be resized..." handleChange={handleChange} value={someValue} />

<TextArea label="Label" rows={20} cols={20} placeholder="With cols and rows" handleChange={handleChange} value={someValue} />


```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| className   | string | Optional container class|
| disabled | bool | Decides if the textarea is disabled |
| error | bool | Changes design |
| errorMessage | string | Renders an error message underneath input field |
| handleChange | func | Callback function when a value is changed |
| id | String | TextArea Id |
| label | string | Label text |
| negative | bool | Changes design |
| placeholder | string | Placeholder text |
| value | string | TextArea field value |
| rows | number | Specifies the visible height of a text area |
| cols | number | Specifies the visible width of a text area |

_Dependencies__
 - [InputError](../InputError)
