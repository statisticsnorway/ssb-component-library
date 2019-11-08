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
                <input id="input1" type="text" placeholder="Søk på kommune" aria-label="Søk på kommune" class="" value="">
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
<StickyMenu >
	<div className="container">
		<div className="row">
			<div className="content col-5">
			<div>
				<div className="subtitle">Kommunefakta</div>
				<div className="title">Stordal (Møre og Romsdal)</div>
			</div>
			</div>
			<div className="content col-5">
				<div className="input-header">Bytt kommune</div>
				<Input ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
			</div>
			<div className="content col-2">
				<div className="choose-chart">Velg i kart</div><ChevronDown className="chevron-down-icon" size={18} />
			</div>
		</div>
	</div>
</StickyMenu>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children   | Required node | Content within the wrapper |
