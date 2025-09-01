import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GavelIcon from '@mui/icons-material/Gavel';

export const AddUsers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        role: '',
        status: 'active'
    });

    return (
        <div className="flex items-center justify-center p-4">
            <form className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Add New User
                    </h1>
                    <p className="text-gray-400 text-sm mt-0 capitalize">Fill This Form to add new User</p>
                </div>

                <div className="space-y-4">
                    {/* حقل الاسم */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-2 flex items-center text-gray-700 pr-3 pointer-events-none">
                                <PersonIcon style={{ fontSize: '18px' }} />
                            </div>
                            <input
                                type="text"
                                id="name"
                                autoComplete="off"
                                name="name"
                                placeholder="e. Ahmed"
                                className="w-full border-2 outline-0 border-gray-300 focus:border-blue-500 py-2 px-4 pl-8 text-sm rounded-lg"
                                required
                            />
                        </div>
                    </div>

                    {/* حقل البريد الإلكتروني */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-2 flex items-center text-gray-700 pr-3 pointer-events-none">
                                <EmailIcon style={{ fontSize: '18px' }} />
                            </div>
                            <input
                                type="email"
                                autoComplete="off"
                                id="email"
                                name="email"
                                placeholder="example@company.com"
                                className="w-full border-2 outline-0 border-gray-300 focus:border-blue-500 py-2 px-4 pl-8 text-sm rounded-lg"
                                required
                            />
                        </div>
                    </div>

                    {/* حقل الهاتف */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-2 flex items-center text-gray-700 pr-3 pointer-events-none">
                                <Phone style={{ fontSize: '18px' }} />
                            </div>
                            <input
                                autoComplete="off"
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="05XXXXXXXX"
                                className="w-full border-2 outline-0 border-gray-300 focus:border-blue-500 py-2 px-4 pl-8 text-sm rounded-lg"
                                required
                            />
                        </div>
                    </div>

                    {/* حقل القسم */}
                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <div className="relative">
                            <select
                                id="department"
                                name="department"
                                className="w-full border-2 outline-0 border-gray-300 focus:border-blue-500 py-2 px-4 pr-10 text-sm rounded-lg appearance-none"
                                required
                            >
                                <option value="" disabled selected>
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
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}