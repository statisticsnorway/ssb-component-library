import fs from 'fs'
import path from 'path'
import { RenderOptions, RenderResult, render as rtlRender } from '@testing-library/react'
import { ReactNode } from 'react'

export * from '@testing-library/react'
const isTestEnv = process.env.NODE_ENV === 'test'
let styles = ''
if (!isTestEnv) {
  styles = fs.readFileSync(path.relative(process.cwd(), './lib/bundle.css'), 'utf8')
}
export function render(ui: ReactNode, options?: RenderOptions): RenderResult {
  const view = rtlRender(ui, options)

  const styleElement = document.createElement('style')
  styleElement.innerHTML = styles
  document.body.appendChild(styleElement)

  return view
}
