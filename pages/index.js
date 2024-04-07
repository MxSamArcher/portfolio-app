import { useState } from "react";

export default function Home() {
  
  const fetchProjects = async (url_id) => {
    try {
      //fetch request for projects array. The fetch should retrieve all the public projects for my account
    } catch(error) {
      console.log(`Error: ${error}`)
    }
  }

  return (
    <div className='flex flex-col justify-left w-full h-full min-h-screen text-gray-800 bg-sky-100'>
      <header className='bg-sky-900 text-white p-6 shadow-md'>
        Header
      </header>
      <div className="flex flex-grow">
        <nav className='bg-sky-900 flex-shrink-0 p-4 min-w-[10%] text-white shadow-inner'>
          Nav
        </nav>
        <main className='bg-sky-800 flex-grow p-4 text-white'>
          Main content
        </main>
      </div>
      <footer className='bg-sky-900 text-white p-4 shadow-md'>
        Footer
      </footer>
    </div>
  );
}
