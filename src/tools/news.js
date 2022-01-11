const request = require('request');

const news = (addres,callback)=>{
    const url = 'https://newsapi.org/v2/top-headlines?country='+addres+'&category=business&apiKey=4ffc289368b34e9597bdb6e18080265b'
    request({url,json:true},(error,response)=>{
        if(error){
            callback('news cannot be reached',undefined)
        }else if(response.body.articles.length == 0){
            callback('you must provied country name & category',undefined)
        }else{
            callback(undefined,{
                news:response.body.articles
            })
        }
    })
}

module.exports=news