import { useLayoutEffect, useState } from 'react'

const canUseDOM = () =>
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'

export const useClientLayoutEffect = canUseDOM() ? useLayoutEffect : () => {}

export const useId = () => {
  const [newId, setNewId] = useState('')

  useClientLayoutEffect(() => {
    setNewId(crypto.randomUUID())
  }, [])

  return newId || ''
}
