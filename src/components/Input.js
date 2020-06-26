import React from 'react';

export default function Input({ id, foco, label, step, onChangeInput }) {
  const handleOnChangeInput = (event) => {
    onChangeInput(event.target.value);
  };

  return (
    <div>
      <input
        className="input"
        id={id}
        type="number"
        step={step}
        autoFocus={foco}
        placeholder={label}
        onChange={handleOnChangeInput}
      />

      <label className="label-nome" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
