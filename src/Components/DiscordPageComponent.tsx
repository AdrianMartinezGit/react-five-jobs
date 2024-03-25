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
      <JobDisplayComponent image={DiscordImage} entry={JobEntry} index={2} url='https://www.linkedin.com/jobs/view/senior-software-engineer-apps-at-discord-3846665157?refId=8ADgdCbrCCkF8JQTeyOhGg%3D%3D&trackingId=ZpimbuTNXPkMcGP0jha8PA%3D%3D&position=17&pageNum=0&trk=public_jobs_jserp-result_search-card' />
    </div>
  )
}

export default DiscordPageComponent
