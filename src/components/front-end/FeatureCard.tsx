import React from 'react'

interface PropsType{
    icon: React.ReactNode
    title: string
    decs: string
}

const FeatureCard:React.FC<PropsType> =({icon, title, decs})=>{
    return (
        <div className='flex gap-2 bg-gray-100 px-4 py-6'>
            {icon}
            <div>
                <h2 className='font-medium text-xl'>{title}</h2>

                <p className='text-gray-600'>{decs}</p>
            </div>

        </div>
    )
}

export default FeatureCard