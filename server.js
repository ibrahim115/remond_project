const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('API is Works!'));




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));