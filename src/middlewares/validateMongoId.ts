import { NextFunction, Request, Response } from 'express'

import { isValidObjectId } from 'mongoose'

export const validateMongoId = (req: Request, res: Response, nex: NextFunction) => {
  try {
    const { id } = req.params
    const isMongoId = isValidObjectId(id)
    if (!isMongoId) {
      return res.status(400).json({ msg: 'No es un id válido' })
    }

    nex()
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}
