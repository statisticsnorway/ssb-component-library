Input
========

> Input field and search field

### Usage

#### HTML

```html
<div class="ssb-input">
  <label for="input1">Insert label</label>
  <div class="input-wrapper">
    <input id="input1" value="option1" />
  </div>
</div>

<div class="ssb-input negative">
  <label for="input1">Insert label</label>
  <div class="input-wrapper">
    <input id="input1" value="option1" />
  </div>
</div>

<div class="ssb-input ">
    <div class="input-wrapper">
        <input id="input1" type="text" placeholder="Search text" aria-label="Input field Search" class="with-icon" value="">
        <button class="icon-wrapper search-icon">
            <i>{feather.search 18px}</i>
        </button>
    </div>
</div>

<div class="ssb-input error ">
    <label for="input1">Input field</label>
    <div class="input-wrapper">
        <input id="input1" type="text" class=" with-icon" value="">
    </div>
    <div class="ssb-input-error ">
        <span>Insert error message</span>
    </div>
</div>
```

#### React

```jsx harmony
<Input
  label="Input field"
  handleChange={handleChange}
  value={someValue}
/>

<Input
  label="Input field"
  negative
  handleChange={handleChange}
  value={someValue}
/>

<Input
  ariaLabel="Input field Search"
  searchField
  submitCallback={handleSubmit}
  value={someValue}
/>

<Input
  error
  errorMessage="Dette er feil"
  label="Input field Search"
/>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| ariaLabel | string | Defines a string value that labels input element, use if label is not visible |
| className   | string | Optional container class|
| disabled | bool | Toggles disabled state |
| error | bool | Changes design |
| errorMessage | string | Renders an error message underneath input field |
| handleChange | func | Callback every time a letter is entered or removed |
| id | string | ID to connect label and input field |
| label | string | Label text |
| negative | bool | Changes design |
| placeholder | string | Placeholder text |
| searchField | bool | Ads search icon with click |
| submitCallback | func | Callback for onSubmit |
| type | string | Changes input type. Optional parameters like 'url', 'email' etc. |
| value | string | Input value. Can be initiated with a value |

__Dependencies__
 - [InputError](../InputError)
