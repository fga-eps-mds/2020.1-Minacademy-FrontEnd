import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button';
import './style.scss';

/* eslint-disable no-shadow */
function ExamRules() {
  return (
    <div className="exam-rules">
      <h4 className="exam-rules__header">
        Essa avaliação tem como objetivo verificar se você possui
        o conhecimento necessário para realizar a mentoria
      </h4>
        <p>Conclua com mais de 70% de acertos para ser validado como mentor(a)</p>
        <p>Não há limite de tempo para realizar a prova</p>
        <Button
          disabled={true}
          shadow
        >
          Finalizar avaliação
        </Button>
    </div>
  );
}

export default ExamRules;
