const Quiz = require('../models/Quizz');

// Save a new quiz attempt
const submitQuiz = async (req, res) => {
  try {
    const { userName, score, totalQuestions } = req.body;
    const newQuiz = new Quiz({ userName, score, totalQuestions });
    await newQuiz.save();
    res.status(201).json({ message: 'Quiz submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all quiz attempts (for admin)
const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().sort({ submittedAt: -1 });
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  submitQuiz,
  getAllQuizzes
};
