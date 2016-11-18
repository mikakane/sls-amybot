'use strict';

const request = require("superagent")

module.exports.backlog = require("./src/actions/backlog.js");

module.exports.jiho = require("./src/actions/jiho.js");

// module.exports.line = (event, context, callback) => {
//   request
//       .post('https://notify-api.line.me/api/notify')
//       .send({ message: 'ねえねぇ' })
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('Authorization', 'Bearer '+TOKEN)
//       .end(function(err, res){
//         const response = {
//           statusCode: 200,
//           body: JSON.stringify({
//             message: 'Go Serverless v1.0! Your function executed successfully!',
//           })
//         };
//         callback(null, response);
//       })
// };

