import React from 'react';

export default function Input({ id, foco, label }) {
  return (
    <div>
      <input
        className="input"
        id={id}
        type="number"
        step="1"
        autoFocus={foco}
        placeholder={label}
      />

      <label className="label-nome" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
