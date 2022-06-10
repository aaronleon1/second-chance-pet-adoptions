import { NextApiRequest, NextApiResponse } from "next";

const oAuthToken = async (req: NextApiRequest, res: NextApiResponse) => {
  let params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  process.env.PET_FINDER_KEY &&
    params.append("client_id", process.env.PET_FINDER_KEY);
  process.env.PET_FINDER_SECRET &&
    params.append("client_secret", process.env.PET_FINDER_SECRET);

  const apiCall = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body: params,
  });

  const token = await apiCall.json();
  res.send(token);
};

export default oAuthToken;
