import { NextApiRequest, NextApiResponse } from "next";

export default function helloAPI(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
