import { useOutletContext } from 'react-router-dom';
import FileUpload from '../components/molecules/fileUpload/FileUpload';
import UniversityForm from '../components/molecules/universityForm/UniversityForm';

const UniversityProfileFormPage = () => {
  const width = useOutletContext();
  return (
    <main className={`${width === 64 ? 'pt-4 pr-10 pl-72 bg-light-1 min-h-screen' : ' pt-4 pr-10 pl-24 bg-light-1 min-h-screen'}`}>
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
  );
};

export default UniversityProfileFormPage;
