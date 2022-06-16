import React, { useEffect, useState } from 'react';
import CommitCard from './commit';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import { fetchCommit } from '../../store/features/commitSlice';

const TableCard = () => {
  const tableNav = ['Name', 'Email', 'Status', 'Edit', 'delete'];
  const [name, setName] = useState('luigifgp');
  const commit = useAppSelector((state) => state.github.commit);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCommit(['/test-home', '/test-serve']));
  }, []);

  return (
    <div className="w-full p-3">
      <div>
        <form>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Github user"
            aria-label="name"
          />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <div className="bg-box border border-box rounded shadow">
        <div className=" border-gray-800 p-3 grid grid-flow-col justify-items-center">
          <h5 className="font-bold uppercase text-gray-100">Client</h5>
          <h5 className="font-bold uppercase text-gray-100">Server</h5>
        </div>
        <div className="p-5">
          <div className="flex flex-col">
            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="grid grid-flow-col gap-10 min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                <CommitCard />
                <CommitCard />
              </div>
            </div>
          </div>

          <p className="py-2">
            <a href="#" className="text-white">
              See More issues...
            </a>
          </p>
        </div>
      </div>
      {/* <!--/table Card--> */}
    </div>
  );
};

export default TableCard;
