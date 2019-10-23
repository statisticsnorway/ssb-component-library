Breadcrumb
========

> Breadcrumbs are a navigational aid used to provide the user with the information of their location on the website
### Usage


#### HTML

```html
<div class="ssb-breadcrumbs ">
    <div><a class="ssb-link" href=""><span class="link-text">breadcrumb 1</span></a>&nbsp;/&nbsp;</div>
    <div><a class="ssb-link" href=""><span class="link-text">breadcrumb 2</span></a>&nbsp;/&nbsp;</div>
    <div class="current-page">breadcrumb 3</div>
</div>
```

#### React

```jsx harmony
<div>
    <Breadcrumb items={items} />
</div>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| items   | Required array of objects | 	A list of objects. Object key text is required, link is optional|
