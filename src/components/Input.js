import React from 'react';

export default function Input({ id, foco, label, step }) {
  return (
    <div>
      <input
        className="input"
        id={id}
        type="number"
        step={step}
        autoFocus={foco}
        placeholder={label}
      />

      <label className="label-nome" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
