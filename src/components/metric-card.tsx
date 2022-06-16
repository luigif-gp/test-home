import { FC } from 'react';

interface MetricCardProps {
  title: string;
  content: string;
}

const MetricCard: FC<MetricCardProps> = ({ content, title }) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
      <div className="bg-box border border-box rounded shadow p-2">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className="rounded p-3 bg-pink-600">
              <i className="fas fa-users fa-2x fa-fw fa-inverse"></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h5 className="font-bold uppercase text-gray-100">{title} </h5>
            <h3 className="font-bold text-3xl text-gray-300">
              {content}{' '}
              <span className="text-pink-500">
                <i className="fas fa-exchange-alt"></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
