import React from 'react';

/**
 * @typedef { object } StepButtonsCustomProps
 * @property {() => void} handleGotoNext
 * @property {boolean} isNextDisabled
 * @property {string} nextBtnText
 */

/**
 * @param {StepButtonsCustomProps} props component props
 * @returns {import('react').ReactElement}
 */
const StepButtonsCustom = ({ handleGotoNext, isNextDisabled, nextBtnText }) => {
  return (
    <div>
      <div className={'d-flex bottom-actions align-center'}>
        <div className="d-flex">
          <button disabled={isNextDisabled} onClick={handleGotoNext} className="step-button-custom">
            {nextBtnText || 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepButtonsCustom;
