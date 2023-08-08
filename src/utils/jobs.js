const cron = require("node-cron");
const emailServie = require('../services/email-service');
const sender = require('../config/emailConfig');

const setupJobs = () => {

    cron.schedule('*/2 * * * *', async () => {
        const response = await emailServie.fetchPendingEmails();
        response.forEach((email) => {
            sender.sendMail({
                to:email.recepientEmail,
                subject:email.subject,
                text:email.content
            }, async (err, data) => {

                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                    emailServie.updateTicket(email.id, {status:"Success"});
                }
            });
        });
        console.log(response);
    });
}

module.exports = setupJobs