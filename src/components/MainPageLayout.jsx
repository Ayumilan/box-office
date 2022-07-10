/* eslint-disable */
import React from 'react'
import Navs from './Navs'
import Tiltle from './Tiltle'

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Tiltle title="BOX OFFICE" subtitle="Are you looking for a movie or an actor" />
      <Navs />

      {children}
    </div>
  )
}

export default MainPageLayout