const assert = require("power-assert")

const handler = require("../handler");

describe("BACKLOG API",function(){
    this.timeout(200000)
    it("SHOULD ADD TASK",(done)=>{

        const event = {
            body: '{"created":"2016-10-22T05:46:44Z","project":{"archived":false,"projectKey":"TEST","name":"TestProject","chartEnabled":false,"id":100,"subtaskingEnabled":false},"id":10,"type":1,"content":{"summary":"test issue","key_id":100,"customFields":[],"dueDate":"","description":"test description","priority":{"name":"","id":null},"resolution":{"name":"","id":null},"actualHours":null,"issueType":{"color":"null","name":"Bug","displayOrder":null,"id":400,"projectId":null},"milestone":[{"archived":"false","releaseDueDate":"null","name":"prototype release","displayOrder":null,"description":"","id":null,"projectId":null,"startDate":"null"},{"archived":"false","releaseDueDate":"null","name":"alpha release","displayOrder":null,"description":"","id":null,"projectId":null,"startDate":"null"},{"archived":"false","releaseDueDate":"null","name":"beta release","displayOrder":null,"description":"","id":null,"projectId":null,"startDate":"null"},{"archived":"false","releaseDueDate":"null","name":"product release","displayOrder":null,"description":"","id":null,"projectId":null,"startDate":"null"}],"versions":[{"archived":"false","releaseDueDate":"null","name":"Version0.1","displayOrder":null,"description":"","id":null,"projectId":null,"startDate":"null"},{"archived":"false","releaseDueDate":"null","name":"Version0.2","displayOrder":null,"description":"","id":null,"projectId":null,"startDate":"null"},{"archived":"false","releaseDueDate":"null","name":"Version1.0","displayOrder":null,"description":"","id":null,"projectId":null,"startDate":"null"}],"parentIssueId":null,"estimatedHours":null,"id":100,"assignee":null,"category":[{"name":"Category1","displayOrder":null,"id":null},{"name":"Category2","displayOrder":null,"id":null}],"startDate":"","status":{"name":"In Progress","id":2}},"notifications":[],"createdUser":{"nulabAccount":null,"name":"t.goto","mailAddress":null,"id":227,"roleType":1,"userId":null}}'
        }
        handler.backlog(event,null,function(dummy,response){
            try{
                assert(response.statusCode === 200)
                done()
            }catch(e){
                done(e)
            }
        })
    })
})