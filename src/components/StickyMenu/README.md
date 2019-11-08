StickyMenu
========

> A page layout component to wrap around content 

### Usage

#### HTML

```html
<div class="ssb-sticky-menu">
    <div class="container">
        <div class="row align-items-center">
            <div class="column col-md-12 col-lg-5">
                <div className="col-12">
                    <div class="subtitle">Kommunefakta</div>
                    <div class="title">Stordal (Møre og Romsdal)</div>
                </div>
            </div>
            <div class="column col-md-6  col-lg-5">
                <div class="col-flex flex-row align-items-center">
                    <div class="input-header">Bytt kommune:</div>
                    <div class="w-100">
                        <div class="ssb-input">
                            <div class="input-wrapper">
                                <input id="input1" type="text" placeholder="Søk på kommune" aria-label="Søk på kommune" >
                                <div class="icon-wrapper">
                                    <SearchIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column col-md-6 col-lg-2">
                <div class="choose-chart">Velg i kart</div>
                <ChevronDownIcon/>
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
