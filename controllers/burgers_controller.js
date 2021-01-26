// Dependencies.
// =====================================================
const express = require("express");

// Making a mini application router instead of pulling the full app in.
const router = express.Router();

// Importing the model (burger.js) to be used.
const burger = require("../models/burger");

// View Routes
// =====================================================

router.get("/", function (req, res) {
  // Do something.
});

// Post Routes
// =====================================================

router.post("/api/burgers/", function (req, res) {
  // Do something.
});

// Delete Routes
// =====================================================

router.delete("/api/burgers/:id", function (req, res) {
  // Do something.
});

// Put Routes
// =====================================================

router.update("/api/burgers/:id", function (req, res) {
  // Do something.
});

// Exporting the router object.
module.exports = router;
