'use client';

import React from 'react'
import { Sidebar } from 'flowbite-react';

const NavbarComponent = () => {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/Nvidia">
            Nvidia
          </Sidebar.Item>
          <Sidebar.Item href="/Valve">
            Valve
          </Sidebar.Item>
          <Sidebar.Item href="/AMD">
            AMD
          </Sidebar.Item>
          <Sidebar.Item href="/Discord">
            Discord
          </Sidebar.Item>
          <Sidebar.Item href="/Vulkan">
            Vulkan
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default NavbarComponent
