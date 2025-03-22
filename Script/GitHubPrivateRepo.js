let config = {
  username: $persistentStore.read("github_username"),
  token: $persistentStore.read("github_token"),
};

const username = $request.url.match(
  /https:\/\/(?:raw|gist)\.githubusercontent\.com\/([^\/]+)\//
)[1];
// rewrite headers for specific user
if (username == config.username) {
  console.log(`ACCESSING PRIVATE REPO: ${$request.url}`);
  $done({ headers: {...$request.headers, Authorization: `token ${config.token}`} });
} else $done({});