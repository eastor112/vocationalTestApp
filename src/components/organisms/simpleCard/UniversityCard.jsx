import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { resumeDescription } from '../../../helpers/universityHelper';

const UniversityCard = ({ university }) => {
  return (
    <div key={university.id} className='card rounded-md bg-light-1'>
      <div className='flex flex-col gap-4'>
        <figure className='w-full'>
          <img src='https://www.ecestaticos.com/imagestatic/clipping/684/b95/684b954458f362f5e4b223ce324dfec6/6-claves-de-la-universidad-de-harvard-para-dejar-de-procrastinar.jpg?mtime=1638200512' alt='harvard' />
        </figure>
        <figure className='w-3/5 ml-3'>
          <img className='w-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/2560px-Harvard_University_logo.svg.png' alt={university.name} />
        </figure>
      </div>
      <div className='p-3'>

        <p className='text-sm mb-1'>
          <span className='font-medium text-sm mr-1'>
            Location:
          </span>
          {
            ` ${university.location.city}, ${university.location.Country}`
          }
        </p>

        <p className='text-sm mb-1'>
          <span className='font-medium text-sm mr-1'>World Rank:</span>
          {' 3  (97.9 pts)'}
        </p>
        <p className='text-sm mb-3'>
          <span className='font-medium text-sm mr-1'>
            National Rank:
          </span>
          {' 1  (97.9 pts)'}
        </p>
        <small className=' vision text-xs block leading-relaxed'>
          {resumeDescription(university.vision, 90)}
          <Link
            className='my-2 ml-1 text-right text-xs text-neutral-1 hover:underline'
            to='/university/1'
          >
            see more
          </Link>
        </small>
      </div>
    </div>
  );
};

UniversityCard.propTypes = {
  university: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      Country: PropTypes.string.isRequired,
    }).isRequired,
    vision: PropTypes.string.isRequired,
  }).isRequired,
};

export default UniversityCard;
