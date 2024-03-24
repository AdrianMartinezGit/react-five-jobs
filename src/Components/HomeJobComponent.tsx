import React from 'react'
import { IHomeJobProps } from '../Interfaces/Interface'
import { useNavigate } from 'react-router-dom'

const HomeJobComponent = (props: IHomeJobProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.navigate);
    }

    return (
        <>
            {
                props.side === 'left' ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4'>
                        <div className='p-10'>
                            <div>
                                <h1 className='text-4xl sm:text-6xl font-extrabold mb-5 text-white text-shadow-md'>{props.index}. {props.title}</h1>
                                <img src={props.image} alt='Home' className='object-cover h-48 sm:h-96 w-full' />
                                <div className='pt-3 sm:p-5 text-3xl font-semibold text-white text-shadow-sm'>What is {props.title}?</div>
                                <div className='pt-3 sm:p-5 text-base sm:text-md text-white text-shadow-tiny'>{props.description}</div>
                            </div>
                            <div className='mt-10'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Go to {props.title}</button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4'>
                        <div></div>
                        <div className='p-10'>
                            <div>
                                <h1 className='text-4xl sm:text-6xl font-extrabold mb-5 text-white text-shadow-md'>{props.index}. {props.title}</h1>
                                <img src={props.image} alt='Home' className='object-cover h-48 sm:h-96 w-full' />
                                <div className='pt-3 sm:p-5 text-3xl font-semibold text-white text-shadow-sm'>What is {props.title}?</div>
                                <div className='pt-3 sm:p-5 text-base sm:text-md text-white text-shadow-tiny'>{props.description}</div>
                            </div>
                            <div className='mt-10'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Go to {props.title}</button>
                            </div>
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default HomeJobComponent
