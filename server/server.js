const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');

const app = express();

const authRouter= require('./routes/auth/auth-routes');
const  adminProductsRouter = require('./routes/admin/products-routes');
const adminOrderRouter = require("./routes/admin/order-routes");
const shopProductsRouter= require("./routes/shop/products-routes");
const shopCartRouter= require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRoute= require("./routes/shop/order-routes");
const shopSearchRouter = require('./routes/shop/search-routes');

mongoose.connect("mongodb+srv://subhashreenayak277:zSaJ98zPIKm4tMMk@cluster0.jdz7k.mongodb.net/Trendy")
  .then(() => console.log("mongodb is connected"))
  .catch(() => console.log("Error in connecting to mongodb"));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth',authRouter);
app.use('/api/admin/products',adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use('/api/shop/products',shopProductsRouter);
app.use('/api/shop/cart',shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order",shopOrderRoute);
app.use("/api/shop/search",shopSearchRouter)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
