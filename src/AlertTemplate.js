import React from 'react'
import { InfoIcon, SuccessIcon, ErrorIcon, CloseIcon } from './icons'

const defaultAlertStyle = {
  backgroundColor: '#151515',
  color: 'white',
  padding: '10px',
  textTransform: 'uppercase',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
  fontFamily: 'Arial',
  width: '300px',
  boxSizing: 'border-box'
}

const defaultButtonStyle = {
  marginLeft: '20px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '#FFFFFF'
}

const AlertTemplate = ({ 
  message, 
  options, 
  style, 
  alertStyle = defaultAlertStyle,
  buttonStyle = defaultButtonStyle,
  iconColors = {},
  close
}) => {
  return (
    <div style={{ ...alertStyle, ...style }}>
      {options.type === 'info' && <InfoIcon color={iconColors.info} />}
      {options.type === 'success' && <SuccessIcon color={iconColors.success} />}
      {options.type === 'error' && <ErrorIcon color={iconColors.error} />}
      <span style={{ flex: 2 }}>{message}</span>
      <button onClick={close} style={buttonStyle}>
        <CloseIcon color={iconColors.close} />
      </button>
    </div>
  )
}

export default AlertTemplate