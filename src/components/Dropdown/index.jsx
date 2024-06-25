import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronDown, ChevronUp } from 'react-feather'
import { KEY_ARROW_DOWN, KEY_ARROW_UP, KEY_ENTER, KEY_ESCAPE, KEY_SPACE, KEY_TAB } from '../../utils/keybindings'
import InputError from '../InputError'
import { useId } from '../../utils/useId'

const Dropdown = ({
  className,
  header,
  icon,
  items,
  onSelect,
  open,
  placeholder,
  searchable,
  selectedItem,
  tabIndex,
  error,
  errorMessage,
  ariaLabel,
  id,
  largeSize,
}) => {
  // all the refs we need!
  const wrapper = useRef()
  const node = useRef()
  const itemRefs = useRef({})
  const optionList = useRef()

  const [isOpen, setOpen] = useState(open)
  const [availableOptions, filterAvailableOptions] = useState(items || [])
  const DEFAULT_ITEM = { title: '', id: '' }
  const [selectedOption, selectItem] = useState(selectedItem || DEFAULT_ITEM)
  const [activeOption, setActiveOption] = useState(selectedItem || DEFAULT_ITEM)
  const [inputFieldValue, updateInputValue] = useState('')
  const [keyNavPosition, setKeyNavPosition] = useState(0)

  const dropdownId = id || useId()

  // ensure reactivity of 'selectedItem' prop is preserved
  useEffect(() => {
    selectItem(selectedItem || DEFAULT_ITEM)
    setActiveOption(selectedItem || DEFAULT_ITEM)
  }, [selectedItem])

  const filterOptions = (value) => {
    updateInputValue(value)
    filterAvailableOptions(items.filter((it) => it.title.toLowerCase().includes(value.toLowerCase())))
  }

  useEffect(() => {
    filterAvailableOptions(items)
  }, [items])

  const filterItems = (event) => {
    filterOptions(event.target.value)
  }

  const handleSelection = (item) => {
    if (!item.disabled) {
      selectItem({ title: item.title, id: item.id })
      onSelect(item)
      setOpen(false)
    }

    if (items[keyNavPosition].id !== item.id) {
      const idx = items.findIndex((it) => it.id === item.id)
      setKeyNavPosition(idx)
    }

    if (searchable) {
      filterAvailableOptions(items)
      updateInputValue('')
    }

    if (node.current) {
      node.current.focus()
    }
  }

  const handleClickOutside = (e) => {
    if (!wrapper.current.contains(e.target)) {
      setTimeout(() => {
        setOpen(false)
        if (searchable) {
          updateInputValue('')
        }
      }, 100)
    }
  }

  // TODO : See if handleKeyboardNav and handleSearchSpecialKeys can be squashed
  // 		  for DRY principle.

  const handleKeyboardNav = (e) => {
    if (e.keyCode === KEY_ARROW_UP && keyNavPosition > 0) {
      e.preventDefault()
      setKeyNavPosition(keyNavPosition - 1)
    } else if (e.keyCode === KEY_ARROW_DOWN && keyNavPosition < items.length - 1) {
      e.preventDefault()
      setKeyNavPosition(keyNavPosition + 1)
    } else if (e.keyCode === KEY_ENTER) {
      e.preventDefault()
      if (isOpen) {
        handleSelection(items[keyNavPosition])
      } else {
        setOpen(true)
      }
    } else if (e.keyCode === KEY_ESCAPE) {
      if (!searchable) {
        e.preventDefault()
        setOpen(false)
      }
    }
  }

  const handleSearchSpecialKeys = (e) => {
    if (e.keyCode === KEY_ESCAPE) {
      setOpen(false)
    } else if (e.keyCode === KEY_TAB) {
      setOpen(false)
    } else if (e.keyCode === KEY_ARROW_DOWN && keyNavPosition < availableOptions.length - 1) {
      setKeyNavPosition(keyNavPosition + 1)
    } else if (e.keyCode === KEY_ARROW_UP && keyNavPosition > 0) {
      setKeyNavPosition(keyNavPosition - 1)
    } else if (e.keyCode === KEY_ENTER && isOpen) {
      e.preventDefault()
      handleSelection(availableOptions[keyNavPosition])
    } else {
      setOpen(true)
      if (e.keyCode === KEY_SPACE) {
        if (searchable) {
          e.preventDefault()
          filterOptions(`${e.target.value} `)
        }
      } else {
        filterOptions(e.target.value)
      }
    }
  }

  useEffect(() => {
    if (isOpen && itemRefs.current[keyNavPosition]) {
      itemRefs.current[keyNavPosition].scrollIntoView({
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
        // List must be in focus for the elements in the option-list to be read out to the screen reader
        optionList.current.focus()
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
      className={`ssb-dropdown${className ? ` ${className}` : ''}${error ? ' error' : ''}${largeSize ? ' large' : ''}`}
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
              setOpen(!isOpen)
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
            onFocus={() => setOpen(!isOpen)}
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

Dropdown.defaultProps = {
  header: '',
  items: [{ id: '', title: '' }],
  onSelect: () => {},
  open: false,
  searchable: false,
  placeholder: '-- Select --',
}

Dropdown.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  header: PropTypes.string,
  icon: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  onSelect: PropTypes.func,
  open: PropTypes.bool,
  placeholder: PropTypes.string,
  searchable: PropTypes.bool,
  selectedItem: PropTypes.object,
  tabIndex: PropTypes.number,
  id: PropTypes.string,
  largeSize: PropTypes.bool,
}

export default Dropdown
