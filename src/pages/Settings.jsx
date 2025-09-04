import { useState } from "react"
import PersonIcon from '@mui/icons-material/Person';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { FieldInput } from "../component/FieldInput";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Settings = () => {
    const [name, setName] = useState('Ahmed Samir Mustafa')
    const [company, setCompany] = useState('G-Store')
    const [image, setImage] = useState(null)
    const [lang, setLang] = useState('')
    const [bgColor, setBgColor] = useState('#ffffff')
    const [hoverColor, setHoverColor] = useState('#0084d1')
    const [primaryColor, setPrimaryColor] = useState('#f3f4f6')
    const [txtColor, setTxtColor] = useState('#666666')
    const [timeZone, setTimeZone] = useState('')
    const [currency, setCurrency] = useState('')

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
            </div>
            <div className="bg-white p-4 rounded-md shadow mt-5 space-y-4">
                <h2 className="mb-3 font-medium text-lg">General</h2>
                <div className='space-y-4 md:grid md:grid-cols-2 gap-5'>
                    <FieldInput
                        label={'Manage Name'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="manage name"
                        icon={<PersonIcon />}
                    />
                    <FieldInput
                        label={'Company Name'}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="company name"
                        icon={<DriveFileRenameOutlineIcon />}
                    />
                </div>
                <div className="border-b border-gray-300 pb-5">
                    <div className="flex items-center gap-4">
                        {/* Preview Image */}
                        <div className="w-16 h-16  overflow-hidden">
                            <img
                                src={image || "/image.png"}
                                alt="user"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Upload Button */}
                        <label
                            htmlFor="image"
                            className="cursor-pointer px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
                        >
                            Upload Image
                        </label>

                        <input
                            id="image"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                                setImage(URL.createObjectURL(e.target.files[0]))
                            }
                        />
                    </div>
                </div>
                <div className="space-y-4 md:grid md:grid-cols-2 gap-5">
                    <div className="space-y-4">
                        <h2 className="mb-5 font-medium text-lg mt-3">Appearance</h2>
                        <div className="flex items-center gap-3">
                            <label htmlFor="theme" className="text-sm font-medium text-gray-800">Dark Mode</label>
                            <input
                                type="checkbox"
                                name="theme"
                                id="theme"
                                className="toggle-checkbox hidden"
                            />
                            <label
                                htmlFor="theme"
                                className="cursor-pointer w-8 h-4 duration-300 bg-gray-300 rounded-full relative flex items-center"
                            >
                                <span className="dot w-3 h-3 bg-white rounded-full shadow-md absolute left-[2px] transition-all duration-300"></span>
                            </label>
                        </div>

                        <div className="flex gap-4 items-center">
                            <label htmlFor="language" className="text-sm font-medium text-gray-800">Language</label>
                            <div className="relative flex-1">
                                <select
                                    id="language"
                                    name="language"
                                    className="w-full border-2 outline-0 border-gray-300 focus:border-blue-500 py-2 px-4 pr-10 text-sm rounded-lg appearance-none"
                                    required
                                    value={lang}
                                    onChange={(e) => setLang(e.target.value)}
                                >
                                    <option disabled value=''>
                                        Select language
                                    </option>
                                    <option value="admin">English</option>
                                    <option value="customer">Arabic</option>
                                    <option value="seller">French</option>
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
                                    <KeyboardArrowDownIcon style={{ fontSize: '18px' }} />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label htmlFor="primaryColor" className="text-sm font-medium text-gray-800">Primary Color</label>
                            <input type="color" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} name="primaryColor" id="primaryColor" className="rounded-full cursor-pointer bg-white" />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="Hover" className="text-sm font-medium text-gray-800">Hover Color</label>
                            <input type="color" value={hoverColor} onChange={(e) => setHoverColor(e.target.value)} name="Hover" id="Hover" className="rounded-full cursor-pointer bg-white" />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="backGround" className="text-sm font-medium text-gray-800">Background Color</label>
                            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} name="backGround" id="backGround" className="rounded-full cursor-pointer bg-white" />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="txtColor" className="text-sm font-medium text-gray-800">Text Color</label>
                            <input type="color" value={txtColor} onChange={(e) => setTxtColor(e.target.value)} name="txtColor" id="txtColor" className="rounded-full cursor-pointer bg-white" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="mb-3 font-medium text-lg mt-3">System</h2>
                        <div className="">
                            <label htmlFor="timeZone" className="block text-sm font-medium text-gray-800 mb-1">Time Zone</label>
                            <div className="relative">
                                <select
                                    id="timeZone"
                                    name="timeZone"
                                    className="w-full border-2 outline-0 border-gray-300 focus:border-blue-500 py-2 px-4 pr-10 text-sm rounded-lg appearance-none"
                                    required
                                    value={timeZone}
                                    onChange={(e) => setTimeZone(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Select time zone
                                    </option>
                                    <option value="UTC+2">UTC+2</option>
                                    <option value="UTC-2">UTC-2</option>
                                    <option value="UTC+0">UTC+0</option>
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
                                    <KeyboardArrowDownIcon style={{ fontSize: '18px' }} />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="currency" className="block text-sm font-medium text-gray-800 mb-1">Default Currency</label>
                            <div className="relative">
                                <select
                                    id="currency"
                                    name="currency"
                                    className="w-full border-2 outline-0 border-gray-300 focus:border-blue-500 py-2 px-4 pr-10 text-sm rounded-lg appearance-none"
                                    required
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Default Currency
                                    </option>
                                    <option value="EGY">EGY</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
                                    <KeyboardArrowDownIcon style={{ fontSize: '18px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}
