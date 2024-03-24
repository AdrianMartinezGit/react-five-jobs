import React, { useEffect } from 'react'
import JobDisplayComponent from './JobDisplayComponent'

import ValveImage from '../Assets/Valve_Lobby_2016.jpg'

import JobEntry from '../Data/JobEntries.json'

const ValvePageComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='Bg-Pattern'></div>
      <JobDisplayComponent image={ValveImage} entry={JobEntry} index={1} url='https://www.linkedin.com/jobs/view/software-engineer-for-hw-at-valve-corporation-3672991963?refId=RpNNOcAU6NHHAdqpqR2gnA%3D%3D&trackingId=iet44m%2FykWol1ydvwllkxQ%3D%3D&trk=public_jobs_topcard-title' />
    </div>
  )
}

export default ValvePageComponent
