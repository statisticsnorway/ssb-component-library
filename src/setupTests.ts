import '@testing-library/jest-dom'
import failOnConsole from 'jest-fail-on-console'
import util from 'util'

Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
})

failOnConsole({
  shouldFailOnWarn: true,
})
