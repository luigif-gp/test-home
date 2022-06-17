import { SearchInput } from './search-input';
import { OptionsInput } from './option-input';
import { CheckBoxInput } from './checkbox-input';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { fetchUserRepos } from '../../store/features/userReposSlice';
import { fetchCommit, RepoSelector } from '../../store/features/commitSlice';
import { useEffect, useState } from 'react';
import { fetchSelectedData } from '../../store/features/selectedSlice';

export const Form = () => {
  const selected = useAppSelector((state) => state.selectedData.selectedData);
  const { userRepos } = useAppSelector((state) => state.userData);
  const [selector, setSelector] = useState<RepoSelector>(selected);

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
    dispatch(fetchSelectedData(selector));
  };
  return (
    <div className="p-10 grid justify-items-stretch lg:grid-cols-18 gap-10 items-center">
      <form
        className="items-center justify-items-stretch  lg:grid-flow-col-dense grid lg:grid-cols-18 lg:gap-10"
        onSubmit={HandleSubmit}
      >
        <OptionsInput
          value={selector.first}
          onChange={(e) => setSelector((selector) => ({ ...selector, ...{ first: e } }))}
          userRepos={userRepos}
          disabled={true}
        />
        <SearchInput
          value={selector.name}
          onChange={(e) => setSelector((selector) => ({ ...selector, ...{ name: e } }))}
        />
        <OptionsInput
          value={selector.second}
          onChange={(e) => setSelector((selector) => ({ ...selector, ...{ second: e } }))}
          userRepos={userRepos}
          disabled={selector.mode}
        />
        )
        <CheckBoxInput
          value={selector.mode}
          onChange={(e) => setSelector((selector) => ({ ...selector, ...{ mode: e } }))}
        />
        <button
          type="submit"
          className="grid items-center justify-center text-sm mb-10 lg:mb-0 font-medium p-4 lg:px-10 rounded-lg
                 focus:scale-95 focus:opacity-50
                 justify-self-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
        >
          Search data
        </button>
      </form>
    </div>
  );
};
