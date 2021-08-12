const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');


// serve up react front-end in production
router.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});
router.use('/api', apiRoutes);

module.exports = router;
