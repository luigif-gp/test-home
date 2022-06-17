import { FC } from 'react';
import { UserRepos } from '../store/features/interfaces';

interface OptionInputProps {
  userRepos: UserRepos[];
}

export const OptionsInput: FC<OptionInputProps> = ({ userRepos }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose a repository</label>
      <select
        id="default"
        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a repository</option>
        {userRepos.map((u) => (
          <option value={u.name}>{u.name} </option>
        ))}
      </select>
    </div>
  );
};
