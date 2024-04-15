import { useState, useEffect } from "react";

import fetchRepos from "@/utils/fetchRepos";
import recursiveDirectoryFetch from "@/utils/recursiveDirectoryFetch";

import { RepoTitle } from "./RepoTitle";

export default function RepoList() {
  const [repos, setRepos] = useState([])
  const [align, setAlign] = useState(null)
  
  const username = 'MxSamArcher';

  useEffect(() => {
    const initialiseRepos = async () => {
      const reposData = await fetchRepos(username)
      setRepos(reposData)
    }
    initialiseRepos()
  },[])

  return (
    <div className='flex flex-col justify-left w-full h-full min-h-screen text-gray-800 bg-sky-100'>
      <header className=' p-6 shadow-md'>
        Header
      </header>
      <div className='flex flex-grow'>
        <nav className=' flex-shrink-0 p-4 min-w-[10%]  shadow-inner'>
          Nav
        </nav>
        <main className='flex justify-start flex-col items-center flex-grow p-4 w-full'>
          Main content
          {repos ? repos.map((item) => {
            return (
              <RepoTitle
              key={item.node_id}
              item_name={item.name}
              align={align}
              />
            )
          })
          :
          null
        }
        </main>
      </div>
      <footer className='bg-sky-900 text-white p-4 shadow-md'>
        Footer
      </footer>
    </div>
  );
}
