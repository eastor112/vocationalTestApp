import InputFile from '../../atoms/input/InputFile';
import InputV2 from '../../atoms/input/InputV2';

const CareerMainEditForm = () => {
  return (
    <div className='mt-6 '>
      <form action=''>

        <InputV2
          type='test'
          name='name'
          label='Name'
        />

        <div aria-label='career-description' className='relative top-1'>
          <label
            htmlFor='description'
            className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
          >
            Description
          </label>
          <textarea
            id='description'
            rows='3'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            placeholder='This career is about...'
            name='description'
          />
        </div>

        <div className='mt-8 mb-10'>
          <div aria-label='career-file' className='flex h-10 gap-2 relative'>
            <label
              htmlFor='career-file'
              className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
            >
              Career image
            </label>

            <InputFile
              name='career-file'
            />
          </div>
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default CareerMainEditForm;
