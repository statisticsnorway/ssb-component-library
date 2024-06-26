# InputError

> Text wrapper for error messages

### Usage

#### HTML

```html
<div class="ssb-input-error"><span>Insert error message</span></div>
<div class="ssb-input-error negative"><span>Insert error message</span></div>
```

#### React

```jsx harmony
<InputError errorMessage='Insert error message' negative={false} />
```

Available props:

| Name         | Type   | Description                               |
| ------------ | ------ | ----------------------------------------- |
| className    | string | Optional container class                  |
| errorMessage | string | Renders text                              |
| negative     | bool   | Changes text color                        |
| id           | string | ID to connect input field and input error |
