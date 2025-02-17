import { useLayoutEffect, useState } from 'react'

const canUseDOM = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement === 'function'

export const useClientLayoutEffect = canUseDOM() ? useLayoutEffect : () => {}

export const useId = (): string => {
  const [newId, setNewId] = useState('')

  useClientLayoutEffect(() => {
    setNewId(crypto.randomUUID())
  }, [])

  return newId || ''
}
