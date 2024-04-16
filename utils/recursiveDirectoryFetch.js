import octokit from "./octokitClient"
const recursiveDirectoryFetch = async (username, repo, path = '') => {
  try {
    const response = await octokit.request('GET /repos/{username}/{repo}/contents/{path}', {
      username,
      repo,
      path,
      headers: { 'X-GitHub-Api-Version': '2022-11-28' },
    });
    
    return Promise.all(response.data.map(async (item) => {
      if (item.type === 'dir') {
        const children = await recursiveDirectoryFetch(username, repo, item.path)
        return { ...item, children }
      }
      return item;
    }
    ))
  } catch(error) {
    console.error(`Error fetching the repo contents: `, error);
    return [];
  }
}

export default recursiveDirectoryFetch