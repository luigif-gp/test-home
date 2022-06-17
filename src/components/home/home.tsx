import React, { useEffect, useState } from 'react';
import MetricCard from '../cards/metric';
import TableCard from '../cards/table';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { fetchUserRepos } from '../../store/features/userReposSlice';
import { SearchInput } from '../search-input';
import { OptionsInput } from '../option-input';
import { fetchCommit, RepoSelector } from '../../store/features/commitSlice';
import { CheckBoxInput } from '../checkbox-input';

const defaultSelectors = {
  first: 'test-home',
  second: 'test-serve',
  name: 'luigifgp',
  mode: true,
};

const Home = () => {
  const [selector, setSelector] = useState<RepoSelector>(defaultSelectors);
  const { commits, userData } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatchFetch();
  }, []);

  const HandleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatchFetch();
  };

  const dispatchFetch = () => {
    console.log(selector.mode);
    dispatch(fetchUserRepos(selector.name));
    dispatch(fetchCommit(selector));
  };

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
          <div>
            <form className="grid grid-cols-5 items-center" onSubmit={HandleSubmit}>
              <CheckBoxInput
                value={selector.mode}
                onChange={(e) => setSelector((selector) => ({ ...selector, ...{ mode: e } }))}
              />
              <OptionsInput
                value={selector.first}
                onChange={(e) => setSelector((selector) => ({ ...selector, ...{ first: e } }))}
                userRepos={userData.userRepos}
              />
              <SearchInput
                value={selector.name}
                onChange={(e) => setSelector((selector) => ({ ...selector, ...{ name: e } }))}
              />
              <OptionsInput
                value={selector.second}
                onChange={(e) => setSelector((selector) => ({ ...selector, ...{ second: e } }))}
                userRepos={userData.userRepos}
              />
              <button
                type="submit"
                className="grid text-sm font-medium p-4 px-10 rounded-lg
                 transition-all duration-1000 focus:scale-95 focus:opacity-50
                 justify-self-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
              >
                Search data
              </button>
            </form>
          </div>
          <TableCard {...commits.commit} name={selector} />
        </div>
      </div>
    </div>
  );
};
export default Home;
