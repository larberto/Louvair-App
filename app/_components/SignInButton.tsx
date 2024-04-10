'use client'

import { signIn } from 'next-auth/react'
import { useTransition } from 'react'
import { Button } from './Button'

export function SignInButton() {
  const [isPending, transition] = useTransition()

  const handleClick = () => {
    transition(async () => {
      try {
        await signIn()
      } catch {
        alert('Failed to sign in')
      }
    })
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isPending}
    >
      Sign in with Google
    </Button>
  )
}
