import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ThemeSwitcher } from './ThemeSwitcher'

const LpHeader = () => {
    return (
        <header className='flex items-center justify-between gap-4 p-8 md:px-16 bg-gray-100 w-screen'>
            <h2 className='text-xl md:text-2xl'>Scarlet7.net</h2>
            <ThemeSwitcher />
        </header>
    )
}

export default LpHeader
