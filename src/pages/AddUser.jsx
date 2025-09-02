import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GavelIcon from '@mui/icons-material/Gavel';
import { useDispatch, useSelector } from "react-redux";
import { callUser } from "../redux/callApi";
import { useParams } from "react-router-dom";
import { FieldInput } from "../component/FieldInput";
import { InputFile } from "../component/InputFile";

export const AddUsers = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState(null)

    const User = useSelector(state => state.users.users)
    const Dispatch = useDispatch();
    useEffect(() => {
        if (!User || User.length == 0) Dispatch(callUser())
    }, [Dispatch, User])

    const { id } = useParams()
    useEffect(() => {
        if (id) {
            setName(User[0]?.users[id].name)
            setEmail(User[0]?.users[id].email)
            setPhone(User[0]?.users[id].phone)
            setRole(User[0]?.users[id].role)
            setImage(User[0]?.users[id].image || '')
        } else {
            setName('')
            setEmail('')
            setPhone('')
            setRole('')
            setImage('')
        }
    }, [id, User]);

    return (
        <div className="flex items-center justify-center p-4">
            <form className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        {id ? 'Update User' : 'Add New User'}
                    </h1>
                    <p className="text-gray-400 text-sm mt-0 capitalize">{id ? 'Fill This Form to Edit User' : 'Fill This Form to add new User'}</p>
                </div>
                <div className="space-y-4">
                    <InputFile
                        image={image}
                        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                    />
                    {/* حقل الاسم */}
                    <FieldInput
                        icon={<PersonIcon style={{ fontSize: '18px' }} />}
                        label='name' value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='eg.Ahmed'
                    />

                    {/* حقل البريد الإلكتروني */}
                    <FieldInput
                        icon={<EmailIcon style={{ fontSize: '18px' }} />}
                        label='email' value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='eg.example@gmail.com'
                    />

                    {/* حقل الهاتف */}
                    <FieldInput
                        icon={<Phone style={{ fontSize: '18px' }} />}
                        label='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='eg.0125xxxx'
                    />


                    {/* حقل القسم */}
                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <div className="relative">
                            <select
                                id="department"
                                name="role"
                                className="w-full border-2 outline-0 border-gray-300 focus:border-blue-500 py-2 px-4 pr-10 text-sm rounded-lg appearance-none"
                                required
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="" disabled>
                                    Select role
                                </option>
                                <option value="admin">Admin</option>
                                <option value="customer">Customer</option>
                                <option value="seller">Seller</option>
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
                                <KeyboardArrowDownIcon style={{ fontSize: '18px' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* أزرار الإرسال والإلغاء */}
                <div className="flex justify-start gap-3 mt-8">
                    <button
                        type="button"
                        className="px-4 py-2 cursor-pointer bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
                    >
                        {id ? 'Update' : 'Add'}
                    </button>
                </div>
            </form>
        </div>
    );
}