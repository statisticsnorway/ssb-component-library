import React from 'react'
import { ArrowRight } from 'react-feather'
import Link from './index'

const negativeStyle = {
  backgroundColor: '#274247',
  padding: '100px',
}

export default {
  title: 'Link',
}

export const Default = () => (
  <div>
    <p>
      Check it out a <Link href=' '> regular link</Link> within a sentence!
    </p>
    <Link href=' ' icon={<ArrowRight size={16} />}>
      A regular link with icon
    </Link>
  </div>
)

export const Profiled = () => (
  <div>
    <p>
      <Link href=' ' linkType='profiled'>
        A profiled link
      </Link>
    </p>
    <Link href=' ' linkType='profiled' icon={<ArrowRight size={20} />}>
      A profiled link with icon
    </Link>
  </div>
)

export const Header = () => (
  <div>
    <p>
      <Link href=' ' linkType='header'>
        A header link with default span
      </Link>
    </p>
    <p>
      <Link href=' ' linkType='header' headingSize={2}>
        A header link with heading 2
      </Link>
    </p>
  </div>
)

export const Negative = () => (
  <div style={negativeStyle}>
    <p>
      <Link href=' ' negative>
        A regular link - Negative
      </Link>
    </p>
    <Link href=' ' icon={<ArrowRight size={16} />} negative>
      A regular link with icon - Negative
    </Link>
    <p>
      <Link href=' ' linkType='profiled' negative>
        A profiled link - Negative
      </Link>
    </p>
    <Link href=' ' linkType='profiled' icon={<ArrowRight size={20} />} negative>
      A profiled link with icon - Negative
    </Link>
    <p>
      <Link href=' ' linkType='header' negative>
        A header link - Negative
      </Link>
    </p>
  </div>
)

export const LongLinks = () => (
  <div style={{ width: '300px' }}>
    <p>
      <Link href=' '>A regular link - A very long link that will cross several lines</Link>
    </p>
    <Link href=' ' icon={<ArrowRight size={16} />}>
      A regular link with icon - A very long link that will cross several lines
    </Link>
    <p>
      <Link href=' ' linkType='profiled'>
        A profiled link - A very long link that will cross several lines
      </Link>
    </p>
    <Link href=' ' linkType='profiled' icon={<ArrowRight size={20} />}>
      A profiled link with icon - A very long link that will cross several lines
    </Link>
    <p>
      <Link href=' ' linkType='header'>
        A header link - A very long link that will cross several lines
      </Link>
    </p>
  </div>
)

LongLinks.story = {
  name: 'Long links',
}

export const AllLinkWithAccessibiltyAdded = () => linksWithUU()

AllLinkWithAccessibiltyAdded.story = {
  name: 'All link with Accessibilty added',
}

function linksWithUU() {
  return (
    <div>
      <p>
        Check it out all <Link href=' '> UU links </Link> within a sentence!
      </p>

      <p>*standalone link </p>
      <Link href=' ' standAlone>
        A regular link
      </Link>

      <p>*standalone link w/ icon </p>
      <Link href=' ' standAlone icon={<ArrowRight size={16} />}>
        A regular link with icon
      </Link>

      <p>*profiled link </p>
      <Link href=' ' standAlone linkType='profiled'>
        A profiled link
      </Link>

      <p>*profiled link w/ icon </p>
      <Link href=' ' standAlone icon={<ArrowRight size={16} />} linkType='profiled'>
        A profiled link with icon
      </Link>

      <p>*header link </p>
      <Link href=' ' standAlone linkType='header'>
        A header link with icon
      </Link>

      <p>*negative Links</p>
      <div style={negativeStyle}>
        <p>
          <Link href=' ' negative standAlone>
            A regular link - Negative
          </Link>
        </p>
        <Link href=' ' icon={<ArrowRight size={16} />} negative standAlone>
          A regular link with icon - Negative
        </Link>
        <p>
          <Link href=' ' linkType='profiled' negative standAlone>
            A profiled link - Negative
          </Link>
        </p>
        <Link href=' ' linkType='profiled' icon={<ArrowRight size={20} />} negative standAlone>
          A profiled link with icon - Negative
        </Link>
        <p>
          <Link href=' ' linkType='header' negative standAlone>
            A header link - Negative
          </Link>
        </p>
      </div>
    </div>
  )
}
