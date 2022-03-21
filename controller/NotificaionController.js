const Notification = require('../schemas/NotificationsSchema');

const getAllNotification = async (req, res, next) => {
  try {
    const response = await Notification.find();
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleAddNotification = async (req, res, next) => {
  try {
    const newNotification = { ...req.body, date: new Date().toDateString() };
    const response = await Notification.create(newNotification);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getSpecificUserNotification = async (req, res, next) => {
  try {
    const { email } = req.query;
    const response = await Notification.find({ email });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleDeleteNotification = async (req, res, next) => {
  try {
    const { id } = req.query;
    const response = await Notification.deleteOne({ id });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNotification,
  handleAddNotification,
  getSpecificUserNotification,
  handleDeleteNotification,
};
