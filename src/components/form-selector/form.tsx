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
    dispatch(fetchUserRepos(selector.name));
    dispatch(fetchCommit(selector));
    dispatch(fetchSelectedData(selector));
  };
  return (
    <div className="p-10 grid justify-items-stretch lg:grid-cols-18 gap-10 items-center">
      <form
        className="items-center justify-items-stretch   lg:grid-flow-col-dense grid lg:grid-cols-18 lg:gap-10"
        onSubmit={HandleSubmit}
      >
        <SearchInput
          selector={selector}
          selectedName={selected.name}
          value={selector.name}
          onChange={(e) => setSelector((selector) => ({ ...selector, ...{ name: e } }))}
        />
        <OptionsInput
          value={selector.first}
          onChange={(e) => setSelector((selector) => ({ ...selector, ...{ first: e } }))}
          userRepos={userRepos}
          disabled={true}
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
          disabled={selector.name !== selected.name}
          className="grid items-center justify-center text-sm mb-10 lg:mb-0 font-medium p-4 lg:px-10 rounded-lg
                 active:scale-95 active:opacity-50 disabled:opacity-50
                 justify-self-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                 border-b-4 border-blue-500 hover:border-pink-500  "
        >
          Search
        </button>
      </form>
    </div>
  );
};
