import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleResult from './SingleResult';

import { getTestyById } from '../../../services/vocationalServices';

const Results = (test) => {
  const [oneTest, setOneTest] = useState({});
  const { testId } = useParams();

  useEffect(() => {
    getTestyById(testId).then((data) => {
      setOneTest(data);
    });
  }, []);

  return (

    <SingleResult
      test={oneTest}
    />
  );
};

export default Results;
