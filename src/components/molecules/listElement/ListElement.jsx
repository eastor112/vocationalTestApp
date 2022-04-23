import PropTypes from 'prop-types';
import { v4 as uidv4 } from 'uuid';

const ListElement = ({ option, description, careers, onClick }) => {
  return (
    <div className='pb-6'>
      <p>
        As a
        <span className='mx-1 font-bold'>
          {option}
        </span>
        {`We find that ${description}`}
      </p>
      <p className='my-5'>
        Your career choices are:
      </p>
      <ul className='columns-1 sm:columns-2 md:columns-3 mb-5 font-medium list-decimal ml-4'>
        {
          careers.map((career) => (

            <li
              key={uidv4()}
              className='mb-2 text-blue-600'
            >
              <button
                type='button'
                className='text-blue-600 hover:text-blue-700 hover:underline'
                onClick={() => onClick(career)}
              >
                {career}
              </button>
            </li>

          ))
        }
      </ul>
    </div>
  );
};

ListElement.propTypes = {
  option: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  careers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListElement;
