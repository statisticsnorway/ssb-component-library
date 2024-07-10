import React from 'react'
import ExpansionBox from './ExpansionBox'

const mockedHeader = 'This is a expansion box header'
const mockedText =
  'This is a normal paragraph text where the explanation of the fact is written in. ' +
  'Here you can write a concise and descriptive text that helps the user understand the fact. '

const mockedContent = <div>
  <span>This is a normal paragraph text where the explanation of the fact is written. Here you can write a concise and descriptive text that helps the user understand the content. This is a normal paragraph text where the explanation of the fact is written. Here you can write a concise and descriptive text that helps the user understand the content.</span>
<ul>
   <li>I 2023 var Olivia og Lucas de mest populære navnene i Norge.&nbsp;</li>
   <li>Nykommere på listen over de mest populære jentenavnene var Maja, Alma, og Ada. Kasper og Elias var nykommere på guttenes topp 10-liste.&nbsp;</li>
   <li>Mia og Iver var blant navnene som klatret mest på listen fra 2022 til 2023.&nbsp;</li>
   <li>Olivia var det mest populære jentenavnet bare i Viken fylke, mens Lucas toppet listen i 6 av 11 fylker. Hennie var spesielt populært i Oslo.&nbsp;</li>
   <li>Andelen barn som får de mest populære navnene er lav. Dette tyder på at foreldre i dag søker mer unike navn enn før.&nbsp;</li>
</ul>
<p>Oppsummeringen er laget ved hjelp av en KI-tjeneste fra OpenAi. Innholdet er kvalitetssikret av SSB før publisering.</p>
</div>

export default {
  title: 'ExpansionBox',
}

export const Default = () => (
  <div style={{ height: '950px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} />
  </div>
)

export const DefaultOpen = () => (
  <div style={{ width: '450px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} openByDefault />
  </div>
)

export const SneakPeek = () => (
  <div style={{ width: '450px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} openByDefault />
  </div>
)

export const Icon = () => (
  <div style={{ width: '450px' }}>
    <ExpansionBox header={mockedHeader} text={mockedText} />
    <ExpansionBox header={mockedHeader} text={mockedContent} openByDefault />
  </div>
)
