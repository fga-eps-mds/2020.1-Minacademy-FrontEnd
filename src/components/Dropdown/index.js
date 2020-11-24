import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types'
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';
import './style.scss'

function Dropdown({ items = [], multiSelect = false, toggleItem, initialSelection }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([items[0]]);
  const toggle = () => setOpen(!open);

  useEffect(() => {
    if (initialSelection){
      setSelection([items[initialSelection-1]])
    } else {
      setSelection([items[0]])
    }
  }, [items, initialSelection])

  function handleOnClick(item) {
    if (!selection.some(current => current._id === item._id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current._id === item._id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >

          <span className="dd-header__title--bold">{selection[0] ? selection[0].title : ''}</span>

          <span className={`arrow ${open ? 'up' : 'down'}`}><Arrow /></span>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map(item => (
            <li className='dd-list-item' key={item._id}>
              <button type="button" className={`${isItemInSelection(item) ? 'selected' : '' }`} onClick={() => {
                handleOnClick(item)
                toggle(!open)
                return toggleItem(item)
              }}>
                <span>{isItemInSelection(item) ? '-':''} {item.title || item.value}</span>
                {item?.completed && <span>Concluído</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Dropdown.defaultProps = {
  multiSelect: false
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  multiSelect: PropTypes.bool,
  toggleItem: PropTypes.func.isRequired,
  initialSelection: PropTypes.number.isRequired,
};

export default Dropdown