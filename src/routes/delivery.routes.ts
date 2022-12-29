import { getDeliveries, getDeliveryById, postDeliveryById } from '../controllers/delivery.controller';

import { Router } from 'express'
import { validateMongoId } from '../middlewares/validateMongoId'

const deliveryRoutes = Router()

deliveryRoutes.get('/:id', validateMongoId, getDeliveryById)
deliveryRoutes.get('/', getDeliveries)
deliveryRoutes.post('/', postDeliveryById)

export default deliveryRoutes
