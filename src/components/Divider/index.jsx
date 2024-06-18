import React from 'react'
import PropTypes from 'prop-types'

const Divider = ({ className, dark, light }) => (
  <hr
    className={`ssb-divider${className ? ` ${className}` : ''}${dark ? ' type-dark' : ''}${light ? ' type-light' : ''}`}
    aria-hidden='true'
  />
)

Divider.defaultProps = {
  className: '',
  dark: false,
  light: false,
}

Divider.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
  light: PropTypes.bool,
}

export default Divider
