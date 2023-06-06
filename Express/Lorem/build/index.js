"use strict";
const express = require('express');
const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});
