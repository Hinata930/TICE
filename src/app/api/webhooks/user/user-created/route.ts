import { NextApiRequest, NextApiResponse } from "next";
import handler from "@/app/api/webhooks/user/user-created/handler"; 

export default async function route(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await handler(req, res);
  } else {
    res.status(405).end("Method Not Allowed");
  }
}
