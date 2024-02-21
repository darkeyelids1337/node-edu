const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Home Page </h1><a href="/api/products">products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { name, id, image } = product;
    return { name, id, image };
  });
  res.json(newProducts);
});
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === +id);
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

   res.json(singleProduct);
});
app.get('/api/products/:id/reviews/:reviewId', (req, res) => {
    console.log(req.params)
    res.send('Hello')
})
app.get('/api/v1/query', (req,res) => {
    const {search, limit} = req.query;
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)
})
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("Listen on 5000...");
});
