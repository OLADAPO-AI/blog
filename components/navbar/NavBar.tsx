import Container from '../global/Container'

import Logo from './Logo'
import Blog from './Blog'
import About from './About'
import Newsletter from './Newsletter'
import DarkMode from './DarkMode'
import UserIcon from './UserIcon'
import SignOut from './SignOut'

import React from 'react'
import Projects from './Projects'

function NavBar() {
  return (
    <nav className="  ">
      <Container className=" flex flex-row justify-between align-middle p-4 border-b-2 py-10 ">
        <div className="  w-1/3 justify-center flex flex-col ">
          <h2 className="text-[30px] text-left">Oladapo Falusi</h2>
        </div>
        <div className="flex flex-row justify-between gap-9 align-middle">
          <div className=" md:flex gap-6 items-center z-50 hidden">
            <Blog />
            <Projects />
            <About />
            <Newsletter />
          </div>
          <div className=" flex flex-row align-middle justify-center mt-1">
            <DarkMode />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar
