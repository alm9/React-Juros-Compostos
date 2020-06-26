import React, { useState } from 'react';
import Input from './Input';
import '../Form.css';
import Box from './Box';
import { calculation } from '../backend/CompoundInterestCalculation';

// const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const v = [1, 2, 3, 4, 5];

export default function Form() {
  const [initialAmount, setInitialAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.5);
  const [qttMonths, setQttMonths] = useState(1);

  const handleChangeAmount = (value) => {
    setInitialAmount(value);
    console.log('Montante inicial alterado = ' + value);
    return;
  };

  const handleChangeInterestRate = (value) => {
    setInterestRate(value);
    console.log('Taxa de juros alterado = ' + value);
    return;
  };

  const handleQttMonths = (value) => {
    setQttMonths(value);
    console.log('Quantidade de meses alterada = ' + value);
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
        {v.map((item) => (
          <Box key={item}>
            <span>Mês {item}:</span>
            <p>R$ tanto</p>
          </Box>
        ))}
      </div>
    </div>
  );
}
