"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deshboardController_1 = require("../controllers/deshboardController");
const router = (0, express_1.Router)();
router.get("/", deshboardController_1.getDashboardMetrics);
exports.default = router;
