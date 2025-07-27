const express = require('express');
const router = express.Router();
const { submitQuiz, getAllQuizzes } = require('../controllers/QuizController');


router.post('/submit', submitQuiz);     // POST /api/quiz/submit
router.get('/all', getAllQuizzes);      // GET /api/quiz/all

module.exports = router;
