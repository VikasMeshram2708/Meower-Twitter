import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'This is Users page new.',
  });
};
