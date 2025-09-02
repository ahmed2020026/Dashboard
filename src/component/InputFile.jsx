import React from 'react'

export const InputFile = React.memo(({ onChange, image }) => {
    return (
        <div>
            <div className="space-y-4 border-2 rounded-full mx-auto relative border-dashed h-24 border-gray-300 w-24 flex items-center justify-center">
                <input
                    type="file"
                    className="block w-full h-full text-sm p-2 cursor-pointer absolute border opacity-0"
                    id='image'
                    name='image'
                    onChange={onChange}
                />
                <div className="text-center flex justify-center">
                    <img src={image || "/default.png"} alt="user" width={'80px'} className="rounded-full" />
                </div>
            </div>
        </div>
    )
})
