import { useState } from "react";
import { Octokit } from "octokit";

export default function Home() {
const [repos, setRepos] = useState([])

  const octokit = new Octokit({ 
    auth: process.env.NEXT_PUBLIC_REACT_APP_GITHUB_API_KEY || process.env.GITHUB_API_KEY
  });
  
  const fetchDirectoryContents = async () => {
    try {
      const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner,
        repo,
        path
      })
    } catch {

    }
  }

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
      /*
      The above retrieves a list of repos with key details regarding each
      Each repo will be fetched individually using `octokit.request('GET /repos/{owner}/{repo}/contents/'`
      The info returned from each will contain descriptive information for each file or folder in the top level of the repo, but an additional fetch will need to be performed for files in folders
      This seems like it will need to be done recursively, but I may be wrong - there may be a way to do this en-masse without recursively fetching each set of files within a folder, but again, I may be wrong.

      If the above is incorrect, the following comentary can be discregarded. If it's what needs to be done, then as far as I'm aware, my options are as follows. I could:
      - Create a global variable that the fetch would add all the info to like an array, then map through that and create each compnent based around each of them. I don't know how I would do that store the info if I did that.
      - Create a function inside the fetch that creates a component after each fetch to remove the need for storage.
      */
      const responseTwo = await octokit.request('GET /repos/{owner}/{repo}/contents/', {
        owner: 'MxSamArcher',
        repo: 'portfolio-app',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

      console.log(responseTwo)
      
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
