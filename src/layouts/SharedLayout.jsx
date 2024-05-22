import React from 'react'
import {NavScroll} from '../component/Navbar'
import { Outlet } from 'react-router-dom'
export function SharedLayout() {
  return (
    <>
        <NavScroll/>
        <Outlet/>
    </>
  )
}
