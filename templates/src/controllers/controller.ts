import { Request, Response } from "express";

export const customController = async (req: Request, res: Response) => {
  res.send("This is a custom route my comrade");
};
