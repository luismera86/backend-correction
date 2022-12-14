import { Request, Response } from 'express'

import { Delivery } from '../models'

export const getDeliveryById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const delivery = await Delivery.findById(id)

    res.status(200).json({ delivery })
  } catch (error) {
    res.json({
      msg: error,
    })
    console.log(error)
  }
}

export const postDeliveryById = async (req: Request, res: Response) => {
  try {
    const delivery = new Delivery(req.body)
    await delivery.save()

    res.status(200).json({ delivery })
  } catch (error) {
    res.json({
      msg: error,
    })
    console.log(error)
  }
}
