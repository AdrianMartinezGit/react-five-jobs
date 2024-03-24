import React, { useEffect } from 'react'
import HomeJobComponent from './HomeJobComponent'

import ValveImage from '../Assets/Valve_Lobby_2016.jpg'
import NvidiaImage from '../Assets/Nvidia_Building_2023.jpg'
import AMDImage from '../Assets/AMD_Building_2020.jpg'
import DiscordImage from '../Assets/Discord_Office_2015.jpg'
import KhronosImage from '../Assets/Khronos_Cover_2020.jpg'

const HomePageComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='Bg-Pattern'></div>
      <div className='flex min-h-screen flex-col p-0 sm:p-24'>
        <h1 className='text-3xl text-center mt-32 sm:mt-10 px-5 font-extrabold text-white text-shadow-sm'>These are the jobs that I would like to work at one day!</h1>
        <div className='container flex justify-center min-w-full'>
          <div className='w-auto'>
            <HomeJobComponent navigate={'/NVIDIA'} title='NVIDIA' image={NvidiaImage} description='Nvidia Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California, and incorporated in Delaware. It is a software and fabless company which designs and supplies graphics processing units (GPUs), application programming interfaces (APIs) for data science and high-performance computing as well as system on a chip units (SoCs) for the mobile computing and automotive market. Nvidia is also a dominant supplier of artificial intelligence (AI) hardware and software.' side='left' index={1} />
            <HomeJobComponent navigate={'/Valve'} title='Valve' image={ValveImage} description='Valve Corporation, also known as Valve Software, is an American video game developer, publisher, and digital distribution company headquartered in Bellevue, Washington. It is the developer of the software distribution platform Steam and the game franchises Half-Life, Counter-Strike, Portal, Day of Defeat, Team Fortress, Left 4 Dead, and Dota. They entered the hardware market in 2015 with the Steam Machine, a line of gaming computers, and also released the HTC Vive and Valve Index VR headsets. In 2022, Valve released the Steam Deck, a portable gaming system.' side='right' index={2} />
            <HomeJobComponent navigate={'/Discord'} title='Discord' image={DiscordImage} description='Discord is an instant messaging and VoIP social platform which allows communication through voice calls, video calls, text messaging, and media and files. Communication can be private or take place in virtual communities called "servers". A server is a collection of persistent chat rooms and voice channels which can be accessed via invite links. Discord runs on Windows, macOS, Android, iOS, iPadOS, Linux, and in web browsers. It is primarily used by gamers, although the share of users interested in other topics is growing.' side='left' index={3} />
            <HomeJobComponent navigate={'/AMD'} title='AMD' image={AMDImage} description='Advanced Micro Devices, Inc. (AMD) is an American multinational corporation and semiconductor company based in Santa Clara, California, that develops computer processors and related technologies for business and consumer markets. Their main products include microprocessors, motherboard chipsets, embedded processors, graphics processors, and FPGAs for servers, workstations, personal computers, and embedded system applications. Their processors are used in a wide range of computing devices, including personal computers, servers, laptops, and gaming consoles.' side='right' index={4} />
            <HomeJobComponent navigate={'/Vulkan'} title='Khronos' image={KhronosImage} description='The Khronos Group, Inc. is an open, non-profit, member-driven consortium of 170 organizations developing, publishing and maintaining royalty-free interoperability standards for 3D graphics, virtual reality, augmented reality, parallel computation, vision acceleration and machine learning. The open standards and associated conformance tests enable software applications and middleware to effectively harness authoring and accelerated playback of dynamic media across a wide variety of platforms and devices. The group is based in Beaverton, Oregon.' side='left' index={5} />
          </div>
        </div>
      </div>
    </>

  )
}

export default HomePageComponent
