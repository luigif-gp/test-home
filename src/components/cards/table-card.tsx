import CardCommit from './commit-card';

const TableCard = () => {
  const tableNav = ['Name', 'Email', 'Status', 'Edit', 'delete'];
  return (
    <div className="w-full p-3">
      {/* <!--Table Card--> */}
      <div className="bg-box border border-box rounded shadow">
        <div className="border-b border-gray-800 p-3 grid grid-flow-col justify-items-center">
          <h5 className="font-bold uppercase text-gray-600">Client</h5>
          <h5 className="font-bold uppercase text-gray-600">Server</h5>
        </div>
        <div className="p-5">
          <div className="flex flex-col mt-8">
            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="grid grid-flow-col gap-10 min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                <CardCommit />
                <CardCommit />
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
