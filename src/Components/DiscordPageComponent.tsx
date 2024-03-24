import React, { useEffect } from 'react'
import JobDisplayComponent from './JobDisplayComponent'

import DiscordImage from '../Assets/Discord_Office_2015.jpg'

import JobEntry from '../Data/JobEntries.json'

const DiscordPageComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='Bg-Pattern'></div>
      <JobDisplayComponent image={DiscordImage} entry={JobEntry} index={2} url='' />
    </div>
  )
}

export default DiscordPageComponent
