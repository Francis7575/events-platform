import React, { useState } from 'react'
import { Modal, Typography, TextField, Stack, Button } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '500px',
  bgcolor: 'background.paper',
  height: '240px',
  border: 'none',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: '20px',
};

type Props = {
  isPasswordReset: boolean;
  setIsPasswordReset: (isPasswordReset: boolean) => void;
}

enum PasswordResetStatus {
  BeforeSending,
  Successful,
  Failed
}

export default function PasswordResetModal(props: Props) {

  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState(PasswordResetStatus.BeforeSending);

  let component;
  if (status === PasswordResetStatus.BeforeSending) {
    component = (
      <form style={{ width: '100%' }}>
        <Stack rowGap={'20px'}>
          <Typography variant='h6' align='center' id="modal-modal-title">
            Reset Password
          </Typography>
          <TextField type='email' label='Email' onChange={(event) => setEmail(event.target.value)} required fullWidth />
          <Button
            id="modal-modal-description"
            type='submit'
            variant='contained'
            sx={{ width: '150px', marginInline: 'auto', backgroundColor: 'hsl(230, 62%, 20%)' }}
          >
            Send Email
          </Button>
        </Stack>
      </form>
    )
  } else if (status === PasswordResetStatus.Successful) {
    component =
      <Typography align='center'>
        Password reset email sent successfully.<br />
        Please check your inbox.
      </Typography>
  } else {
    component =
      <Typography align='center'>
        Failed to send email.<br />
        Please check your email address and try again.
      </Typography>
  }

  return (
    <Modal
      open={props.isPasswordReset}
      onClose={() => {
        props.setIsPasswordReset(false);
        setStatus(PasswordResetStatus.BeforeSending);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    > 
      <Stack sx={style}>
        {component}
      </Stack>
    </Modal>
  )
}
