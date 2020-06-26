import React from 'react';
import Input from './Input';
import '../Form.css';

export default function Form() {
  return (
    // <div className="container">
    <div className="meu-box">
      <div className="Inputs">
        <Input
          id={'inputMontante'}
          foco={true}
          label={'Montante inicial'}
          // value={gradeValue}
          // onChange={handleGradeChange}
        />
        <Input
          id={'inputTaxaJuros'}
          foco={false}
          label={'Taxa de juros mensal'}
        />
        <Input id={'inputTaxaJuros'} foco={false} label={'Período (meses)'} />
      </div>
    </div>
  );
}
