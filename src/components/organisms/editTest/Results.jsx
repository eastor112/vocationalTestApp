import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import SingleResult from './SingleResult';
import { getTestyById, updateResultsVocationalTest } from '../../../services/vocationalServices';
import DragAndDropList from '../dragAndDropList/DragAndDropList';

const Results = ({ results, testId }) => {
  const [resA, setResA] = useState(results.A);
  const [resB, setResB] = useState(results.B);
  const [resC, setResC] = useState(results.C);
  const [resD, setResD] = useState(results.D);
  const [resE, setResE] = useState(results.E);

  const handleUpdateResults = () => {
    updateResultsVocationalTest(testId, resA, resB, resC, resD, resE).then(console.log);
  };
  return (
    <div>
      <div>holiii</div>
      <DragAndDropList
        label='Results A'
        arrayItems={resA}
        setParentArray={setResA}
      />
      <DragAndDropList
        label='Results B'
        arrayItems={resB}
        setParentArray={setResB}
      />
      <DragAndDropList
        label='Results C'
        arrayItems={resC}
        setParentArray={setResC}
      />
      <DragAndDropList
        label='Results D'
        arrayItems={resD}
        setParentArray={setResD}
      />
      <DragAndDropList
        label='Results E'
        arrayItems={resE}
        setParentArray={setResE}
      />
      <div className='my-4'>
        <button
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={handleUpdateResults}
        >
          Update
        </button>
      </div>
    </div>
  );
};

Results.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.object.isRequired,
  testId: PropTypes.string.isRequired,

};

export default Results;
