const { Student } = require('../models');

const getAllStudents = async () => {
  try {
    const students = await Student.findAll();
    return students;
  } catch (error) {
    throw new Error('Error al obtener los estudiantes');
  }
};

const getStudentById = async (id) => {
  try {
    const student = await Student.findByPk(id);
    return student;
  } catch (error) {
    throw new Error('Error al obtener el estudiante');
  }
};

const createStudent = async (student) => {
  try {
    const newStudent = await Student.create(student);
    return newStudent;
  } catch (error) {
    throw new Error('Error al crear el estudiante');
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
};
