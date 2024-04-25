const {Product} = require('../../models')
 const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
  
      if (!product) {
        return res.status(404).json({ message: "Product Not Found" });
      }
  
      res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = deleteProduct