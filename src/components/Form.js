import React, { useState } from 'react';
import Input from './Input';
import '../Form.css';
import {
  calculation,
  sub,
  percent,
} from '../backend/CompoundInterestCalculation';
import {
  formatMoney,
  formatPercentage,
  formatBalance,
} from '../helpers/formatters';

export default function Form() {
  const [initialAmount, setInitialAmount] = useState(5000);
  const [interestRate, setInterestRate] = useState(0.01);
  const [qttMonths, setQttMonths] = useState(6);

  const array = Array.from({ length: qttMonths }, (v, i) => i);

  const handleChangeAmount = (value) => {
    setInitialAmount(value);
    console.log('Montante = ' + value);
    return;
  };

  const handleChangeInterestRate = (value) => {
    setInterestRate(value);
    console.log('Juros = ' + value);
    return;
  };

  const handleQttMonths = (value) => {
    setQttMonths(value);
    console.log('Meses = ' + value);
    return;
  };

  return (
    // <div className="container">
    <div className="Form">
      <div className="Inputs">
        <Input
          id={'inputMontante'}
          foco={true}
          label={'Montante inicial'}
          step={100}
          // value={gradeValue}
          onChangeInput={handleChangeAmount}
        />
        <Input
          id={'inputTaxaJuros'}
          foco={false}
          label={'Taxa de juros mensal'}
          step={0.1}
          onChangeInput={handleChangeInterestRate}
        />
        <Input
          id={'inputTaxaJuros'}
          foco={false}
          label={'Período (meses)'}
          onChangeInput={handleQttMonths}
        />
      </div>
      <div className="Boxes">
        {array.map((item) => (
          <div className="Box" key={item}>
            <span>Mês {item + 1}:</span>
            <p>
              {formatMoney(calculation(initialAmount, interestRate, item + 1))}
            </p>
            <p>{formatBalance(sub(initialAmount, interestRate, item + 1))}</p>
            <p>
              {formatPercentage(percent(initialAmount, interestRate, item + 1))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
