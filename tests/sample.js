var supertest = require('supertest');
const website = 'https://reqres.in/';
const request = supertest(website);
let webUrl;

try{
  test("GET user output", async done =>{
    await request.get(`api/users`).expect(200).then((response) =>{
          console.log("GET RESPONSE : ", response.body);
          for(let i=0; i<response.body.data.length; i++){
            if(response.body.data[i].id%3 == 0){
              webUrl= response.body.data[i].avatar;
              console.log(webUrl);
              describe('Hit urls',function(){
                test('demo', function(browser){
                browser.url(webUrl).useXpath().waitForElementVisible('//body').assert.elementPresent('//body');
                browser.end();
              } )})                                             
            }
            else{
              console.log("NO URL!  ", response.body.data[i].id);
            }          
      }
  })
  })
}
catch(err){
  console.log("Exception: ", err)
}


  
    
