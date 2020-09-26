import React, { useState } from 'react';
import './style.scss'

function Dropdown({ items = [], multiSelect = false, toggleItem }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([items[0]]);
  const toggle = () => setOpen(!open);

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

          <span>{open ? 'Close' : 'Open'}</span>
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
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown