const SearchBar = () => {
  return (
    <div className='search-bar fixed flex flex-col-reverse xl:flex-row justify-between items-end xl:items-center w-[calc(100%-48px)]  md:w-[calc(100%-160px)] lg:w-[calc(100%-192px)] bg-white'>

      <div className='flex items-center gap-5 py-3'>
        <label
          htmlFor='country'
          className='block lg:flex items-center text-sm font-medium text-gray-900 dark:text-gray-400'
        >
          Country:
          <select id='country' className='ml-1 mt-2 lg:mt-0 w-32 sm:w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <option>USA</option>
            <option>Colombia</option>
            <option>Peru</option>
            <option>Ecuador</option>
          </select>
        </label>

        <label
          htmlFor='filter'
          className='block lg:flex items-center text-sm font-medium text-gray-900 dark:text-gray-400'
        >
          Career:
          <select id='filter' className='ml-1 mt-2 lg:mt-0 w-32 sm:w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <option>Engineering</option>
            <option>Nurse</option>
            <option>Lawer</option>
            <option>Doctor</option>
          </select>
        </label>

        <label
          htmlFor='order'
          className='hidden sm:block lg:flex items-center text-sm font-medium text-gray-900 dark:text-gray-400 whitespace-nowrap'
        >
          Order by:
          <select id='order' className='ml-1 mt-2 lg:mt-0 w-32 sm:w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <option>Distance</option>
            <option>Country</option>
            <option>Global Rank</option>
            <option>National Rank</option>
          </select>
        </label>
      </div>

      <div className='flex items-center'>
        <div className='relative'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
            </svg>
          </div>
          <input
            type='text'
            id='table-search'
            className='w-56 sm:w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='University name'
          />
        </div>
        <button
          className='my-2 px-2 sm:px-8 py-2.5 ml-2  bg-neutral-2 hover:bg-neutral-1 text-white font-medium whitespace-nowrap rounded-lg'
          type='button'
        >
          Search
        </button>
      </div>

    </div>
  );
};

export default SearchBar;
