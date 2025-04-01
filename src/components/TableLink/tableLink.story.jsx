import React from 'react'
import TableLink from './index'

export default {
  title: 'TableLink',
}

export const Default = () => (
  <div>
    <TableLink
      text='Tabell 1'
      href=''
      description='Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108.'
      title='Ekstra tekst'
    />
    <br />
    <TableLink
      text='Tabell 2'
      href=''
      description='Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108.'
    />
  </div>
)

Default.storyName = 'default';
