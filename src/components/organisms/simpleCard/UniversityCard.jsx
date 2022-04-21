import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { resumeDescription } from '../../../helpers/universityHelper';

const UniversityCard = ({ university }) => {
  return (
    <div key={university.id} className='card rounded-md bg-light-1'>
      <div className='flex flex-col gap-4'>
        <figure className='w-full h-36 overflow-hidden'>
          <img src={university.campus[0]} className='h-36 w-full' alt={`campus ${university.name}`} />
        </figure>
        <figure className='w-3/5 ml-3'>
          <img className='logo w-full' src={university.logo} alt={university.name} />
        </figure>
      </div>
      <div className='p-3'>

        <p className='text-sm mb-1'>
          <span className='font-medium text-sm mr-1'>
            Location:
          </span>
          {
            ` ${university.address.city}, ${university.address.country ? university.address.country : ''}`
          }
        </p>

        <p className='text-sm mb-1'>
          <span className='font-medium text-sm mr-1'>World Rank:</span>
          {university.ranking.worldwide}
        </p>
        <p className='text-sm mb-3'>
          <span className='font-medium text-sm mr-1'>
            National Rank:
          </span>
          {university.ranking.national}
        </p>
        <small className=' vision text-xs block leading-relaxed'>
          {resumeDescription(university.vision, 90)}
          <Link
            className='my-2 ml-1 text-right text-xs text-neutral-1 hover:underline'
            to={`/university/${university.id}`}
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    campus: PropTypes.arrayOf(PropTypes.string).isRequired,
    ranking: PropTypes.shape({
      national: PropTypes.number.isRequired,
      worldwide: PropTypes.number.isRequired,
    }).isRequired,
    address: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }).isRequired,
    vision: PropTypes.string.isRequired,
  }).isRequired,
};

export default UniversityCard;
