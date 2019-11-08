StickyMenu
========

> A page layout component to wrap around content 

### Usage

#### HTML

```html
<div class="ssb-sticky-menu">
    <div class="content col-5">
        <div>
            <div class="subtitle">Kommunefakta</div>
            <div class="title">Stordal (Møre og Romsdal)</div>
        </div>
    </div>
    <div class="content col-5">
        <div class="input-header">Bytt kommune:</div>
        <div class="ssb-input">
            <div class="input-wrapper">
                <input id="d74facc4-c148-405e-b9de-d82a26d25be3" type="text" placeholder="Søk på kommune" aria-label="Søk på kommune" class="" value="">
                <div class="icon-wrapper">
                    <ChevronDownIcon/>
                </div>
            </div>
        </div>
    </div>
    <div class="content col-2">
        <div class="choose-chart">Velg i kart</div>
        <SearchIcon/>
    </div>
</div>
```

#### React

```jsx harmony
<StickyMenu ChooseChartLabel="Velg i kart" inputHeader="Bytt kommune:" subtitle="Kommunefakta" title="Stordal (Møre og Romsdal)" />
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| ChooseChartLabel  | string | Label for component choose in map |
| inputHeader  | string | Header before input |
| subtitle  | string | Subtitle for Stickymenu |
| title  | string | Name of municipality |
