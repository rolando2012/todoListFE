const DetailTable = ({ data }) => {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
            <tbody>
            {data.map(({ label, value }) => (
                <tr
                    key={label}
                    >
                <th
                    scope="row"
                    className="w-1/3 px-5 py-4 text-left font-semibold text-indigo-700 bg-indigo-50"
                >
                    {label}
                </th>

                <td className="px-5 py-4 text-gray-700">
                    {value}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default DetailTable;