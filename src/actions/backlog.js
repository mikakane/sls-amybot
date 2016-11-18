const backlog = require("../service/backlog")
const slack = require("../service/slack")


module.exports = (event, context, callback) => {
    const backlogData = JSON.parse(event.body);

    const attachment = backlog.attachment(backlogData);

    slack.say("#chatbox","課題の更新をお知らせします。",attachment).then(function(res){
        // console.log(res)
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully!',
            }),
        };
        callback(null, response);
    }).catch(function(e){
        console.log("error")
        // console.log(e)
        const response = {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully!',
            }),
        };
        callback(null, response);
    })


    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};