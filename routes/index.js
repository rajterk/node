const express=require('express')
const router=express.Router()

router.get('/',(req,res,next)=>{
    res.send('Hello from routes')
})
router.get('/home',(req,res,next)=>{

    res.render('home',null)
})
router.get('/json',(req,res,next)=>{

    res.json({
        greeting:'Hello from routes folder !'
    })

    
})

module.exports=router