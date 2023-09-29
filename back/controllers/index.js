const CourseController = require('./course');
const userController = require('./user');
const courseDetailController = require('./courseDetail');
const teacherController = require('./teacher');
const studentController = require('./student');
const cohortController = require('./cohort');
const adminController = require('./admin');

module.exports = {
  CourseController,
  teacherController,
  userController,
  courseDetailController,
  studentController,
  cohortController,
  adminController,
};
