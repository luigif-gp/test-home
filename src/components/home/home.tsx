import React, { useEffect, useState } from 'react';
import MetricCard from '../cards/metric';
import TableCard from '../cards/table';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { fetchUserRepos } from '../../store/features/userReposSlice';
import { SearchInput } from '../search-input';
import { OptionsInput } from '../option-input';
import { fetchCommit } from '../../store/features/commitSlice';
import { UserRepos } from '../../store/features/interfaces';

const Home = () => {
  const [name, setName] = useState<string>('luigifgp');
  const [repos, setRepos] = useState<string[]>(['test-home', 'test-serve']);
  const { commits, userData } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserRepos({ name }));
    dispatch(fetchCommit({ name, repos }));
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
          <div>
            <form className="grid grid-cols-3">
              <OptionsInput userRepos={userData.userRepos} />
              {/* <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Github user"
            aria-label="name"
          /> */}

              <SearchInput />
              <OptionsInput userRepos={userData.userRepos} />
              <input type="submit" value="Submit"></input>
            </form>
          </div>
          <TableCard {...commits.commit} />
        </div>
      </div>
    </div>
  );
};
export default Home;
