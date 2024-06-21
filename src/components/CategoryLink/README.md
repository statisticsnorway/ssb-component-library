# Category link

### Usage

#### HTML

```html
<a class="ssb-category-link" href=" ">
  <div class="div-wrapper">
    <div class="text-divs title-wrapper">
      <span class="link-title-text">Category link with description</span>
    </div>
    <div class="text-divs sub-wrapper">
      <span class="link-sub-text">Description goes here</span>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="arrow-icon"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </div>
</a>
```

#### React

```jsx harmony
<CategoryLink href='' titleText='Category link with description' subText='Description goes here' />
```

Available props:

| Name      | Type            | Description                                                   |
| --------- | --------------- | ------------------------------------------------------------- |
| ariaLabel | string          | Defines a string value that describe the link                 |
| className | string          | Optional container class                                      |
| href      | Required string | Destination for navigation                                    |
| titleText | Required string | text string for the title of the link                         |
| subText   | string          | text string below the title to describe the link              |
| tabIndex  | number          | Tab index for focus                                           |
| title     | string          | The title attribute is used to provide additional information |
