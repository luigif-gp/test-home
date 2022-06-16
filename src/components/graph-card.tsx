import React from 'react';

const GraphCard = () => {
  return (
    <div className="w-full md:w-1/2 p-3">
      <div className="bg-box border border-box rounded shadow">
        <div className="border-b border-gray-800 p-3">
          <h5 className="font-bold uppercase text-gray-600">Graph</h5>
        </div>
        <div className="p-5">
          <canvas id="chartjs-7" className="chartjs" width="undefined" height="undefined"></canvas>
        </div>
      </div>
    </div>
  );
};
export default GraphCard;
