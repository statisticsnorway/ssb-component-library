import '@testing-library/jest-dom'
import failOnConsole from 'jest-fail-on-console'
import { TextEncoder as NodeTextEncoder } from 'util'

if (!globalThis.TextEncoder) {
  Object.defineProperty(globalThis, 'TextEncoder', {
    value: NodeTextEncoder,
  })
}

failOnConsole({
  shouldFailOnWarn: true,
})
