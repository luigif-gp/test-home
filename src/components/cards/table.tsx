import React, { FC } from 'react';
import CommitCard from './commit';
import { CommitCards } from '../../store/features/commitSlice';

interface TableCardProps extends CommitCards {}

const TableCard: FC<TableCardProps> = ({ firstCard, secondCard }) => {
  return (
    <div className="w-full p-3">
      <div className="bg-secondary rounded-xl shadow-2xl ">
        <div className=" border-gray-800 p-3 grid grid-flow-col justify-items-center">
          <h5 className="font-bold  text-xl text-black">{'repos[0]'}</h5>
          <h5 className="font-bold text-xl text-black">{'repos[1]'}</h5>
        </div>
        <div className="p-4 grid-flow-col-dense grid grid-cols-2 gap-10 justify-items-stretch">
          <CommitCard data={firstCard} />
          <CommitCard data={secondCard} />
        </div>
        <div>
          <p className="py-2">
            <a href="#" className="text-white">
              See More issues...
            </a>
          </p>{' '}
        </div>
      </div>
      {/* <!--/table Card--> */}
    </div>
  );
};

export default TableCard;
