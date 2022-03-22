import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/organisms/footer/Footer';
import careersData from '../data/careers';

const imgs = [
  'https://media.giphy.com/media/3vPAVUcLAbIGs/giphy.gif',
  'https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif',
  'https://media.giphy.com/media/Y4vdnmg54rD54Ytf30/giphy.gif',
];

const results = [
  {
    option: 'A',
    description: 'the careers that are most related to you are technical, experimental and health sciences, as well as some degrees in social sciences.',
    careers: [1, 2],
  }, {
    option: 'B',
    description: 'the careers that are most related to you are those that correspond to the field of social and legal sciences, as well as some of the humanities and technical areas.',
    careers: [3, 4],
  }, {
    option: 'C',
    description: 'the careers that most closely relate to you are those related to culture and those whose fundamental activity consists of helping others.',
    careers: [5, 6],
  }, {
    option: 'D',
    description: 'the careers that are most related to you are those related to humanities and creative work',
    careers: [7, 8],
  },
];

const VocationalTestResultPage = () => {
  const rand = Math.random();
  return (
    <>
      <main className='px-6 md:px-20 lg:px-24 pb-3 pt-16' />

      <div className='flex flex-col-reverse lg:flex-row items-center mx-20 my-12 gap-6'>
        <figure className='flex-1 overflow-hidden'>
          <img
            className='w-full h-full object-contain'
            src={imgs[Math.round(rand * 2)]}
            alt=''
          />
        </figure>

        <div className='flex-1 border-2 border-solid border-primary-1 p-5 rounded-xl shadow-lg shadow-primary-2 opacity-90'>
          <h3 className='font-bold text-2xl mb-5'>
            Excelent Albert Einsten!
          </h3>
          <p>

            {`We find that ${results[Math.round(rand * 3)].description}`}
          </p>
          <p className='my-5'>
            Your career choices are:
          </p>
          <ul className='columns-2 md:columns-3 lg:columns-2 mb-5 font-medium list-decimal ml-4'>
            {results[Math.round(rand * 3)].careers.map((career) => (
              <li>
                <Link to={`/career/${career}`} key={career}>{careersData.find((elem) => elem.id === career).name}</Link>
              </li>
            ))}
          </ul>
          <small className='italic'>
            <span className='font-bold mr-1 not-italic'>Note:</span>
            You can find more information about the races by clicking on them,
            before making your final decision.
          </small>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VocationalTestResultPage;
