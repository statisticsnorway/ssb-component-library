Breadcrumb
========

> Breadcrumbs are a navigational aid used to provide the user with the information of their location on the website
### Usage


#### HTML

```html
<div class="ssb-breadcrumbs">
    <div>
        <a class="ssb-link" href=" ">
            <span class="link-text">breadcrumb 1</span>
        </a>
        &nbsp;/&nbsp;
    </div>
    <div>
        <a class="ssb-link" href=" ">
            <span class="link-text">breadcrumb 2</span>
        </a>&nbsp;/&nbsp;
    </div>
    <span>breadcrumb 3</span>
</div>

```

#### React

```jsx harmony
const items = [
	{
		link: ' ',
		text: 'breadcrumb 1',
	},
	{
		link: ' ',
		text: 'breadcrumb 2',
	},
	{
		text: 'breadcrumb 3',
	},
];

  <Breadcrumb items={items} />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| items   | Required array of objects | 	A list of objects. Object key text is required, link is optional|

__Dependencies__
 - [Link](../Link)
