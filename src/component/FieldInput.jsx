import React from 'react'

export const FieldInput = React.memo(({ label, value , onChange, icon, placeholder }) => {
    return (
        <div>
            <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-2 flex items-center text-gray-700 pr-3 pointer-events-none">
                    {icon}
                </div>
                <input
                    value={value?? ''}
                    name={label}
                    id={label}
                    required
                    autoComplete='off'
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full border-2 outline-0 border-gray-300 focus:border-blue-500 py-2 px-4 pl-8 text-sm rounded-lg"
                />
            </div>
        </div>
    )
})