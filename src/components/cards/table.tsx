import React, { FC } from 'react';
import CommitCard from './commit';
import { CommitCards, RepoSelector } from '../../store/features/commitSlice';
import { Error } from '../utils/error';

interface TableCardProps extends CommitCards {
  selected: RepoSelector;
  loading: boolean;
  error: string;
}

const TableCard: FC<TableCardProps> = ({ firstCard, secondCard, selected, loading, error }) => {
  const { mode, first, second } = selected;
  return (
    <div className="w-full p-3">
      <div className="bg-secondary rounded-xl shadow-2xl  shadow-black ">
        <div className=" border-gray-800 p-3 grid grid-flow-col justify-items-center">
          <h5 className="font-bold  text-xl text-black">1:{first}</h5>
          {mode && <h5 className="font-bold text-xl text-black">2:{second}</h5>}
        </div>
        {error ? (
          <Error error={error} />
        ) : (
          <div
            className={`${
              mode ? 'lg:grid-cols-2' : 'grid-cols-1'
            } p-4 lg:grid-flow-col-dense grid-cols-1 grid gap-10 justify-items-stretch`}
          >
            <CommitCard data={firstCard} loading={loading} />
            {secondCard && <CommitCard data={secondCard} loading={loading} />}
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default TableCard;
