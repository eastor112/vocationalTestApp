/* eslint-disable no-console */
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import { getUniversityById } from '../../services/universitiesServices';
import UniversityPrincipalForm from '../../components/molecules/universityForm/UniversityPrincipalForm';
import Tabs from '../../components/organisms/tabs/Tabs';
import UniversityAdmisionForm from '../../components/molecules/universityForm/UniversityAdmisionForm';
import UniversityMediaForm from '../../components/molecules/universityForm/UniversityMediaForm';
import UniversitySocialMedia from '../../components/molecules/universityForm/UniversitySocialMedia';
import UniversityOffersComponent from '../../components/molecules/universityForm/UniversityOffersComponent';

const UniversityProfileFormPage = () => {
  const width = useOutletContext();
  const { part } = useParams();

  const { user: { university } } = useSelector((state) => state.auth);

  const [activeUniversity, setActiveUniversity] = useState({});

  useEffect(() => {
    getUniversityById(university)
      .then((data) => {
        setActiveUniversity(data);
      });
  }, []);

  return (
    <main className={`min-h-screen w-screen pt-10 pr-10 pb-6 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      <div className='m-auto bg-white px-8 pt-6 pb-8 w-8/12  rounded-sm border border-gray-500'>

        <Tabs />

        {
          (part === 'principal' && activeUniversity.id) && (
            <UniversityPrincipalForm
              university={activeUniversity}
            />
          )
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
          (part === 'media' && activeUniversity.id) && (
            <UniversityMediaForm university={activeUniversity} />)
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
    </main>
  );
};

export default UniversityProfileFormPage;
