var express = require('express');
var router = express.Router();
var member_buy=require('../models/member_buy');

router.get('/:buy_no?',function(req,res,next){

if(req.params.buy_no){

    member_buy.getmember_buyByBuy_no(req.params.buy_no,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 member_buy.getAllmember_buys(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
}
});
router.post('/',function(req,res,next){

        member_buy.addmember_buy(req.body,function(err,count){

            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});
 router.post('/:buy_no',function(req,res,next){
  member_buy.deleteAll(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});
router.delete('/:buy_no',function(req,res,next){

        member_buy.deletemember_buy(req.params.buy_no,function(err,count){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});
router.put('/:buy_no',function(req,res,next){

    member_buy.updatemember_buy(req.params.buy_no,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;