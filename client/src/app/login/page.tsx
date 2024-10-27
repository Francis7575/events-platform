'use client'
import Image from 'next/image'
import { LoginForm } from '@/types/types'
import { Box, Typography, FormControl, TextField, Stack, Button } from "@mui/material"
import { ChangeEvent, useState } from 'react';
import PasswordInput from '@/components/common/password-input'
import PasswordResetModal from '@/components/login/password-reset-modal';
import Link from 'next/link';

const page = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
  });

  const [isPasswordReset, setIsPasswordReset] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Box className="px-[2.5rem] flex flex-col justify-center items-center md:bg-auth md:bg-cover md:bg-no-repeat
        bg-center min-h-screen">
      <Box className="md:bg-white md:py-12 md:px-16 rounded-lg max-w-[550px] w-full flex flex-col items-center">
        <Box className="flex items-center justify-center gap-4 mb-6">
          <Image width={80} height={80} src="/logo.png" alt="Eventify logo" />
          <Typography className="uppercase text-[1.2rem] text-blue">
            Cornerstone <br></br><span className="font-extrabold">Events</span>
          </Typography>
        </Box>
        <form className='w-full mt-3 max-w-[400px]'>
          <Stack spacing={2} sx={{width: '100%'}}>
            <FormControl required fullWidth>
              <TextField
                type='email'
                label='Email'
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl required fullWidth>
              <PasswordInput label='Password'
                setter={(name, value) => setFormData(prevState => ({
                  ...prevState,
                  [name]: value,
                }))} />
            </FormControl>
          </Stack>
          <Typography
            onClick={() => {
              setIsPasswordReset(true);
            }}
            sx={{
              textAlign: 'right',
              cursor: 'pointer',
              marginTop: '10px',
              color: 'hsl(216, 46%, 49%)',
              '&:hover': {
                opacity: '0.7'
              }
            }}
          >
            Forgot password?
          </Typography>
          <PasswordResetModal
            isPasswordReset={isPasswordReset}
            setIsPasswordReset={setIsPasswordReset}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{
              backgroundColor: 'hsl(230, 62%, 20%)',
              marginTop: '1rem',
              fontWeight: 'semibold',
              padding: '.5rem 0',
              '&:hover': {
                backgroundColor: 'hsla(230, 62%, 20%, 0.7)', // Adjust this to your desired hover color
              },
            }}
          >
            Login
          </Button>
          <Typography sx={{ textAlign: 'center', marginTop: '1rem' }}>or</Typography>
          <Box sx={{display: 'flex', marginTop: '1rem'}}>
            <Button type="button" sx={{flex: '1'}}>
              Sign Up Google
            </Button>
            <Link href="/signup" className='flex-1 hover:opacity-70 text-center font-semibold bg-darkBlue text-white py-2'>
              Sign Up
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default page