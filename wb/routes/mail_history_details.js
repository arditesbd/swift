var express = require('express');
var router = express.Router();
var mail_history_detail=require('../models/mail_history_detail');

router.get('/:no?',function(req,res,next){

if(req.params.no){

    mail_history_detail.getmail_history_detailByNo(req.params.no,function(err,rows){

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

 mail_history_detail.getAllmail_history_details(function(err,rows){

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

        mail_history_detail.addmail_history_detail(req.body,function(err,count){

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
 router.post('/:no',function(req,res,next){
  mail_history_detail.deleteAll(req.body,function(err,count){
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
router.delete('/:no',function(req,res,next){

        mail_history_detail.deletemail_history_detail(req.params.no,function(err,count){

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
router.put('/:no',function(req,res,next){

    mail_history_detail.updatemail_history_detail(req.params.no,req.body,function(err,rows){

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