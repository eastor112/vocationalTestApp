import { Link } from 'react-router-dom';

const careerExample = {
  field: {
    description: 'Social work implies entering a world where empathy and the passion to help must be dominant forces. The main function of a social worker is to promote social change and generate projects that increase the well-being and quality of life of people. Almost all companies and institutions have a professional of this type on their team, since social matters are key everywhere.',
    list: [
      'Social worker in public entities.',
      'In Human Resources.',
      'In hospitals and health centers.',
      'As a social monitor, director in residence and shelter homes.',
      'Social manager in charitable foundations.',
    ],
    references: [
      'https://www.carrerasadistancia.com.pe/licenciatura-en-trabajo-social/articulo-trabajo-social-campo-laboral#:~:text=La%20principal%20funci%C3%B3n%20de%20un,es%20clave%20en%20todas%20partes.',
    ],
  },
  skills: {
    'description': 'The social worker must have the ability to work and assess their needs and circumstances together with individuals, families, groups, organizations and communities.',
    'list': [
      'Positive attitude.',
      'Listening skills.',
      'Skills to negotiate.',
      'Report writing skills.',
      'Ability to gain the trust of others.',
      'Ability to manage workload.',
      'Able to remain calm under pressure.',
      'Effective communication',
    ],
    references: [
      'https://www.educaweb.com/profesion/trabajador-social-239/',
      'http://www.trabajosocialvalladolidsegovia.org/perfilprofesional.php',
    ],
  },
  name: 'Social Work 1',
  description: "Social work is a profession that promotes social change and development, social cohesion and the empowerment of people. Social work engages people and structures to deal with life's challenges and increase well-being.",
  photo: 'https://res.cloudinary.com/dgieekaqd/image/upload/v1650169148/vocationalTestApp/careers/v2accsivauz7gn1mhqgm.png',
  createdAt: '2022-04-03T21:14:02.324Z',
  updatedAt: '2022-04-17T04:19:09.806Z',
  id: '624a0e1a878cdf793b54ba7e',
};

const CareerCard = () => {
  return (
    <div className='flex flex-col items-center bg-white rounded-md border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden'>
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white'>
          {careerExample.name}
        </h5>

        <div className='mb-3 text-xs text-gray-700 dark:text-gray-400 flex'>
          <figure className='h-10 w-24 mr-2 overflow-hidden flex justify-center items-center'>
            <img className='max-h-full ' src={careerExample.photo} alt='' />
          </figure>
          <p>
            {`${careerExample.description.substring(0, 80)}...`}
          </p>

        </div>

        <hr />
        <div aria-label='field-list'>
          <span className='font-medium mr-2 text-xs'>Labor field:</span>
          {careerExample.field.list.slice(0, 1).map((item, index) => (
            <span key={`${index * 3}sdf`} className='text-xs text-gray-700 dark:text-gray-400'>
              {`${item} `}
            </span>
          ))}
          ...
        </div>

        <hr />
        <div aria-label='skill-list'>
          <span className='font-medium mr-2 text-xs'>Required skills:</span>

          {careerExample.skills.list.slice(0, 2).map((item, index) => (
            <span key={`${index * 3}sdf`} className='text-xs text-gray-700 dark:text-gray-400'>
              {`${item} `}
            </span>
          ))}
          ...
        </div>

        <div className='flex gap-1 mt-4'>
          <Link to='/dashboard/editcareer/:id'>
            <button
              type='button'
              className='flex text-green-500 hover:text-white border border-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-xs px-3 py-1.5 text-center mr-1 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              Info
            </button>
          </Link>

          <Link to='/dashboard/editcareer/:id'>
            <button
              type='button'
              className='flex text-yellow-400 hover:text-white border border-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-xs px-3 py-1.5 text-center mr-1 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
              </svg>
              Update
            </button>
          </Link>

          <button
            type='button'
            className='flex text-red-600 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-xs px-3 py-1.5 text-center mr-1 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
