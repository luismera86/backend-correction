"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delivery_controller_1 = require("../controllers/delivery.controller");
const express_1 = require("express");
const validateMongoId_1 = require("../middlewares/validateMongoId");
const deliveryRoutes = (0, express_1.Router)();
deliveryRoutes.get('/:id', validateMongoId_1.validateMongoId, delivery_controller_1.getDeliveryById);
deliveryRoutes.post('/', delivery_controller_1.postDeliveryById);
exports.default = deliveryRoutes;
