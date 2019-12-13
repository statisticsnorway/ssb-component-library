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
        <div style="display: flex; justify-content: space-between; width: 100%;">
            <div><span class="ssb-text-wrapper small-text">Kommunefakta</span>
                <div style="font-size: 24px; font-weight: bold;">Stordal (Møre og Romsdal)</div>
            </div>
            <div style="align-items: center; display: flex;">
                <div style="align-items: center; display: flex;">
                    <label for="kommune" class="input-header">Bytt kommune:</label>
                    <div class="ssb-input ">
                        <div class="input-wrapper">
                            <input id="kommune" type="text" placeholder="Søk på kommune" aria-label="Søk på kommune" class=" with-icon" value="">
                            <button class="icon-wrapper search-icon">
                                <i>{feather.search 18px}</i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="choose-chart" style="margin-left: 30px;">Velg i kart</div>
                <i>{feather.chevronDown 18px}</i>
            </div>
        </div>
    </div>
</div>
```

#### React

```jsx harmony
<StickyMenu>
    {/* Insert content here, example below */}
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    <div>
      <Text small>Kommunefakta</Text>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Stordal (Møre og Romsdal)</div>
    </div>
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <label htmlFor="kommune" className="input-header">Bytt kommune:</label>{/* eslint-disable-line */}
        <Input id="kommune" ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
      </div>
      <div style={{ marginLeft: '30px' }} className="choose-chart">Velg i kart</div>
      <ChevronDown size={18} className="chevron-down-icon" />
    </div>
  </div>
</StickyMenu>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children   | Required node | Content within the wrapper |
