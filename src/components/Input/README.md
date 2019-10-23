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
  <label for="input1">Insert label</label>
  <div class="input-wrapper">
    <input id="input1" value="option1" />
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
  handleChange={handleChange}
  value={someValue}
/>

<Input
  searchField
  submitCallback={handleSubmit}
  value={someValue}
/>

<Input
  error
  errorMessage="Dette er feil"
/>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| disabled | bool | Toggles disabled state |
| error | bool | Changes design and inserts error icon |
| errorMessage | string | Error message to be displayed |
| handleChange | func | Callback every time a letter is entered or removed |
| id | string | ID to connect label and input field |
| label | string | Label text |
| negative | bool | Changes design |
| searchField | bool | Inserts a search icon |
| submitCallback | func | Callback for when clicking search icon |
| type | string | Optional parameters like 'url', 'email' etc. |
| value | string | Current value |
