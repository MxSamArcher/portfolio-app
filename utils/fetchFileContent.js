import octokit from "./octokitClient"

export const fetchFileContent = async (username, repo, path) => {
  try {
    const response = await octokit.request('GET /repos/{username}/{repo}/contents/{path}', {
      username,
      repo,
      path,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    return response.data;
  } catch(error) {
    console.error('Error fetching the file content: ', error)
    return null
  }
}