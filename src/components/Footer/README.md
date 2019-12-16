Footer
========

> A wrapper for displaying a footer

### Usage
The component needs to be filled with content.

#### HTML

```html
<div class="ssb-footer-wrapper">
    <div class="top-row flex-row justify-space-between flex-wrap">
        {insert SSB logo with size h:44px w:248px}
        <button class="ssb-btn negative" onclick="window.scroll({ top: 0, behavior: 'smooth' })">
            <i>{feather.arrowUp}</i>
            Til toppen
        </button>
    </div>
    <div class="footer-content">
        <!-- Fill with content -->
    </div>
    <div class="bottom-row flex-row justify-space-between flex-wrap">
        <div class="global-links">
            <a class="ssb-link" href=" " target="" rel="">
                <span class="link-text">Statistisk sentralbyrå © 2019</span>
            </a>
            <a class="ssb-link" href=" " target="" rel="">
                <span class="link-text">A-Å</span>
            </a>
            <a class="ssb-link" href=" " target="" rel="">
                <span class="link-text">Nettstedskart</span>
            </a>
        </div>
        <div class="social-links">
            <a class="ssb-link with-icon" href=" " target="" rel="">
                <div class="icon-wrapper">
                    <i>{feather.facebook 24px}</i>
                </div>
            </a>
            <a class="ssb-link with-icon" href=" " target="" rel="">
                <div class="icon-wrapper">
                    <i>{feather.twitter 24px}</i>
                </div>
            </a>
            <a class="ssb-link with-icon" href=" " target="" rel="">
                <div class="icon-wrapper">
                    <i>{feather.linkedin 24px}</i>
                </div>
            </a>
            <a class="ssb-link with-icon" href=" " target="" rel="">
                <div class="icon-wrapper">
                    <i>{feather.rss 24px}</i>
                </div>
            </a>
        </div>
    </div>
</div>
```

#### React

```jsx harmony
<Footer>
  {/* Fill with content */}
</Footer>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | node | All rendered content |
