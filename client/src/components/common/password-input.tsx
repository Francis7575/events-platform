'use client'
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { TextField } from '@mui/material';

type Props = {
  label: string;
  setter: (name: string, value: string) => void; 
}

const iconStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#AAAAAA',
  position: 'absolute',
  inset: '50% 0 auto auto',
  transform: 'translate(-100%, -50%)',
  zIndex: 50,
  cursor: 'pointer'
}

export default function PasswordInput(props: Props) {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onClickIcon = () => {
    setIsVisible(!isVisible);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setter('password', event.target.value); // Call setter with 'password'
  }

  return (
    <>
      <TextField
        type={isVisible ? 'text' : 'password'}
        label={props.label}
        onChange={handleInputChange}
        required
      >
      </TextField>
      { isVisible
        ? <AiOutlineEyeInvisible onClick={onClickIcon} style={iconStyle} />
        : <AiOutlineEye onClick={onClickIcon} style={iconStyle} />
       }
    </>
  )
}
