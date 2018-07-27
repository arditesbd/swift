var db=require('../dbconnection');

var mail_history_detail={

getAllmail_history_details:function(callback){

return db.query("Select * from mail_history_detail",callback);

},
getmail_history_detailByNo:function(no,callback){

    return db.query("select * from mail_history_detail where no=?",[no],callback);
},
addmail_history_detail:function(mail_history_detail,callback){
   console.log("inside service");
   console.log(mail_history_detail);
return db.query("Insert into mail_history_detail values(?,?,?)",[mail_history_detail.no,mail_history_detail.send_no,mail_history_detail.member_id],callback);
//return db.query("insert into mail_history_detail(no,send_no,member_id) values(?,?,?)",[mail_history_detail1,mail_history_detail1.send_no,mail_history_detail1.member_id],callback);
},
deletemail_history_detail:function(no,callback){
    return db.query("delete from mail_history_detail where no=?",[no],callback);
},
updatemail_history_detail:function(no,mail_history_detail,callback){
    return  db.query("update mail_history_detail set send_no=?,member_id=? where no=?",[mail_history_detail.send_no,mail_history_detail.member_id,no],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].no;
   }
   return db.query("delete from mail_history_detail where no in (?)",[delarr],callback);
}
};
module.exports=mail_history_detail;