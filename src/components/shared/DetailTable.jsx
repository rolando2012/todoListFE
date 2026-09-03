const DetailTable = ({ data }) => {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
            <tbody>
            {data.map(({ label, value }) => (
                <tr key={label} >
                <th scope="row"
                    className="w-1/3 px-5 py-4 text-left font-semibold text-indigo-700 bg-indigo-50"
                >
                    {label}
                </th>
                {(!Array.isArray(value))?
                    <td className="px-5 py-4 text-gray-700">
                        {value}
                    </td>
                    : 
                    <td className="px-2 py-2 sm:px-5 sm:py-4 text-gray-700">
                        <div className="flex flex-wrap gap-1.5">
                            {value.map( tag => <span key={tag.id}
                                className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-200 text-xs font-medium"
                                >
                                    {tag.name}
                            </span>)}
                        </div>
                    </td>
                }
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default DetailTable;