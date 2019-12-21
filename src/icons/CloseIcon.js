import React from 'react'
import BaseIcon from './BaseIcon'

const CloseIcon = ({ color = '#FFFFFF' }) => (
  <BaseIcon color={color} pushRight={false}>
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </BaseIcon>
)

export default CloseIcon
