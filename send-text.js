const webhookurl = ""
  
const msg = {
  "username": "",
  "avatar_url": "",
  "content": "",
}
  
fetch(webhookurl, { 
   "method":"POST",
   "headers" : {
   "content-type": "application/json"
   },
   "body": JSON.stringify(msg)
})
