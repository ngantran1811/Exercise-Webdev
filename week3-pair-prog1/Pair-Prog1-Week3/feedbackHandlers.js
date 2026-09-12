const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.json(feedbacks);
};

const createFeedback = (req, res) => {
  const { sender, message, rating, platform } = req.body;

  const newFeedback = Feedback.addOne(
    sender,
    message,
    rating,
    platform
  );

  if (newFeedback) {
    res.status(201).json(newFeedback);
  } else {
    res.status(500).json({ message: "Failed to create feedback" });
  }
};

const getFeedbackById = (req, res) => {
  const feedbackId = req.params.feedbackId;
  const feedback = Feedback.findById(feedbackId);
  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404).json({ message: "Feedback not found" });
  }
  res.json({ message: "Hello from getFeedbackById" });
};

const updateFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;

  const updatedFeedback = Feedback.update(
    feedbackId,
    req.body
  );

  if (updatedFeedback) {
    res.json(updatedFeedback);
  } else {
    res.status(404).json({ message: "Feedback not found" });
  }
};

const deleteFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;

  const isDeleted = Feedback.deleteOne(feedbackId);

  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Feedback not found" });
  }
};

module.exports = {
  getAllFeedbacks,
  createFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
};