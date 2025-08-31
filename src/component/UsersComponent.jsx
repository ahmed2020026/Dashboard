import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
export const UsersComponent = ({ users }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px]">
                <thead>
                    <tr>
                        <th className="border-b border-gray-200 px-4 py-2">User</th>
                        <th className="border-b border-gray-200 px-4 py-2">Phone</th>
                        <th className="border-b border-gray-200 px-4 py-2">Role</th>
                        <th className="border-b border-gray-200 px-4 py-2">View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users[0]?.users.map((user, index) => index<5 &&(
                            <tr className="border-b border-gray-200" key={index}>
                                <td className="px-4 py-2 flex items-start gap-3">
                                    <div className="overflow-hidden rounded-full shrink-0">
                                        <img src={user.image} width={'40px'} alt="img" />
                                    </div>
                                    <div className="">
                                        <h1 className="font-medium -mb-1">{user.name}</h1>
                                        <p className="text-xs text-gray-600">{user.email}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-center">{user.phone}</td>
                                <td className="px-4 py-2 text-center">
                                    <select className="border border-gray-300 outline-0 rounded-md p-1 px-2 cursor-pointer" defaultValue={user.role}>
                                        <option value="admin">admin</option>
                                        <option value="customer">customer</option>
                                        <option value="seller">seller</option>
                                    </select>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <span className='text-gray-600 cursor-pointer bg-gray-100 inline-flex rounded-md p-1'><RemoveRedEyeOutlinedIcon style={{fontSize: '18px'}}/></span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}