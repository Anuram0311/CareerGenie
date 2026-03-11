const express = require('express');
const router = express.Router();
const {
    getCareers,
    getDomains,
    getBranchesByDomain,
    getCareerById,
    createCareer,
    updateCareer,
    deleteCareer,
} = require('../controllers/careerController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getCareers).post(protect, admin, createCareer);
router.route('/domains').get(getDomains);
router.route('/domains/:domain/branches').get(getBranchesByDomain);
router
    .route('/:id')
    .get(getCareerById)
    .put(protect, admin, updateCareer)
    .delete(protect, admin, deleteCareer);

module.exports = router;
