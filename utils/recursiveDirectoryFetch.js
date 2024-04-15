import octokit from "./octokitClient"
const recursiveDirectoryFetch = async (username, repo, path = '') => {
  try {
    const response = await octokit.request('GET /repos/{username}/{repo}/contents/{path}', {
      username,
      repo,
      path,
      headers: { 'X-GitHub-Api-Version': '2022-11-28' },
    });
    
    const directoryContents = []

    for (const item of response.data) {
      if (item.type === 'dir') {
        directoryContents.push(item);
        const subdirContents = await recursiveDirectoryFetch(username, repo, item.path)
        if (Array.isArray(subdirContents)) {
          directoryContents.push(...subdirContents);
        }
      } else {
        directoryContents.push(item);
      }
    }
    
    // console.log(directoryContents)
    return directoryContents
  } catch(error) {
    console.error(`Error fetching the repo contents: `, error);
    return [];
  }
}

export default recursiveDirectoryFetch