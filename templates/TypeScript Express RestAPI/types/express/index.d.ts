declare namespace Express {
  interface userPayload {
    expiresIn: string;
    userId: string;
    iat: number;
  }

  interface Request {
    payload?: userPayload;
    file?: {
      path: string;
      filename: string;
      size: number;
    };
  }
}
