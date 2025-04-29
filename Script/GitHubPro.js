let config = {
  username: $argument.Username,
  token: $argument.Token,
};

const username = $request.url.match(
  /https:\/\/(?:raw|gist)\.githubusercontent\.com\/([^\/]+)\//
)[1];

let newHeaders = { ...$request.headers };

newHeaders["Accept-Language"] = "en-us";

if (username == config.username) {
  console.log(`ACCESSING PRIVATE REPO: ${$request.url}`);
  newHeaders["Authorization"] = `token ${config.token}`;
}

$done({ headers: newHeaders });