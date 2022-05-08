import React, { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Descriptions from '../../components/organisms/editTest/Descriptions';

import Principal from '../../components/organisms/editTest/Principal';
import Questions from '../../components/organisms/editTest/Questions';
import Results from '../../components/organisms/editTest/Results';
import TabsV2 from '../../components/organisms/editTest/TabsV2';
import Question from '../../components/organisms/question/Question';
import { getTestyById } from '../../services/vocationalServices';

const EditTestPage = () => {
  const width = useOutletContext();
  const { part, testId } = useParams();

  const [activeTest, setActiveTest] = useState({});

  useEffect(() => {
    getTestyById(testId)
      .then((data) => {
        setActiveTest(data);
      });
  }, []);

  return (
    <main className={`min-h-screen w-screen pt-10 pr-10 pb-6 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      <div className='m-auto bg-white px-8 pt-6 pb-8 w-8/12  rounded-sm border border-gray-500'>

        <TabsV2
          testId={testId}
        />

        {
          (part === 'principal' && activeTest.id) && (
            <Principal
              testId={testId}
              test={activeTest}
            />
          )
        }

        {
          (part === 'questions' && activeTest.id) && (
            <Questions
              testId={testId}
            />
          )
        }

        {
          (part === 'results' && activeTest.id) && (
            <Results
              testId={testId}
              results={activeTest.results}
            />
          )
        }

        {
          (part === 'descriptions' && activeTest.id) && (
            <Descriptions
              testId={testId}
              descriptions={activeTest.descriptions}
            />
          )
        }

      </div>
    </main>
  );
};

export default EditTestPage;
