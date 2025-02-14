import React, { useEffect, useState } from 'react'
import RadioButton from '../RadioButton'
import classNames from '../../utils/utils'

interface Item {
  id?: string
  label: string
  value: string | number
  disabled?: boolean
}

interface RadioGroupProps {
  className?: string
  groupName?: string
  header?: string
  items: Item[]
  onChange?: (value: string) => void
  orientation?: 'column' | 'row'
  selectedValue?: string | number
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  className,
  groupName,
  header,
  items,
  onChange = () => {},
  orientation = 'column',
  selectedValue,
}) => {
  const [selected, setSelected] = useState<string | number>(selectedValue || '')

  useEffect(() => {
    onChange(selected.toString())
  }, [selected])

  return (
    <div className={classNames('ssb-radio-group', className)}>
      {header && <div className='radio-group-header'>{header}</div>}
      <div className={`boxes flex-${orientation}`}>
        {items.map((it: Item) => (
          <RadioButton
            id={it.id}
            key={it.value}
            selected={it.value === selected}
            value={it.value}
            name={groupName || header}
            callback={setSelected}
            disabled={it.disabled}
          >
            {it.label}
          </RadioButton>
        ))}
      </div>
    </div>
  )
}

export default RadioGroup
