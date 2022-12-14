import { getDeliveryById, postDeliveryById } from '../controllers/delivery.controller'

import { Router } from 'express'

const deliveryRoutes = Router()

deliveryRoutes.get('/:id', getDeliveryById)
deliveryRoutes.post('/', postDeliveryById)

export default deliveryRoutes
