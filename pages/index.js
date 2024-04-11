import { useState } from "react";
import { Octokit } from "octokit";

export default function Home() {
  const octokit = new Octokit({ 
    auth: process.env.NEXT_PUBLIC_REACT_APP_GITHUB_API_KEY !== false ? 
    process.env.NEXT_PUBLIC_REACT_APP_GITHUB_API_KEY
    : process.env.GITHUB_API_KEY
  });
  
  const fetchProjects = async () => {

    try {
      // 'REST API Endpoints for xyz' is what you want
      const response = await octokit.request('GET /users/{username}/repos', {
        username: 'MxSamArcher',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

      console.log(response)
      //fetch request for projects array. The fetch should retrieve all the public projects for my account
    } catch(error) {
      console.log(`Error: ${error}`)
    }
  }

  fetchProjects();

  return (
    <div className='flex flex-col justify-left w-full h-full min-h-screen text-gray-800 bg-sky-100'>
      <header className=' p-6 shadow-md'>
        Header
      </header>
      <div className='flex flex-grow'>
        <nav className=' flex-shrink-0 p-4 min-w-[10%]  shadow-inner'>
          Nav
        </nav>
        <main className='flex justify-center flex-grow p-4'>
          Main content
        </main>
      </div>
      <footer className='bg-sky-900 text-white p-4 shadow-md'>
        Footer
      </footer>
    </div>
  );
}
