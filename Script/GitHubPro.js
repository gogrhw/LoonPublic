let config = {
  username: $argument.Username,
  token: $argument.Token,
};

const username = $request.url.match(
  /https:\/\/(?:raw|gist)\.githubusercontent\.com\/([^\/]+)\//
)[1];

if (username == config.username) {
  console.log(`ACCESSING PRIVATE REPO: ${$request.url}`);
  $done({
    headers: {
      ...$request.headers,
      Authorization: `token ${config.token}`,
      "Accept-Language": `en-us`
    }
  });
} else {
  $done({
    headers: {
      ...$request.headers,
      "Accept-Language": `en-us`
    }
  });
}