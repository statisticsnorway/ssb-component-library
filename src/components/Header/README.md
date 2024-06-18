# Header

> A wrapper for displaying a header

### Usage

The component needs to be filled with content.

#### HTML

```html
<div class="ssb-header-wrapper">
  <!-- Fill with content, as below -->
  <div class="global-links" style="float: right; margin-bottom: 12px; margin-top: 10px;">
    <a class="ssb-link" href=" " target="" rel=""><span class="link-text">top-item 3</span></a>
    <a class="ssb-link" href=" " target="" rel=""><span class="link-text">top-item 2</span></a>
    <a class="ssb-link" href=" " target="" rel=""><span class="link-text">top-item 1</span></a>
  </div>
  <div class="top-row flex-row justify-space-between flex-wrap" style="width: 100%;">
    {insert SSB logo with size h:44px w:248px}
    <div class="searchfield" style="width: 285px; align-self: flex-end;">
      <div class="ssb-input ">
        <div class="input-wrapper">
          <input
            id="search-input"
            type="text"
            placeholder="Search text"
            aria-label="Input field Search"
            class=" with-icon"
            value=""
          />
          <button class="icon-wrapper search-icon">
            <i>{feather.search 18px}</i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="header-content" style="margin-bottom: 20px; margin-top: 14px;">
    <div class="ssb-tabs">
      <button class="navigation-item "><span>Category 1</span></button>
      <button class="navigation-item "><span>Category 2</span></button>
      <button class="navigation-item "><span>Category 3</span></button>
      <button class="navigation-item "><span>Category 4</span></button>
    </div>
    <hr class="ssb-divider" />
  </div>
</div>
```

#### React

```jsx harmony
<Header>
  {/* Fill with content, as below */}
  <div className='global-links' style={{ float: 'right', marginBottom: '12px', marginTop: '10px' }}>
    <Link href=' '>top-item 3</Link>
    <Link href=' '>top-item 2</Link>
    <Link href=' '>top-item 1</Link>
  </div>
  <div className='top-row flex-row justify-space-between flex-wrap' style={{ width: '100%' }}>
    <SsbLogo alt='ssb-logo' />
    <div className='searchfield' style={{ width: '285px', alignSelf: 'flex-end' }}>
      <Input ariaLabel='Input field Search' searchField placeholder='Search text' />
    </div>
  </div>
  <div className='header-content' style={{ marginBottom: '20px', marginTop: '14px' }}>
    <Tabs items={items} />
    <Divider />
  </div>
</Header>
```

Available props:

| Name      | Type   | Description              |
| --------- | ------ | ------------------------ |
| children  | node   | All rendered content     |
| className | string | Optional container class |
