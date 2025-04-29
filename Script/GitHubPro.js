let config = {
  username: $argument.Username,
  token: $argument.Token,
};

const username = $request.url.match(
  /https:\/\/(?:raw|gist)\.githubusercontent\.com\/([^\/]+)\//
)[1];

let newHeaders = { ...$request.headers };

newHeaders["accept-language"] = "en-us";

if (username == config.username) {
  newHeaders["authorization"] = `token ${config.token}`;
}

$done({ headers: newHeaders });