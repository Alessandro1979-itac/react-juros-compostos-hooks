import React from 'react';
import Installment from './Installment';

export default function Installments({ Installments }) {
  return (
    <div className="row">
      {Installments.map((installment) => {
        return <Installment key={installment.id} installment={installment} />;
      })}
    </div>
  );
}
