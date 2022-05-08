import PropTypes from 'prop-types';

const InputFile = ({ name, onChange, accept }) => {
  return (
    <input
      data-cy={`input-${name}`}
      className='block w-full h-10  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
      aria-describedby={`${name}_help`}
      id={name}
      type='file'
      name={name}
      onChange={onChange}
      accept={accept}
    />

  );
};

InputFile.defaultProps = {
  accept: 'image/png, image/jpeg, image/gif image/jpg',
  onChange: () => { },
};

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  accept: PropTypes.string,
};

export default InputFile;
