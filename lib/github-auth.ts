import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import fetch from "node-fetch";

export async function generateGitHubAppJWT() {
  const privateKeyPath = process.env.PRIVATE_KEY_PATH!;
  const appId = process.env.GITHUB_APP_ID!;

  const privateKey = fs.readFileSync(
    path.join(process.cwd(), privateKeyPath),
    "utf8"
  );

  const payload = {
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 10 * 60,
    iss: appId,
  };

  return jwt.sign(payload, privateKey, { algorithm: "RS256" });
}

export async function getInstallationId(jwtToken: string): Promise<number> {
  const res = await fetch("https://api.github.com/app/installations", {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok)
    throw new Error(`Failed to get installation ID: ${res.statusText}`);
  const installations = (await res.json()) as { id: number }[];
  return installations[0].id;
}

export async function getInstallationToken(): Promise<string> {
  const jwtToken = await generateGitHubAppJWT();
  const installationId = await getInstallationId(jwtToken);

  const res = await fetch(
    `https://api.github.com/app/installations/${installationId}/access_tokens`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!res.ok) throw new Error(`Failed to get access token: ${res.statusText}`);
  const data = (await res.json()) as { token: string };
  return data.token;
}
