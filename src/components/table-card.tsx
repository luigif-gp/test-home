const TableCard = () => {
  return (
    <div className="w-full p-3">
      {/* <!--Table Card--> */}
      <div className="bg-box border border-box rounded shadow">
        <div className="border-b border-gray-800 p-3">
          <h5 className="font-bold uppercase text-gray-600">Table</h5>
        </div>
        <div className="p-5">
          <table className="w-full p-5 text-gray-100">
            <thead>
              <tr>
                <th className="text-left text-gray-600">Name</th>
                <th className="text-left text-gray-600">Side</th>
                <th className="text-left text-gray-600">Role</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Obi Wan Kenobi</td>
                <td>Light</td>
                <td>Jedi</td>
              </tr>
              <tr>
                <td>Greedo</td>
                <td>South</td>
                <td>Scumbag</td>
              </tr>
              <tr>
                <td>Darth Vader</td>
                <td>Dark</td>
                <td>Sith</td>
              </tr>
            </tbody>
          </table>

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
