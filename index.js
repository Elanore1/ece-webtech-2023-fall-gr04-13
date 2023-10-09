const express = require('express');
const app = express();
const handles = require('./handles'); // Import your handles.js module

// Use the Express application defined in handles.js
app.use(handles.serverHandle);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
