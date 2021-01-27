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
  console.log("Accessing Root Route");
  burger.all(function (allBurgers) {
    const hbsObject = {
      burgers: allBurgers,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Post Routes
// =====================================================

router.post("/api/burgers/", function (req, res) {
  burger.create(["burger_name"]),
    [req.body.name],
    function (result) {
      res.json({ id: result.insertId });
    };
});

// Delete Routes
// =====================================================

router.delete("/api/burgers/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Put Routes
// =====================================================

router.put("/api/burgers/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Exporting the router object.
module.exports = router;
