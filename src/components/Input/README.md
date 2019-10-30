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

<div class="ssb-input">
  <label class="screen-reader-only" for="input1">Insert label</label>
  <div class="input-wrapper">
    <input id="input1" placeholder="Search text"/>
    <div class="icon-wrapper">
      <icon>search</icon>
    </div>
  </div>
</div>

<div class="ssb-input error">
  <label for="input1">Insert label</label>
  <div class="input-wrapper">
    <input id="input1" value="option1" />
    <div class="icon-wrapper">
      <icon>alert</icon>
    </div>
  </div>
  <span class="ssb-form-error">Insert error message</span>
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
| disabled | bool | Toggles disabled state |
| error | bool | Changes design and inserts error icon |
| errorMessage | string | Error message to be displayed |
| handleChange | func | Callback every time a letter is entered or removed |
| id | string | ID to connect label and input field |
| label | string | Label text |
| negative | bool | Changes design |
| placeholder | string | Placeholder text |
| searchField | bool | Inserts a search icon |
| submitCallback | func | Callback for when clicking search icon |
| type | string | Optional parameters like 'url', 'email' etc. |
| value | string | Current value |
