let config = {
  username: $argument.Username,
  token: $argument.Token,
};

const username = $request.url.match(
  /https:\/\/(?:raw|gist)\.githubusercontent\.com\/([^\/]+)\//
)[1];

let newHeaders = {};

for (let key in $request.headers) {
  if (key.toLowerCase() === "accept-language") {
    newHeaders[key] = "en-us";
  } else {
    newHeaders[key] = $request.headers[key];
  }
}

if (username === config.username) {
  console.log(`ACCESSING PRIVATE REPO: ${$request.url}`);
  newHeaders["Authorization"] = `token ${config.token}`;
}

$done({ headers: newHeaders });