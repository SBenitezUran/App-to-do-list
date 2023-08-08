const router = require('express').Router();

router.get('/tasks', (re, res, next) => {
    res.send('API Here');
});

module.exports = router;