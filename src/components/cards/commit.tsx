import { FC } from 'react';
import { Commit } from '../../store/features/interfaces';
import { Loading } from '../utils/loading';

interface CommitCardProps {
  data: Commit[];
  loading: boolean;
}

const CommitCard: FC<CommitCardProps> = ({ data, loading }) => {
  const tableNav = ['User', 'Message', 'Date', 'Time'];

  return (
    <div className="grid grid-cols-1">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left  text-secondary ">
          <thead className="text-xmd text-box duration-700 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center"></div>
              </th>

              {tableNav.map((nav) => (
                <th scope="col" className="px-6 py-3">
                  {nav}
                </th>
              ))}
            </tr>
          </thead>
          {!loading && data.map((d) => <TableBody {...d} />)}
        </table>
      </div>
      {loading && <Loading />}
    </div>
  );
};
export default CommitCard;

interface TableBodyProps extends Commit {}

const TableBody: FC<TableBodyProps> = ({ user, committer, message, date, url }) => {
  return (
    <tbody>
      <tr className="bg-gray-800 hover:bg-box hover:bg-opacity-90 overflow-hidden">
        <td className="w-4 p-4">
          <div className="flex items-center"></div>
        </td>
        <th scope="row" className="px-2 text-gray-400">
          {user}
        </th>
        <td className="px-3 py-4 max-w-xs overflow-hidden font-medium  transition-all">
          <a target="_blank" href={url}>
            {message}
          </a>
        </td>
        <td className="px-6 py-4 text-xs text-secondary whitespace-no-wrap opacity-40 hover:opacity-100 ">
          <a target="_blank" href={url}>
            <span className=" inline-flex lending-5 bg-gradient-to-r  from-green-400 to-blue-500 rounded-full  bg-opacity-40 p-1">
              {new Date(date).toDateString()}
            </span>
          </a>
        </td>
        <td className="px-6 py-4 max-w-xs text-xs">{new Date(date).toLocaleTimeString()}</td>
      </tr>
    </tbody>
  );
};
