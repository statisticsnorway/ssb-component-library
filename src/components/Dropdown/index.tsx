import React, { useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import { useId } from '../../utils/useId'
import InputError from '../InputError'
import classNames from '../../utils/utils'

interface Item {
  id: string
  title: string
  disabled?: boolean
}

interface DropdownProps {
  className?: string
  header?: string
  icon?: ReactNode
  items?: Item[]
  onSelect?: (item: Item) => void
  open?: boolean
  placeholder?: string
  searchable?: boolean
  selectedItem?: Item
  tabIndex?: number
  error?: boolean
  errorMessage?: string
  ariaLabel?: string
  id?: string
  largeSize?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  header = '',
  icon,
  items = [{ id: '', title: '' }],
  onSelect = () => {},
  open = false,
  placeholder = '-- Select --',
  searchable = false,
  selectedItem,
  tabIndex,
  error,
  errorMessage,
  ariaLabel,
  id,
  largeSize,
}) => {
  const wrapper = useRef<HTMLDivElement>(null)
  const node = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<{ [key: number]: HTMLLIElement | null }>({})
  const optionList = useRef<HTMLUListElement>(null)

  const [isOpen, setIsOpen] = useState(open)
  const [availableOptions, setAvailableOptions] = useState(items || [])
  const DEFAULT_ITEM = { title: '', id: '' }
  const [selectedOption, setSelectedOption] = useState(selectedItem || DEFAULT_ITEM)
  const [activeOption, setActiveOption] = useState(selectedItem || DEFAULT_ITEM)
  const [inputFieldValue, setInputFieldValue] = useState('')
  const [keyNavPosition, setKeyNavPosition] = useState(0)

  const dropdownId = id ?? useId()

  useEffect(() => {
    setSelectedOption(selectedItem || DEFAULT_ITEM)
    setActiveOption(selectedItem || DEFAULT_ITEM)
  }, [selectedItem])

  const filterOptions = (value: string) => {
    setInputFieldValue(value)
    setAvailableOptions(items.filter((it) => it.title.toLowerCase().includes(value.toLowerCase())))
  }

  useEffect(() => {
    setAvailableOptions(items)
  }, [items])

  const filterItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterOptions(event.target.value)
  }

  const handleSelection = (item: Item) => {
    if (!item.disabled) {
      setSelectedOption({ title: item.title, id: item.id })
      onSelect(item)
      setIsOpen(false)
    }

    if (items[keyNavPosition].id !== item.id) {
      const idx = items.findIndex((it) => it.id === item.id)
      setKeyNavPosition(idx)
    }

    if (searchable) {
      setAvailableOptions(items)
      setInputFieldValue('')
    }

    if (node.current) {
      node.current.focus()
    }
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapper.current && !wrapper.current.contains(e.target as Node)) {
      setTimeout(() => {
        setIsOpen(false)
        if (searchable) {
          setInputFieldValue('')
        }
      }, 100)
    }
  }

  const handleKeyboardNav = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp' && keyNavPosition > 0) {
      e.preventDefault()
      setKeyNavPosition(keyNavPosition - 1)
    } else if (e.key === 'ArrowDown' && keyNavPosition < items.length - 1) {
      e.preventDefault()
      setKeyNavPosition(keyNavPosition + 1)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (isOpen) {
        handleSelection(items[keyNavPosition])
      } else {
        setIsOpen(true)
      }
    } else if (e.key === 'Escape') {
      if (!searchable) {
        e.preventDefault()
        setIsOpen(false)
      }
    }
  }

  const handleSearchSpecialKeys = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    } else if (e.key === 'Tab') {
      setIsOpen(false)
    } else if (e.key === 'ArrowDown' && keyNavPosition < availableOptions.length - 1) {
      setKeyNavPosition(keyNavPosition + 1)
    } else if (e.key === 'ArrowUp' && keyNavPosition > 0) {
      setKeyNavPosition(keyNavPosition - 1)
    } else if (e.key === 'Enter' && isOpen) {
      e.preventDefault()
      handleSelection(availableOptions[keyNavPosition])
    } else {
      setIsOpen(true)
      if (e.key === ' ') {
        if (searchable) {
          e.preventDefault()
          filterOptions(`${(e.currentTarget as HTMLInputElement).value} `)
        }
      } else {
        filterOptions((e.currentTarget as HTMLInputElement).value)
      }
    }
  }

  useEffect(() => {
    if (isOpen && itemRefs.current[keyNavPosition]) {
      itemRefs.current[keyNavPosition]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
      setActiveOption(items[keyNavPosition])
    }
  }, [keyNavPosition])

  useEffect(() => {
    if (isOpen) {
      if (!searchable) {
        optionList.current?.focus()
      }
      document.addEventListener('mousedown', handleClickOutside)
    }

    if (isOpen && keyNavPosition === 0) {
      setActiveOption(items[0])
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (searchable && !inputFieldValue) {
      setKeyNavPosition(0)
    }
  }, [inputFieldValue])

  const renderIcon = () => {
    if (icon) {
      return <div className='dd-icon'>{icon}</div>
    }
    return isOpen ? (
      <ChevronUp className='dd-icon' size={largeSize ? 50 : 24} />
    ) : (
      <ChevronDown className='dd-icon' size={largeSize ? 50 : 24} />
    )
  }

  const renderHeader = () => {
    if (!header && ariaLabel) {
      return (
        <span className='dropdown-label sr-only' id={`label_${dropdownId}`}>
          {ariaLabel}
        </span>
      )
    }
    return (
      <span id={`label_${dropdownId}`} className='dropdown-label'>
        {header}
      </span>
    )
  }
  const renderHeaderSearchable = () => header && <label htmlFor={`input_${dropdownId}`}>{header}</label>

  return (
    <div
      id={`dropdown_${dropdownId}`}
      className={classNames('ssb-dropdown', className, error && ' error', largeSize && ' large')}
    >
      {searchable ? renderHeaderSearchable() : renderHeader()}
      <div className='dropdown-interactive-area' ref={wrapper} tabIndex={tabIndex}>
        {!searchable && (
          <button
            className={isOpen ? 'focused opener' : 'opener'}
            id={`button_${dropdownId}`}
            ref={node}
            tabIndex={0}
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            onKeyDown={(e) => {
              handleKeyboardNav(e)
            }}
            type='button'
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-describedby={error && errorMessage ? `error_${dropdownId}` : undefined}
            aria-haspopup='listbox'
            aria-labelledby={
              !header && !ariaLabel ? `button_${dropdownId}` : `label_${dropdownId} button_${dropdownId}`
            }
          >
            {selectedOption?.title ? selectedOption.title : placeholder}
          </button>
        )}
        {searchable && (
          <input
            className={isOpen ? 'focused' : ''}
            id={`input_${dropdownId}`}
            onKeyDown={handleSearchSpecialKeys}
            onChange={filterItems}
            onFocus={() => setIsOpen(!isOpen)}
            disabled={!searchable}
            placeholder={selectedOption.title ? selectedOption.title : placeholder}
            value={inputFieldValue}
            aria-describedby={error && errorMessage ? `error_${dropdownId}` : undefined}
            role='combobox'
            aria-autocomplete='list'
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-controls={`list_of_options_${dropdownId}`}
            aria-label={ariaLabel}
            type='text'
            aria-activedescendant={activeOption ? activeOption.id : undefined}
          />
        )}
        {renderIcon()}
        {isOpen && (
          <ul
            id={`list_of_options_${dropdownId}`}
            className={`list-of-options${!isOpen ? ' hidden' : ''}`}
            role='listbox'
            aria-labelledby={!searchable && (header || ariaLabel) ? 'dropdown-label' : undefined}
            aria-activedescendant={!searchable && activeOption.id !== '' ? activeOption.id : undefined}
            tabIndex={-1}
            ref={optionList}
            onKeyDown={(e) => {
              handleKeyboardNav(e)
            }}
          >
            {availableOptions.map((it, idx) => (
              <li
                key={it.id}
                className={`option-list-element${selectedOption?.id === it.id ? ' selected' : ''}${isOpen && keyNavPosition === idx ? ' active' : ''}${it.disabled ? ' disabled' : ''}`}
                onClick={() => {
                  handleSelection(it)
                }}
                id={it.id}
                ref={(el) => {
                  itemRefs.current[idx] = el
                }}
                role='option'
                aria-selected={isOpen && keyNavPosition === idx ? 'true' : undefined}
                aria-disabled={it.disabled}
              >
                {it.title}
              </li>
            ))}
          </ul>
        )}
        {error && errorMessage && <InputError errorMessage={errorMessage} id={`error_${dropdownId}`} />}
      </div>
    </div>
  )
}

export default Dropdown
