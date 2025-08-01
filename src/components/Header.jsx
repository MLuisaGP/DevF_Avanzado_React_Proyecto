import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
    return (
        <header class="bg-white fixed top-0 right-0 left-0  dark:bg-gray-800">
            <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img src="https://guiadelempresario.com/wp-content/uploads/2021/03/beats--500x500.png" alt="" class="h-8 w-auto" />
                    </a>
                </div>
                <div class=" lg:flex lg:flex-1 lg:justify-end">
                    <ThemeSwitcher/>
                </div>
            </nav>
        </header>

  )
}
