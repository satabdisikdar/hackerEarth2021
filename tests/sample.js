var supertest = require('supertest');
const website = 'https://reqres.in/';
const request = supertest(website); 
let webUrl;

try{
  test("GET user output", async done =>{
    await request.get(`api/users`).expect(200).then((response) =>{
          console.log("GET RESPONSE : ", response.body);
          webUrl= response.body.data[0].avatar;
      })
  })
}
catch(err){
  console.log("Exception: ", err)
}

module.exports = {
    'Demo test' : function(browser) {
      browser
        .url(webUrl)
        .waitForElementVisible('body').pause(3000)
        .end();
    
    }
  };

  
    
