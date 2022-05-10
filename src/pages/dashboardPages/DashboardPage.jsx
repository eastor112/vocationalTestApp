import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import GeneralStats from '../../components/organisms/generalStats/GeneralStats';
import LineGraph from '../../components/organisms/lineGraph/LineGraph';
import LatePayments from '../../components/organisms/latePayments/LatePayments';
import PopularTop from '../../components/organisms/popularTop/PopularTop';
import { getBalanceLastThirtyDays } from '../../services/adminServices';

const DashboardPage = () => {
  const width = useOutletContext();

  const [dataGraph, setDataGraph] = useState({});

  useEffect(() => {
    let isCancelled = false;

    getBalanceLastThirtyDays()
      .then((resp) => {
        if (!isCancelled) {
          setDataGraph(resp);
        }
      });
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <main className={`min-h-screen ${width === 64 ? 'pt-4 pr-10 pl-72 bg-light-1' : ' pt-4 pr-10 pl-24 bg-light-1'}`}>

      <h2
        className='text-2xl font-bold text-dark-1 my-4'
      >
        Dashboard
      </h2>

      <GeneralStats />

      <div className='flex flex-col md:flex-row gap-10 pb-8'>

        <div className='left flex flex-col md:w-9/12'>

          <LineGraph dataGraph={dataGraph} />

          <LatePayments />

        </div>

        <div className='right flex flex-col md:w-3/12'>

          <PopularTop />

        </div>

      </div>

    </main>
  );
};

export default DashboardPage;
