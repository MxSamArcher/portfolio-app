const recursiveDirectoryFetch = async (username, repo, path = '') => {
  try {
    const response = await octokit.request('GET /repos/{username}/{repo}/contents/{path}', {
      username,
      repo,
      path,
      headers: { 'X-GitHub-Api-Version': '2022-11-28' },
    })
    // console.log(`Repo content response:`, response.data)
    
    for (const item of response.data) {
      if (item.type === 'dir') {
        await recursiveDirectoryFetch(username, repo, item.path)
      }
    }
    
  } catch(error) {
    console.error(`Error fetching the repo contents: ${error}`)
  }
}

export default recursiveDirectoryFetch