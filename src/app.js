////////////requier modules

const express = require('express')
const path = require('path')
const hbs = require('hbs')
const news = require('./tools/news')

// news('eg',(error,data)=>{
//     console.log('Error:' + error)
//     console.log('data:' + data)
// })
///// iniit port number
const port = process.env.PORT || 5000

const app = express()
/// static path for static file
const public = path.join(__dirname,'../puplic')

app.use(express.static(public))

///// serve dynaic files
app.set('view engine','hbs')
const viewsPath = path.join(__dirname,'../templates/views') 
app.set('views',viewsPath)
const partils = path.join(__dirname,'../templates/partils')
hbs.registerPartials(partils)

// request
app.get('/news',(req,res)=>{
    // console.log(req.query)
    if(!req.query.country){
       return res.send({
            error:'You Must Enter Country Name'
        })
    }
       news(req.query.country,(error,data)=>{
        // console.log(data)
        if(error){
            return res.send({error})
        }
            res.render('news',{
             value:data.news
            
            })
        
       })

})

app.listen(port,()=>{
    console.log('listen at port; 5000')
})