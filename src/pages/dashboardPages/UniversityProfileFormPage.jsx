/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';

import { Button } from 'flowbite-react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import UniversityPrincipalForm from '../../components/molecules/universityForm/UniversityPrincipalForm';
import Tabs from '../../components/organisms/tabs/Tabs';
import UniversityAdmisionForm from '../../components/molecules/universityForm/UniversityAdmisionForm';
import UniversityMediaForm from '../../components/molecules/universityForm/UniversityMediaForm';
import UniversitySocialMedia from '../../components/molecules/universityForm/UniversitySocialMedia';
import UniversityOffersComponent from '../../components/molecules/universityForm/UniversityOffersComponent';
import { setActiveUniversityAction } from '../../context/actions/universities-actions';

const UniversityProfileFormPage = () => {
  const width = useOutletContext();
  const { universityId, part } = useParams();

  const dispatch = useDispatch();
  const { activeUniversity } = useSelector((state) => state.universities);

  useEffect(() => {
    if (universityId !== 'undefined' && (!activeUniversity.id || activeUniversity.id !== universityId)) {
      console.log(universityId);
      console.log(typeof universityId);
      dispatch(setActiveUniversityAction(universityId));
    }
  }, [universityId]);

  return (
    <main className={` min-h-screen pt-10 pr-10 pb-6 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      <div className='m-auto bg-white px-8 pt-6 pb-8 w-8/12 rounded-sm border border-gray-500'>

        <Tabs universityId={universityId} />

        {
          (part === 'principal' && activeUniversity.id) && (
            <UniversityPrincipalForm
              university={activeUniversity}
            />
          )
        }

        {
          (part === 'media' && activeUniversity.id) && (
            <UniversityMediaForm university={activeUniversity} />)
        }

        {
          (part === 'admision' && activeUniversity.id) && (
            <UniversityAdmisionForm
              universityId={activeUniversity.id}
              process={activeUniversity.process}
            />
          )
        }

        {
          (part === 'social' && activeUniversity.id) && (
            <UniversitySocialMedia
              universityId={activeUniversity.id}
              socialMedia={activeUniversity.socialMedia}
            />
          )
        }

        {
          (part === 'offers' && activeUniversity.id) && (
            <UniversityOffersComponent
              universityId={activeUniversity.id}
              offer={activeUniversity.offer}
            />
          )
        }
      </div>

      <Link to={`/university/${universityId}`}>

        <Button className='fixed bottom-5 right-5 rounded-full h-14 w-14 p-0'>
          <ExternalLinkIcon className='w-6 h-6 fill-current' />
        </Button>
      </Link>

    </main>
  );
};

export default UniversityProfileFormPage;
