import React from 'react'

export const InputFile = React.memo(({ onChange, image, h,w , r , x}) => {
    return (
        <div>
            <div className={`space-y-4 border-2 ${r ? `rounded-md`: 'rounded-full'} ${x? '':'mx-auto' }  p-1 relative border-dashed ${h ? `h-${h}px` : 'h-24'} ${w ? `h-${w}px` : 'w-24'} border-gray-300 flex items-center justify-center`}>
                <input
                    type="file"
                    className="block w-full h-full text-sm p-2 cursor-pointer absolute border opacity-0"
                    id='image'
                    name='image'
                    onChange={onChange}
                    aria-label='image-upload'
                />
                <div className={`text-center flex ${x ?'justify-start': 'justify-center'}`}>
                    <img src={image} alt="user" style={{maxWidth:`${w-10}px` || '80px'}} className={`${r?'rounded-md':'rounded-full'} shrink-0`} />
                </div>
            </div>
        </div>
    )
})
