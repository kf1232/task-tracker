import '@/styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
    title: 'WF Tracker',
    description: "Manage daily and weekly activites",
};

export default function RootLayout({children}: { children: ReactNode}) {
    return (
        <html lang='en'>
            <body>
                {/* Shared Navigation */}
                <header>
                    <nav>
                        <h1> Task Tracker </h1>
                        <ul>
                            <li>
                                <a href='/' className="hover:underline"> Home </a>
                            </li>
                            <li>
                                <a href='/tasks/daily' className='hover:underline'> Daily Tasks </a>
                            </li>
                            <li>
                                <a href='/tasks/weekly' className='hover:underline'> Weekly Tasks </a>
                            </li>
                            <li>
                                <a href='/tasks/settings' className='hover:underline'> Settings </a>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* Main Content */}
                <main className="container mx-auto p-4"> {children} </main>

                {/* Foot */}
                <footer>
                    <p> &copy; 2025 TT. ARR. </p>
                </footer>
            </body>
        </html>
    )
}