const express = require("express");

const app = express();

app.get("/api/users", (req, res) => {
  // This data is usually retrieved from database. Hardcoding here for practice
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Steve", lastName: "Smith" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
