import React from 'react';
import './App.css'

export const Form = ({index, labelText, item, handleChange}) => {
  const handleChangeParams = e => handleChange(e, index)

  return (
    <form className="form-wrapper">
      <div><b>{labelText}</b></div>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          name="width"
          className="form-input"
          value={item.width}
          onChange={handleChangeParams}
        />
      </div>
      <div>
        <label htmlFor="height1">Height:</label>
        <input
          type="number"
          name="height"
          className="form-input"
          value={item.height}
          onChange={handleChangeParams}
        />
      </div>
      <div>
        <label htmlFor="roof1">Roof angle:</label>
        <input
          type="number"
          name="roofAngle"
          className="form-input"
          value={item.roofAngle}
          onChange={handleChangeParams}
        />
      </div>
    </form>
  )
}
