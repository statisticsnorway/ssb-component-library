StickyMenu
========

> A page layout component to wrap around content 

### Usage

#### HTML

We only provide the container making the header sticky.
The content is just a suggestion.
```html
<div class="ssb-sticky-menu">
    <div class="menu-content">
    <!-- Suggested content -->
        <div style="display: flex; justify-content: space-between; width: 100%;">
            <div>
                <span class="ssb-text-wrapper small-text">Kommunefakta</span>
                <div style="font-size: 24px; font-weight: bold;">Stordal (Møre og Romsdal)</div>
            </div>
            <div style="align-items: center; display: flex;">
                <div style="align-items: center; display: flex;">
                    <label for="kommune" class="input-header">Bytt kommune:</label>
                    <div class="ssb-input">
                        <div class="input-wrapper">
                            <input id="kommune" type="text" placeholder="Søk på kommune" aria-label="Søk på kommune" class=" with-icon" value="" />
                            <button class="icon-wrapper search-icon"><i>{feather.search 18px}</i></button>
                        </div>
                    </div>
                </div>
                <div class="choose-chart" style="margin-left: 30px;">Velg i kart</div>
                {feather.chevronDown 18px}
            </div>
        </div>
    </div>
</div>
```

#### React

```jsx harmony
<StickyMenu>
    Insert content here
</StickyMenu>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children   | Required node | Content within the wrapper |
