import React from 'react';

import { useOutletContext } from 'react-router-dom';
import Principal from '../../components/organisms/editTest/Principal';
import Questions from '../../components/organisms/editTest/Questions';
import Results from '../../components/organisms/editTest/Results';
// import TabsV2 from '../../components/organisms/editTest/tabsV2';
import Question from '../../components/organisms/question/Question';

const EditTestPage = () => {
  const width = useOutletContext();

  return (
    <main className={`min-h-screen w-screen pt-10 pr-10 pb-6 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      <div className='m-auto bg-white px-8 pt-6 pb-8 w-8/12  rounded-sm border border-gray-500'>

        {/* <TabsV2 /> */}

        {/* {
          (part === 'principal' && activeTest.id) && (
            <Principal
              test={activeTest}
            />
          )
        } */}

        {/* {
          (part === 'admision' && activeTest.id) && (
            <Questions />
          )
        }

        {
          (part === 'media' && activeTest.id) && (
            <Results />
          )
        } */}

      </div>
    </main>
  );
};

export default EditTestPage;
