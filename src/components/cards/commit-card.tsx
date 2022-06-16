const CardCommit = () => {
  const tableNav = ['Message', 'User', 'Date', 'time'];
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {tableNav.map((nav) => (
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              {nav}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="bg-white  ">
        <tr className="">
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex items-center">
              <div className="text-sm font-medium leading-5 text-gray-900">John Doe</div>
            </div>
          </td>

          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="text-sm leading-5 text-gray-500">john@example.com</div>
          </td>

          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
              Active
            </span>
          </td>

          <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
            14:20
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CardCommit;
