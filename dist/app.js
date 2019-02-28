"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**************************************************************************
  Just the usual express.js setup...
  NOTE: This code has not been optimized for size or speed. It was written
        with ease of understanding in mind.
**************************************************************************/
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));
const port = 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

//# sourceMappingURL=app.js.map
