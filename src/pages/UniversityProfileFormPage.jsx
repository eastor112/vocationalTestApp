import React, { useState } from 'react';
import FileUpload from '../components/molecules/fileUpload/FileUpload';
import UniversityForm from '../components/molecules/universityForm/UniversityForm';
import Sidebar from '../components/organisms/sidebar/Sidebar';

const UniversityProfileFormPage = () => {
  const [width, setWidth] = useState(64);
  return (
    <>
      <Sidebar setWidth={setWidth} />
      <main className={`${width === 64 ? 'pt-4 pr-10 pl-72 bg-light-1 h-screen' : ' pt-4 pr-10 pl-24 bg-light-1 h-screen'}`}>
        <div className='mt-5'>
          <h2 className='pb-10 text-2xl font-bold text-dark-1 my-4'>University Profile</h2>
          <div className='md: w-2/5'>
            <img src={require('../assets/img.png')} alt='' />
          </div>
          <div className='grid grid-cols-1 justify-start items-cent pt-8'>
            <FileUpload />
          </div>
        </div>
        <div className='pt-16'>
          <UniversityForm />
        </div>
      </main>
    </>
  );
};

export default UniversityProfileFormPage;
