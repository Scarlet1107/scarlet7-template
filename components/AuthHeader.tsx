import React, { Children } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Button } from './ui/button'
import Link from 'next/link'

const AuthHeader = () => {
    return (
        <header className='flex items-center justify-between gap-4 p-8 md:px-16 bg-gray-100 w-screen'>
            <h2 className='text-xl md:text-2xl'>Scarlet7.net</h2>
            <div className="space-x-8">
                <Link href="/auth/login" className='px-3 py-2 rounded-md font-medium relative items-center text-stone-700 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:transition-all before:duration-300 before:ease-in-out before:w-0 before:bg-gray-500 hover:before:w-full hover:text-gray-600'>ログイン</Link>
                <Link href="/auth/sign-up" className='px-3 py-2 rounded-md font-medium relative items-center text-stone-700 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:transition-all before:duration-300 before:ease-in-out before:w-0 before:bg-gray-500 hover:before:w-full hover:text-gray-600'>登録</Link>
                <ThemeSwitcher />
            </div>
        </header>
    )
}

export default AuthHeader
