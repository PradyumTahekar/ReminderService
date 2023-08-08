const TicketService = require('../services/email-service');

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success:true,
            data:response,
            error:{},
            message: "Successfully registered an email"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:{},
            error:{error},
            message: "Not successfully registered an email"
        })
    }
}

module.exports = {
    create,
}