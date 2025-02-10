import React, { useEffect, useState } from 'react'
import Checkbox from '../Checkbox'
import classNames from '../../utils/utils'

interface Item {
  label: string
  value: string
  disabled?: boolean
}

interface CheckboxGroupProps {
  className?: string
  header?: string
  items: Item[]
  onChange?: (selected: string[]) => void
  orientation?: 'column' | 'row'
  selectedValues?: string[]
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  className,
  header,
  items,
  onChange = () => {},
  orientation = 'column',
  selectedValues = [''],
}) => {
  const [selected, updateSelected] = useState(selectedValues)

  useEffect(() => {
    onChange(selected)
  }, [selected])

  const setSelected = (sel: string) => {
    const newArr = [...selected]
    if (selected.includes(sel)) {
      newArr.splice(selected.indexOf(sel), 1)
    } else {
      newArr.push(sel)
    }
    updateSelected(newArr)
  }

  return (
    <div className={classNames('ssb-checkbox-group', className)}>
      {header && <div className='checkbox-group-header'>{header}</div>}
      <div className={`boxes flex-${orientation}`}>
        {items.map((it) => (
          <Checkbox
            key={it.value}
            selected={selected.includes(it.value)}
            value={it.value}
            callback={setSelected}
            disabled={it.disabled}
          >
            {it.label}
          </Checkbox>
        ))}
      </div>
    </div>
  )
}

export default CheckboxGroup
