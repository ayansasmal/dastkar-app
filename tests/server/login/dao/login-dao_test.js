const mongoose = require('mongoose');
const expect = require('chai').expect;

  const loginDAO = require(process.cwd() + '/server/api/login/dao/login-dao');
  const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('loginDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    loginDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
