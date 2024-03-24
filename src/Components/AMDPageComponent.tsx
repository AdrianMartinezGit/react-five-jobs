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
      <JobDisplayComponent image={AMDImage} entry={JobEntry} index={3} url='' />
    </div>
  )
}

export default AMDPageComponent
