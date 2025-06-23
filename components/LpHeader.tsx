import Link from 'next/link'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

const LpHeader = () => {
    return (
        <header className='flex items-center justify-between gap-4 p-8 md:px-16 bg-gray-100 w-screen'>
            <Link href={"/"} className='text-xl md:text-2xl'>Scarlet7.net</Link>
            <ThemeSwitcher />
        </header>
    )
}

export default LpHeader
