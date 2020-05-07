TableLink
========

> TableLink used when linkin to table
### Usage


#### HTML

```html
<div className="ssb-table-link">
    <a href="">
        <div className="tl-icon">
            <i>{feather.arrowRight 22px}</i>
        </div>
        <div className="tl-title">
            Tabell 1
            <span className="tl-text">
                Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108.
            </span>
        </div>
    </a>
</div>
```

#### React

```jsx harmony
<TableLink title="Tabell 1" href="" hrefText="Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108." />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| className   | string | Optional container class|
| href | Required string| Destination for navigation |
| hrefText | Required string | Link text |
| hrefTitle | string | The hrefTitle attribute is used to provide additional information |
| isExternal | Optional boolean | Will make the link open in new tab. Defaults to false |
| tabIndex | number | Tab index for focus |
| title | Required string | Title for tablelink |
