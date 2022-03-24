import { useOutletContext } from 'react-router-dom';

const CareersListPage = () => {
  const width = useOutletContext();
  return (
    <main className={`${width === 64 ? 'pt-4 pr-10 pl-72 bg-light-1 h-screen' : ' pt-4 pr-10 pl-24 bg-light-1 h-screen'}`}>
      <h2 className='text-2xl font-bold text-dark-1 my-4'>
        CareersListPage
      </h2>
    </main>
  );
};

export default CareersListPage;
