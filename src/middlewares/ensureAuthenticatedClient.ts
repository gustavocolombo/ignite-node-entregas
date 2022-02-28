import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface ITokenPayload {
  sub: string;
}

export default function ensureAuthenticatedClient(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("JWT Token is missing");

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "d7a9d971995e4128f1c688659bd817e8"
    ) as ITokenPayload;

    request.fk_clients_id = sub;

    return next();
  } catch {
    throw new Error("Cannot performe this operation");
  }
}
