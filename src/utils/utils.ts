// utils.ts
const classNames = (...classes: (string | boolean | undefined)[]): string => classes.filter(Boolean).join(' ')

export default classNames
