const CartServices = require('../services/cart');
var Publishable_Key = 'pk_test_51Hemr1KyId1Ss5GohwABbCCy93JCbisiToZwxnJuXZ2ANu5dCxbYl9FWShLYedZdn3hAIfcB8VQQR7YK0rokT1NE00JZsluZKf'
var Secret_Key = 'sk_test_51Hemr1KyId1Ss5Gotr2QSzVAVPVyH4lzsxyLb4ZGEtpF1MK5nR4x7CaZItIJE4ue3Xe0eY0uFskAXzRgfuovRgL800GEj0VOXA'

var stripe = require('stripe')(Secret_Key);
class CartController {

    payment = async(req, res) => {

        let name = req.body.name;
        let mobile = req.body.mobile;
        let address = req.body.address;
        let price = req.body.price;
        let pName = req.body.pName;
        let email = req.body.stripeEmail;
        global.res = res;

        try {
            0
            let result = await CartServices.paymentdetails(name, mobile, address, pName, price, email);

            if (result) {
                res.redirect('/userhome');
            }

        } catch (e) {
            console.log(e)
            res.redirect('/cart');
        }
    }
}


module.exports = CartController;