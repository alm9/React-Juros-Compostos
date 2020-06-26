import React from 'react';
import Input from './Input';
import '../Form.css';
import Box from './Box';

// const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const v = [1, 2, 3, 4, 5];

export default function Form() {
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
          // onChange={handleGradeChange}
        />
        <Input
          id={'inputTaxaJuros'}
          foco={false}
          label={'Taxa de juros mensal'}
        />
        <Input id={'inputTaxaJuros'} foco={false} label={'Período (meses)'} />
      </div>
      <div className="Boxes">
        {v.map((item) => (
          <Box key={item}>
            <span className="resultado">
              <p>Resultado {item}:</p>
              <p>R$ tanto</p>
            </span>
          </Box>
        ))}
      </div>
    </div>
  );
}
