import { Router } from "express";
import { getDashboardMetrics } from "../controllers/deshboardController";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;