const slack = require("../service/slack")
const moment = require("moment-timezone");

module.exports = (event, context, callback) => {

    const hour = moment().tz("Asia/Tokyo").hour();

    const textList = {
        9 : "おはようございます。\n9時をお知らせします。\n",
        10 : "10時をお知らせします。\n今日も1日頑張りましょう！",
        11 : "11時をお知らせします。",
        12 : "12時をお知らせします。",
        13 : "進捗はいかがですか？\n13時になりました。\n",
        14 : "14時です。\nお昼はもうとりましたか？",
        15 : "15時をお知らせします。",
        16 : "16時をお知らせします。",
        17 : "17時です。\n進捗をまとめて帰宅の準備を始めましょう。",
        18 : "18時をお知らせします。",
        19 : "お疲れ様でした！19時です。\n明日も1日よろしくお願いします。",
        20 : "20時をお知らせします。",
    }
    if(textList[hour]){
        slack.response("#chatbox",textList[hour]).then(function(response){
            callback(null)
        }).catch(function(e){
            callback(e)
        })
    }else{
        callback(null)
    }
};