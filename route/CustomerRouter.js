const express = require('express')
const router = express.Router();
const validateRequest = require('../middleware/validateRequest')
const CustomerController = require('../controller/CustomerController');
const customerFormRequest = require('../request/customerFormRequest');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/customers',CustomerController.getAllCustomers)
router.get('/customers/:id', CustomerController.showCustomers)
router.post('/customers',validateRequest(customerFormRequest), CustomerController.saveCustomer)
router.put('/customers/:id',validateRequest(customerFormRequest), CustomerController.updateCustomer)
router.delete('/customers/:id', CustomerController.deleteCustomer)


module.exports = router

