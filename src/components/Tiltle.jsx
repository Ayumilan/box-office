/* eslint-disable */
import React from 'react'
import { TitleWrapper } from './Title.styled'

const Tiltle = ({title , subtitle}) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  )
}

export default Tiltle
