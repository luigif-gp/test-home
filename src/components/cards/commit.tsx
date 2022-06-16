const CommitCard = () => {
  const tableNav = ['User', 'Message', 'Date', 'Time'];
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {tableNav.map((nav) => (
            <th className="px-6 py-3 text-ms font-medium leading-4 text-left text-black border-b border-primary bg-primary">
              {nav}
            </th>
          ))}
        </tr>
      </thead>
      <TableBody />
    </table>
  );
};
export default CommitCard;

const TableBody = () => {
  return (
    <tbody className="bg-white  ">
      <tr className="">
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">
            <div className="text-sm font-normal leading-5 text-gray-400">John Doe</div>
          </div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm font-medium hover:text-gray-500 transition-all leading-5 text-gray-800">
            <a target="_blank" href="www.facebook.com">
              john@example.com
            </a>
          </div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <span className="inline-flex px-2 text-xs font-bold leading-5 text-black bg-primary rounded-full">
            Active
          </span>
        </td>

        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">14:20</td>
      </tr>
    </tbody>
  );
};
