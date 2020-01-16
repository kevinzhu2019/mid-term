const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM menus ...;`)
      .then(data => {
        const menuItems = data.rows;
        res.render('menu', { menuItems });
      })
      .catch(err => {
        res
          .status(500)
          .render({ error: err.message });
      });
  });
  return router;
};
