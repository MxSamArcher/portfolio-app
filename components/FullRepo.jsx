import { useState, useEffect } from "react";

import FileTree from "./FileTree";

import recursiveDirectoryFetch from "@/utils/recursiveDirectoryFetch";

export default function FullRepo({ url_id }) {
  const [repo, setRepo] = useState([])
  const username = 'MxSamArcher';

  useEffect(() => {
    const initialiseRepo = async () => {
      // params for recursiveDirectoryFetch initial call: username, repo
      const repoData = await recursiveDirectoryFetch(username, url_id)
      setRepo(repoData)
    }
    initialiseRepo()
  },[url_id])
  // useEffect(() => {
  //   console.log(repo)
  // }, [repo])

  return (
    <div className='flex flex-col justify-left w-full h-full min-h-screen text-gray-800 bg-sky-100'>
      <header className=' p-6 shadow-md'>
        Header
      </header>
      <div className='flex flex-grow'>
        <nav className=' flex-shrink-0 p-4 min-w-[10%]  shadow-inner'>
          <p>{url_id} contents:</p>
          <FileTree
            items={repo}
          />
        </nav>
        <main className='flex justify-start flex-col items-center flex-grow p-4 w-full'>
          Main content
        </main>
      </div>
      <footer className='bg-sky-900 text-white p-4 shadow-md'>
        Footer
      </footer>
    </div>
  );
}