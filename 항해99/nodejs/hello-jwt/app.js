const jwt = require("jsonwebtoken");

const token = jwt.sign({ test: true }, "my-secret-key");

console.log(token);

const decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2NTQ0Mzc5MjB9.qpD0dSpmW9MTrO6TAy49G_XFUFfvoch3qiGYETwrMsU", "my-secret-key");
console.log(decoded);