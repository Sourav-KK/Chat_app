import express, { Router, Request, Response } from "express";

const userRoute = () => {
  const router: Router = express.Router();

  // login
  router.get("/", (_req: Request, res: Response) => {
    res.send("in login/home page ");
  });

  // signup
  router.get("/signup", (_req: Request, res: Response) => {
    res.send("in signup");
  });

  // profile
  router.get("/profile", (_req: Request, res: Response) => {
    res.send("in signup");
  });

  // individual messages
  router.get("/direct", (_req: Request, res: Response) => {
    res.send("in signup");
  });

  // group chat
  router.get("/direct", (_req: Request, res: Response) => {
    res.send("in signup");
  });

  return router;
};

export default userRoute;
