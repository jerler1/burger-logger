// Dependencies
// =====================================================
const orm = require("../config/orm");

// Burger Model.
// =====================================================
const burger = {
  // All function.  Pass to the ORM what to do for all cats.
  all: function (cb) {
    orm.all("burgers", function (response) {
      cb(response);
    });
  },

  // Create function.  Variables columns and values are arrays. cb is a call-back function.
  create: function (columns, values, cb) {
    orm.create("burgers", columns, values, function (response) {
      cb(response);
    });
  },

  // Update function.  Condition is the WHERE clause for SQL.
  update: function (objectColumnValues, condition, cb) {
    orm.update("burgers", objectColumnValues, condition, function (res) {
      cb(res);
    });
  },

  // Delete function.
  delete: function (condition, cb) {
    orm.delete("cats", condition, function (res) {
      cb(res);
    });
  },
};

// Exporting the burger functions for the controller to access.
module.exports = burger;
