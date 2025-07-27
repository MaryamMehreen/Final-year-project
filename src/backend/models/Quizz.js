const Quiz = require('../models/Quizz'); // adjust if filename is different

const submitQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.status(201).json({ message: 'Quiz submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting quiz', error });
  }
};

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quizzes', error });
  }
};

module.exports = {
  submitQuiz,
  getAllQuizzes
};
