Card
========

> Wrapper for a Profile Box

### Usage

#### HTML

```html

<!-- Default card -->
<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-content">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Explain something about something with something clever.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
        </div>
    </a>
</div>

<!-- Default card with text after arrow -->
<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-content">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Explain something about something with something clever.</span>
            <div class="card-action">
                <i class="arrow-icon">{feather.arrowRight 22px}</i>
                <div class="href-text">Handling</div>
            </div>
        </div>
    </a>
</div>

<!-- Default card with icon and download url -->
<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-content">
            <div class="card-icon">
                <!-- Insert icon -->
            </div>
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Explain something about something with something clever.</span>
            <div class="card-action">
                <i class="arrow-icon">{feather.arrowRight 22px}</i>
                <div class="href-text">Handling</div>
            </div>
        </div>
    </a>
    <a download="" href=" " class="download-section">
        <i class="download-icon">{feather.downLoad 22px}</i>
        <span>Download</span>
    </a>
</div>

<!-- Profiled card with icon -->
<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-content profiled">
            <div class="card-icon">
                <!-- Insert icon -->
            </div>
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Explain something about something with something clever.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
        </div>
    </a>
</div>

<!-- With image on left side -->
<div class="ssb-card">
    <a href=" " class="clickable left-orientation">
        <div class="card-image">
            <img src="" alt="" />
        </div>
        <div class="card-content with-image">
            <div class="card-subtitle">Artikkel / 11. mai 2019</div>
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Explain something about something with something clever.</span>
        </div>
    </a>
</div>

<!-- With image on top side -->
<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-image">
            <img src="" alt="" />
        </div>
        <div class="card-content with-image">
            <div class="card-subtitle">Artikkel / 11. mai 2019</div>
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Explain something about something with something clever.</span>
        </div>
    </a>
</div>
```

#### React

```jsx harmony
// Default card 
<Card title="Tittel" href=" ">
    <Text>Explain something about something with something clever.</Text>
</Card>

// Default card with text after arrow
<Card title="Tittel" href=" " hrefText="Handling">
    <Text>Explain something about something with something clever.</Text>
</Card>

// Default card with icon and download url
<Card title="Tittel" href=" " hrefText="Handling" icon={<Globe size={32} />} fileLocation="./not_a_file.md" downloadText="Download">
    <Text>Explain something about something with something clever.</Text>
</Card>

// Profiled card with icon
<Card title="Tittel" href=" " hrefText="Handling" icon={<Globe size={120} />} profiled>
    <Text>Explain something about something with something clever.</Text>
</Card>

// With image on left side
<Card
    imagePlacement="left"
    image={<img src={testImage} alt="testImage" />}
    href=" "
    subTitle="Artikkel / 11. mai 2019"
    title="Tittel"
>
    <Text>Explain something about something with something clever.</Text>
</Card>
```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| children | node | Required. Fills box with content |
| downloadText | string | Text download link, default "Last ned" |
| fileLocation | string | Path to downloadable file. Ads the download field |
| href | string | Destination for navigation |
| hrefText | string | Text after arrow |
| icon | element | Icon element |
| image | element | Image element |
| imagePlacement | oneOf(['left', 'top']) | Position of the image, default "top"  |
| profiled | bool | Profiled layout |
| subTitle | string | Smaller text over title |
| title | string | Card title |
