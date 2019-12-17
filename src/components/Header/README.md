Footer
========

> A wrapper for displaying a header

### Usage
The component needs to be filled with content.

#### HTML

```html
<div class="ssb-header-wrapper">
    <!-- Fill with content, as below -->
    <div class="global-links">
        <ul class="link-list">
            <li><a class="ssb-link" href=" " target="" rel=""><span class="link-text">top-item 3</span></a></li>
            <li><a class="ssb-link" href=" " target="" rel=""><span class="link-text">top-item 2</span></a></li>
            <li><a class="ssb-link" href=" " target="" rel=""><span class="link-text">top-item 1</span></a></li>
        </ul>
    </div>
    <div class="top-row flex-row justify-space-between flex-wrap">
        {insert SSB logo with size h:44px w:248px}
        <div class="searchfield">
            <div class="ssb-input ">
                <div class="input-wrapper">
                    <input id="525188ee-38e7-4fe4-abf0-d776ea685b50" type="text" placeholder="Search text" aria-label="Input field Search" class=" with-icon" value="">
                    <button class="icon-wrapper search-icon">
                        <i>{feather.search 18px}</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="header-content">
        <div class="ssb-tabs">
            <button class="navigation-item "><span>Category 1</span></button>
            <button class="navigation-item "><span>Category 2</span></button>
            <button class="navigation-item "><span>Category 3</span></button>
            <button class="navigation-item active"><span>Category 4</span></button>
        </div>
        <hr class="ssb-divider">
    </div>
</div>
```

#### React

```jsx harmony
<Header>
  {/* Fill with content, as below */}
	<div className="global-links">
		<ul className="link-list">
			<li><Link href=" ">top-item 3</Link></li>
			<li><Link href=" ">top-item 2</Link></li>
			<li><Link href=" ">top-item 1</Link></li>
		</ul>
	</div>
	<div className="top-row flex-row justify-space-between flex-wrap">
		<SsbLogo alt="ssb-logo" />
		<div className="searchfield">
			<Input ariaLabel="Input field Search" searchField placeholder="Search text" />
		</div>
	</div>
	<div className="header-content">
		<Tabs items={items} />
		<Divider />
	</div>
</Header>

```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | node | All rendered content |
