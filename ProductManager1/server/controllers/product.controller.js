const Product = require('../models/product.model')

module.exports = {

    //Find All Products
    findAllProducts : (req, res) => {
        Product.find()
            .then((allProducts) => {
                res.json({ products: allProducts })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong in find all controllers', error: err })
            })
        },

    //Find One Product
    findOneProduct : (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(oneSingleProduct => {
                res.json({ product: oneSingleProduct })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong in find one controllers', error: err })
            })
    },

    //Create New Products
    createNewProduct : (req, res) => {
        Product.create(req.body)
            .then(newlyCreatedProduct => {
                res.json({ newProduct: newlyCreatedProduct })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong in create controllers', error: err })
            })
    },

    //Update Product
    updateProduct : (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct => {
                res.json({ product: updatedProduct })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong in update controllers', error: err })
            })
    },

    //Delete Product
    deleteProduct : (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((deletedProduct) => {
                res.json( deletedProduct )
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong in delete controllers', error: err })
            })
    }
}
