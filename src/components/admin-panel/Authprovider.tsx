'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from "next-auth/react"

interface PropsType{
    children: ReactNode
}

export default function Authprovider({children}:PropsType) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}
