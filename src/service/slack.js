const request = require("superagent")

const setting = require("../../setting");

const slackSetting = {
    token: setting.SLACK_TOKEN,
    icon_emoji: setting.SLACK_ICONEMOJI,
    username: setting.SLACK_USERNAME
};

const say = (channel,text,attachments)=>{
    query = Object.assign(slackSetting,{channel,text})
    if(attachments){
        query.attachments = JSON.stringify([attachments]);
    }
    return new Promise((resolve)=>{
        request
            .get('https://slack.com/api/chat.postMessage')
            .query(query)
            .end(function(err, res){
                if(err){
                    throw err
                }
                if(res.body.ok !== true){
                    throw new Error("slack error response:"+res.body.error)
                }
                resolve(res)
            })
    })
}

const response = (channel,text,attachments) => {
    return new Promise(function(resolve){
        say(channel,text,attachments).then(function(res){
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Your function executed successfully!',
                }),
            };
            resolve(response);
        }).catch(function(e){
            const response = {
                statusCode: 400,
                body: JSON.stringify({
                    message: 'With your function are there something wrong!',
                }),
            };
            resolve(response);
        })
    })
}

module.exports = {say,response}