const router = require('express').Router()
const db = require('../models')

router.get('/', function(req, res){
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.get('/new', function(req,res){
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place }, place)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')

})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')

})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', function(req,res){
  res.send('GET /places/:id/rant stub')
  })

router.delete('/:id/rant/:rantId', function(req,res){
  res.send('POST /:id/rant/:rantId stub')
})

// router.get('*', function (req,res){
//   res.render('error404')
// })

module.exports = router;
