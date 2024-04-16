import { Octokit } from "octokit"

const octokit = new Octokit({ 
  auth: process.env.NEXT_PUBLIC_REACT_APP_GITHUB_API_KEY || process.env.GITHUB_API_KEY
});

export default octokit