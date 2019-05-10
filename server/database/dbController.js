const mongoose = require('mongoose');
const Users = require('./models/user.js');
const Events = require('./models/event.js');
const Departments = require('./models/department.js');

function DBController() {
  const getAllUsers = () => {
    return Users.find({}).exec();
  };

  const getUserByTelegramId = id => {
    return Users.findOne({
      id_telegram: id
    }).exec();
  };

  const getEventById = eventId => {
    return Events.findOne({
      _id: mongoose.Types.ObjectId(eventId)
    }).exec();
  };

  const getAllEvents = () => {
    return Events.find({}).exec();
  };

  const getAllDepartments = () => {
    return Departments.find({}).exec();
  };

  const putUserDepartment = (userTelegramId, departmentId) => {
    return Users.findOneAndUpdate(
      {
        id_telegram: userTelegramId
      },
      {
        $set: {
          department: departmentId
        }
      },
      {
        useFindAndModify: false,
        new: true
      },
      (err, data) => data
    );
  };

  return {
    getUserByTelegramId,
    getEventById,
    getAllEvents,
    getAllDepartments,
    putUserDepartment,
    getAllUsers
  };
}

module.exports = DBController();
