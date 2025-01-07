import '@/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
    title: 'WF Tracker',
    description: "Manage daily and weekly activities",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <body className="bg-gray-50 text-gray-800 font-sans">
                {/* Shared Navigation */}
                <header className="bg-gray-800 text-white">
                    <nav aria-label="Main Navigation" className="container mx-auto p-4">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold">Task Tracker</h1>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="/" className="hover:underline">Home</a>
                                </li>
                                <li>
                                    <a href="/tasks/daily" className="hover:underline">Daily Tasks</a>
                                </li>
                                <li>
                                    <a href="/tasks/weekly" className="hover:underline">Weekly Tasks</a>
                                </li>
                                <li>
                                    <a href="/tasks/settings" className="hover:underline">Settings</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                {/* Main Content */}
                <main className="container mx-auto min-h-screen flex flex-col justify-center">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-gray-800 text-white text-center p-4">
                    <p>&copy; 2025 Task Tracker. All Rights Reserved.</p>
                </footer>
            </body>
        </html>
    );
}
