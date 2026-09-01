const product=require("../models/product")
const productctrl={
    home:(req,res)=>{
        res.render("home")
    },
    getproduct:async(req,res)=>{
        let search = req.query.search || "";
        let sort = req.query.sort || "";
        let allproduct = await Product.find();
        if (search.trim() !== "") {
        let searchText = search.trim().toLowerCase();

        allproduct = allproduct.filter(function (p) {
          let nameMatch = p.name.toLowerCase().includes(searchText);
          let categoryMatch = p.category.toLowerCase().includes(searchText);
          let companyMatch = p.company.toLowerCase().includes(searchText);

          return nameMatch || categoryMatch || companyMatch;
        });
      }
      if (sort === "low") {
        allproduct.sort(function (a, b) {
          return a.price - b.price;
        });
      } else if (sort === "high") {
        allproduct.sort(function (a, b) {
          return b.price - a.price;
        });
      }
        res.render("products",{allproduct, search, sort});
    },
    insertproduct:(req,res)=>{
        res.render("form.ejs")
    },
   createproduct: async (req, res, next) => {
  try {
    const { name, category, company, price, stock } = req.body;
    await Product.create({ name, category, company, price, stock });
    res.redirect("/getdata");
  } catch (err) {
    next(err);
  }
  },
    updateproduct:async(req,res)=>{
        await product.findByIdAndUpdate(req.params.userid,req.body,{new:true});
        res.redirect("/getdata");
    },
    editproduct:async(req,res)=>{
        const data=await product.findById(req.params.userid);
        res.render("edit",{data});
    },
    deleteproduct:async(req,res)=>{
        await product.findByIdAndDelete(req.params.userid);
        res.redirect("/getdata");
    }

};
module.exports=productctrl;