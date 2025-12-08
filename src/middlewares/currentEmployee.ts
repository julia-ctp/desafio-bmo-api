import { Request, Response, NextFunction } from "express";

declare module "express-serve-static-core" {
  interface Request {
    employeeId: string;
  }
}

export function currentEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const headerValue = req.headers["x-employee-id"];

  if (!headerValue) {
    res.status(400).json({ error: "x-employee-id header is required" });
    return;
  }

  const employeeId = Array.isArray(headerValue)
    ? headerValue[0]
    : headerValue;

    req.employeeId = employeeId

    next()
}
