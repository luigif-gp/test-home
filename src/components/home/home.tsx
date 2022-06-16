import React, { useEffect } from 'react';
import GraphCard from '../cards/graph-card';
import MetricCard from '../cards/metric-card';
import TableCard from '../cards/table-card';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import { fetchGithub } from './homeSlice';

const Home = () => {
  const github = useAppSelector((state) => state.github);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGithub());
  }, []);

  return (
    <div className="container w-full mx-auto pt-20">
      <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-white leading-normal">
        {/* <!--Console Content--> */}
        <div className="flex flex-wrap">
          <MetricCard title={'Total Revenue'} content={'$3249'} />
          <MetricCard title={'Total Revenue'} content={'$3249'} />
          <MetricCard title={'Total Revenue'} content={'$3249'} />
        </div>
        {/* <!--Divider--> */}
        <hr className="border-b-2 border-gray-600 my-8 mx-4" />

        <div className="flex flex-row flex-wrap flex-grow mt-2">
          {/* <GraphCard>
            <ChartLines />
          </GraphCard>
          <GraphCard>
            <CircularChart />
          </GraphCard> */}
          {/* <GraphCard>
            <ChartCommits />
          </GraphCard> */}

          <TableCard />
        </div>
      </div>
    </div>
  );
};
export default Home;
