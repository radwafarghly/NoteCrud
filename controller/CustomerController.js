
var generator =require('../util/generator');
var memoryStorage =require('../util/memory.storage');
var Customer= require('../model/customer.model')
const ApiError = require('../error/error-api');

class customerController{


    async  getAllCustomers(req, res){       
        try 
        {
            const Allcustomers = await Customer.query();
            res.status(200).json(Allcustomers);
        } catch (err) {
            res.status(500).json(err);
          
        }
    }

    async  showCustomers(req, res){       
        try 
        {
            const customer = await Customer.query().findById(req.params.id);
            res.status(200).json(customer);
        } catch (err) {
            res.status(500).json(err);
          
        }
    }



    
    
    async saveCustomer(req, res){

        try{
            const customer = await Customer.query().insert({
                name: req.body.name,
                email: req.body.email,
            });
            res.status(201).json(customer);


        } catch (err) {
            res.status(500).json(err);
          
        } 
    }

    async updateCustomer(req, res){
        try{
            await Customer.query().update(req.body).where('id', req.params.id);;
            res.status(200).send('customer update');

        } catch (err) {
            res.status(500).json(err);
          
        } 

    }

    async deleteCustomer(req, res){
        try{
            console.log(req.params.id)
            const customer = await Customer.query().deleteById(req.params.id);
            res.status(200).send('delete  customer..........')


        } catch (err) {
            res.status(500).json(err);
          
        } 
    }

}



module.exports =  new customerController();
