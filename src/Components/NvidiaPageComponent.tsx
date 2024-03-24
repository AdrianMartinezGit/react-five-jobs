import React, { useEffect } from 'react'
import JobDisplayComponent from './JobDisplayComponent'

import NvidiaImage from '../Assets/Nvidia_Building_2023.jpg'

import JobEntry from '../Data/JobEntries.json'

const NvidiaPageComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='Bg-Pattern'></div>
      <JobDisplayComponent image={NvidiaImage} entry={JobEntry} index={0} url='https://www.linkedin.com/jobs/view/gpu-system-software-engineer-at-nvidia-3847978098/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic' />
    </div>
  )
}

export default NvidiaPageComponent
