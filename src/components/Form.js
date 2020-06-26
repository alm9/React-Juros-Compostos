import React, { useState } from 'react';
import Input from './Input';
import '../Form.css';
import Box from './Box';
import { calculation } from '../backend/CompoundInterestCalculation';

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

  const array = Array.from({ length: qttMonths }, (v, i) => i);

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
          <Box key={item}>
            <span>Mês {item + 1}:</span>
            <p>
              R$ {initialAmount} com R$ {interestRate}
            </p>
            <p>Resultado: R$ {calculation(initialAmount, interestRate)}</p>
          </Box>
        ))}
      </div>
    </div>
  );
}
