const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const memberRoute = require("./src/routes/memberRoute");
const bookRoute = require("./src/routes/bookRoute");
const not_found = require("./middlewares/notFound");
const colors = require("colors");

//-----------Config.ENV-----------
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));

//-----------Port-----------
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    colors.white(
      `Server running in ${process.env.NODE_MODE} modes on port ${port}`.bgRed
    )
  );
});

//-----------Routes-----------
app.use("/api/member", memberRoute);
app.use("/api/book", bookRoute);

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//-----------Middleware Not Found-----------
app.use(not_found);
