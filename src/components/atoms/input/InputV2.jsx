import PropTypes from 'prop-types';

const InputV2 = ({
  type,
  name,
  label,
  value = '', onChange = () => { },
  autocomplete = false,
  disable = false,
}) => {
  return (
    <div className='relative z-0 mb-6 w-full group'>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`pl-2 block pb-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${disable ? 'bg-gray-200' : ''}`}
        placeholder=' '
        required
        autoComplete={autocomplete.toString()}
        disabled={disable}
      />
      <label
        htmlFor={name}
        className='absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
      >
        {label}
      </label>
    </div>
  );
};

InputV2.defaultProps = {
  autocomplete: false,
  disable: false,
};

InputV2.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onChange: PropTypes.func.isRequired,
  autocomplete: PropTypes.bool,
  disable: PropTypes.bool,
};

export default InputV2;
