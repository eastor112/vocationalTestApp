import { ExternalLinkIcon } from '@heroicons/react/solid';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import CareerFieldEditForm from '../../components/organisms/careersForms/CareerFieldEditForm';
import CareerMainEditForm from '../../components/organisms/careersForms/CareerMainEditForm';
import CareerSkillsEditForm from '../../components/organisms/careersForms/CareerSkillsEditForm';
import TabsV3 from '../../components/organisms/tabs/TabsV3';

const CareerUpdateOrCreatePage = () => {
  const width = useOutletContext();
  const { careerId, part } = useParams();

  return (
    <main className={`min-h-screen pt-10 pr-10 pb-6 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>
      <div className='m-auto bg-white px-8 pt-6 pb-8 w-8/12 rounded-sm border border-gray-500'>
        <TabsV3 careerId={careerId} />

        {
          (part === 'main') && (
            <CareerMainEditForm />
          )
        }
        {
          (part === 'field') && (
            <CareerFieldEditForm />
          )
        }
        {
          (part === 'skills') && (
            <CareerSkillsEditForm />
          )
        }

      </div>

      <Link to={`/careers/${careerId}`}>
        <button
          type='button'
          className='h-11 w-11 rounded-full bottom-5 right-5 text-white bg-blue-700 flex justify-center items-center shadow-md shadow-gray-500 hover:bg-blue-600 fixed'
        >
          <ExternalLinkIcon className='w-6 h-6 fill-current' />
        </button>
      </Link>
    </main>
  );
};

export default CareerUpdateOrCreatePage;
