import octokit from "./octokitClient"

export const fetchRepos = async (username) => {
  try {
    // 'REST API Endpoints for xyz' is the search term you're looking for
    const response = await octokit.request('GET /users/{username}/repos', {
      username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    return response.data;

  } catch(error) {
    console.error(`Error fetching the repos: ${error}`)
  }
}

export default fetchRepos;