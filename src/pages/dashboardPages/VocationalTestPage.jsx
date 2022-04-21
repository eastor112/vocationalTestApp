import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Question from '../../components/organisms/question/Question';
import questions from '../../data/questions';
import { useForm } from '../../hooks/useForm';

const VocationalTestPage = () => {
  const navigate = useNavigate();
  const width = useOutletContext();

  const { formValues, handleFormChange } = useForm();

  const handleFinish = () => {
    navigate('/dashboard/test/result');
  };

  return (

    <main className={`pt-4 pr-10 bg-light-1 pb-8 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      <h1 className='text-3xl md:text-4xl lg:text-5xl leading-5 xl:leading-8 font-semibold  md:mt-0'>Vocational Test</h1>
      <div>
        <p className='mt-10 text-justify'>
          Todos tenemos una disposición natural para trabajar mejor en los campos que más nos
          interesan y en los que creemos ser más eficaces. Esta eficacia produce satisfacción,
          lo que nos impulsa a progresar más rapidamente en el desarrollo de nuestras habilidades
        </p>
        <br />
        <div className=' md:grid grid-cols-2 gap-2'>
          {
            questions.map((question) => (<Question key={uuidv4()} question={question} />))
          }
        </div>
        <br />
        <br />
      </div>

      <div className='w-full flex justify-end'>
        <button
          type='submit'
          className='bg-black hover:bg-green-400 text-white font-bold py-4 px-20 rounded'
          onClick={handleFinish}
        >
          Finish
        </button>
      </div>

    </main>
  );
};

export default VocationalTestPage;
