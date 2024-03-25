import React from 'react'

import { IJobDisplayProps } from '../Interfaces/Interface'

const JobDisplayComponent = (props: IJobDisplayProps) => {

    const handleClick = () => {
        window.location.href = props.url;
    }

    return (
        <div className='p-5 sm:py-10 sm:px-72'>
            <img src={props.image} alt='Job Display' className='w-full h-[270px] sm:h-[720px] object-cover mt-16' />
            <div className='grid min-w-[640px]:grid-rows-2 sm:grid-cols-2 sm:gap-24 mt-8'>
                <div>
                    <h1 className='text-3xl font-semibold mb-5 text-white text-shadow-sm'>Why do I want to work here?</h1>
                    <p className='text-white text-shadow-tiny'>{props.entry[props.index].WorkReason}</p>
                    <h1 className='text-3xl font-semibold my-5 text-white text-shadow-sm'>What required stack?</h1>
                    <ul>
                        {props.entry[props.index].JobStackRequire.map(stack => (
                            <li className='text-white text-shadow-tiny'>- {stack}</li>
                        ))}
                    </ul>
                    <h1 className='text-3xl font-semibold my-5 text-white text-shadow-sm'>What goals would I like to achieve?</h1>
                    <h2 className='text-1xl font-light text-white text-shadow-tiny'>Goals I would like to achieve are:</h2>
                    <ul>
                        {props.entry[props.index].GoalsToAchieve.map(stack => (
                            <li className='text-white text-shadow-tiny'>- {stack}</li>
                        ))}
                    </ul>
                    <h1 className='text-3xl font-semibold my-5 text-white text-shadow-sm'>Do I have the current skill sets?</h1>
                    <p className='text-white text-shadow-tiny'>{props.entry[props.index].JobSkillset}</p>
                </div>
                <div>
                    <div>
                        <h1 className='text-3xl font-semibold my-5 sm:mb-5 sm:mx-0 sm:mt-0 text-white text-shadow-sm'>Job Description</h1>
                        <p className='text-white text-shadow-tiny'>{props.entry[props.index].JobDescription}</p>
                        <h1 className='text-3xl font-semibold my-5 text-white text-shadow-sm'>Job Requirements</h1>
                        <p className='text-white text-shadow-tiny'>What they need to see:</p>
                        <ul>
                        {props.entry[props.index].JobRequirement.map(stack => (
                            <li className='text-white text-shadow-tiny'>- {stack}</li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
            <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'>Link to Job Application</button>
        </div>
    )
}

export default JobDisplayComponent
