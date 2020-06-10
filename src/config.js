require("dotenv").config();

export default {
  API_ENDPOINT: process.env.API_ENDPOINT || "http://localhost:7000",
};
