import React, { useEffect } from 'react'
import JobDisplayComponent from './JobDisplayComponent'

import KhronosImage from '../Assets/Khronos_Cover_2020.jpg'

import JobEntry from '../Data/JobEntries.json'

const VulkanPageComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='Bg-Pattern'></div>
      <JobDisplayComponent image={KhronosImage} entry={JobEntry} index={4} url='https://www.khronos.org/jobs/detail/khronos-jobs-computer-vision-ml-software-engineer-gpu-150921' />
    </div>
  )
}

export default VulkanPageComponent
