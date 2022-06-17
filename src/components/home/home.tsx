import React, { FC } from 'react';
import MetricCard from '../cards/metric';
import TableCard from '../cards/table';
import { useAppSelector } from '../../store/hook';
import { Form } from '../form-selector/form';

const Home: React.FC = () => {
  const { commit, loading, error } = useAppSelector((state) => state.commits);
  const selected = useAppSelector((state) => state.selectedData.selectedData);
  return (
    <div className="container mx-auto ">
      <div className=" px-0 lg:px-4 md:px-0 mt-0 lg:mt-20 lg:mb-16 text-white leading-normal">
        <Form />
        <div className="flex flex-row flex-wrap flex-grow -mt-10 lg:mt-2">
          <TableCard {...commit} loading={loading} selected={selected} error={error} />
        </div>
      </div>
    </div>
  );
};
export default Home;
