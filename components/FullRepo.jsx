import { useState, useEffect } from "react";
import Link from "next/link";

import FileTree from "./FileTree";
import FileViewer from "./FileViewer";

import recursiveDirectoryFetch from "@/utils/recursiveDirectoryFetch";
import { fetchFileContent } from "@/utils/fetchFileContent";

export default function FullRepo({ url_id }) {
  const [repo, setRepo] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState('');

  const username = 'MxSamArcher';

  useEffect(() => {
    const initialiseRepo = async () => {
      // params for recursiveDirectoryFetch initial call: username, repo
      const repoData = await recursiveDirectoryFetch(username, url_id);
      setRepo(repoData);
    }
    initialiseRepo();
  },[url_id]);

  const handleFileClick = async (path) => {
    const content = await fetchFileContent(username, url_id, path);
    setSelectedFile(path.split('/').pop());
    setFileContent(atob(content.content));
  }


  return (
    <div className='flex flex-col justify-left w-full h-full min-h-screen text-gray-800 bg-sky-100 overflow-x-auto'>
      <header className=' p-6 shadow-md'>
        <Link href="/">
          <div className="text-gray-800 hover:text-gray-600">Home</div>
        </Link>
      </header>
      <div className='flex flex-grow'>
        <nav className='flex-shrink-0 p-4 w-1/5 shadow-inner'>
          <p>{url_id} contents:</p>
          <FileTree
            items={repo}
            onFileClick={handleFileClick}
          />
        </nav>
        <main className='flex justify-start flex-col items-center flex-grow p-4'>
          <FileViewer
            filename={selectedFile}
            content={fileContent}
          />
        </main>
      </div>
      <footer className='bg-sky-900 text-white p-4 shadow-md'>
        Sam Archer 2024
      </footer>
    </div>
  );
}