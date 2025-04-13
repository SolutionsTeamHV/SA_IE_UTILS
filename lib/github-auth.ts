import { OAuthApp } from "@octokit/oauth-app";

const oauthApp = new OAuthApp({
  clientId: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  redirectUrl: process.env.GITHUB_REDIRECT_URL!,
});

export async function getAuthorizationUrl(state?: string) {
  return oauthApp.getWebFlowAuthorizationUrl({
    state,
    scopes: ["repo", "user:email"],
    redirectUrl: process.env.GITHUB_REDIRECT_URL!
  });
}

export async function getAccessToken(code: string) {
  const { authentication } = await oauthApp.createToken({
    code,
    redirectUrl: process.env.GITHUB_REDIRECT_URL!
  });
  return authentication.token;
}

export async function getUserInfo(accessToken: string) {
  const userResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${accessToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  console.log("Scopes:", userResponse.headers.get("X-OAuth-Scopes"));

  if (!userResponse.ok) {
    throw new Error(`Failed to get user info: ${userResponse.statusText}`);
  }

  const userInfo = await userResponse.json();

  // Get user emails
  const emailsResponse = await fetch("https://api.github.com/user/emails", {
    headers: {
      Authorization: `token ${accessToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!emailsResponse.ok) {
    console.warn("Failed to get user emails:", emailsResponse.statusText);
  } else {
    const emails = await emailsResponse.json();
    const primaryEmail = emails.find((email: any) => email.primary)?.email;
    if (primaryEmail) {
      userInfo.email = primaryEmail;
    }
  }

  console.log(userInfo)

  return userInfo;
}

export async function getRepoContents(
  accessToken: string,
  repo: string,
  path: string
) {
  const response = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${repo}/contents/${path}`,
    {
      headers: {
        Authorization: `token ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to get repository contents. Do you have the repository permissions?`);
  }

  return response.json();
}

export async function getRepoFileContent(
  accessToken: string,
  repo: string,
  filePath: string
): Promise<string> {
  console.log(`PATH: https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${repo}/contents/${filePath}`)
  const response = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${repo}/contents/${filePath}`,
    {
      headers: {
        Authorization: `token ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch file content. Make sure the file path is correct and you have access.`
    );
  }

  const data = await response.json();

  if (data.encoding !== "base64") {
    throw new Error(`Unsupported encoding: ${data.encoding}`);
  }

  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return content;
}

