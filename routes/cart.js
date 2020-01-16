const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {

    //if name/phone = false, Order button doesn't show, Name.Phone fields are in it's place;

    //if name/phone = true, Order button is avaliable


    db.query(``)
      .then(data => {
        const cartItems = data.rows;
        res.render('cart', { cartItems });
      })
      .catch(err => {
        res
          .status(500)
          .render({ error: err.message });
      });
  });


  return router;
};
