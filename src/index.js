const express = require('express');
const bodyParser = require('body-parser');


// const {sendBasicEmail} = require('./services/email-service');
const {PORT} = require('./config/serverConfig');
const jobs = require('./utils/jobs');
const TicketController = require('./controllers/ticket-notification');

const setUpAndStartServer = () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT, ()=> {

        console.log(`Server started on PORT: ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'pradyum.tahekar@gmail.com',
        //     'testing email',
        //     'Hey! how you doin?'
        // )
    });
}

setUpAndStartServer();