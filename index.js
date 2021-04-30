const { app } = require('./core'); 

const lightRoute = require('./routes/lightRoutes');
const homeRoute = require('./routes/houseRoutes')

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
});

/* CODE YOUR API HERE */

app.use('/', homeRoute);
app.use('/light', lightRoute);



