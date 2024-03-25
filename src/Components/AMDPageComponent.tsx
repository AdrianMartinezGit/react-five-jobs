import React, { useEffect } from 'react'
import JobDisplayComponent from './JobDisplayComponent'

import AMDImage from '../Assets/AMD_Building_2020.jpg'

import JobEntry from '../Data/JobEntries.json'

const AMDPageComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='Bg-Pattern'></div>
      <JobDisplayComponent image={AMDImage} entry={JobEntry} index={3} url='https://www.linkedin.com/jobs/view/software-development-engineer-2-at-amd-3860863829?refId=%2BdnniFfiGsw09hUx51zBMw%3D%3D&trackingId=7Arn8xMWMGyfgPav5n11gg%3D%3D&trk=public_jobs_topcard-title' />
    </div>
  )
}

export default AMDPageComponent
