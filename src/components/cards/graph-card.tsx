import React, { FC } from 'react';

interface GraphCardProps {
  children: React.ReactNode;
}

const GraphCard: FC<GraphCardProps> = ({ children }) => {
  return (
    <div className="w-full md:w-1/2 p-3">
      <div className="bg-box border border-box rounded shadow">
        <div className="border-b border-gray-800 p-3">
          <h5 className="font-bold uppercase text-gray-600">Graph</h5>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};
export default GraphCard;
