TableLink
========

> TableLink used when linkin to table
### Usage


#### HTML

```html
<a className="ssb-table-link" href="" target="_blank">
    <div className="tl-icon">
        <i>{feather.arrowRight 22px}</i>
    </div>
    <div className="tl-info">
        <span className="tl-text">
            Tabell 1
        </span>
        <span className="tl-description">
            Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108.
        </span>
    </div>
</a>
```

#### React

```jsx harmony
<TableLink text="Tabell 1" href="" description="Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108." />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| className   | string | Optional container class|
| description | Required string | Description for tablelink |
| href | Required string| Destination for navigation |
| isExternal | Optional boolean | Will make the link open in new tab. Defaults to true |
| tabIndex | number | Tab index for focus |
| text | Required string | Text for tablelink, above description |
| title | Required string | The title attribute is used to provide additional information |
