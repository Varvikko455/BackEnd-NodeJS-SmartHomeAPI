const { app } = require('./core'); 

//device routes
const homeRoute = require('./routes/houseRoutes');
const lightRoute = require('./routes/lightRoutes');
const vacuumRoute = require('./routes/vacuumRoute');
const blindRoute = require('./routes/blindRoute');
const acRoute = require('./routes/acRoute');
const doorRoute = require('./routes/doorRoute');
const cameraRoute = require('./routes/cameraRoute');
const speakerRoute = require('./routes/speakerRoute');

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
});

//access all devices with ID
app.use('/', homeRoute);

//access devices by type and name
app.use('/Light', lightRoute);
app.use('/Vacuum', vacuumRoute);
app.use('/Blind', blindRoute);
app.use('/AC', acRoute);
app.use('/Lock', doorRoute);
app.use('/Camera', cameraRoute);
app.use('/Speaker', speakerRoute);




