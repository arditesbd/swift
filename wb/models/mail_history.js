var db=require('../dbconnection'); //reference of dbconnection.js
 
var mail_history={
 
getAllmail_historys:function(callback){
 
return db.query("Select * from mail_history",callback);
 
},
 getmail_historyBySend_no:function(send_no,callback){
 
return db.query("select * from mail_history where send_no=?",[send_no],callback);
 },
 addmail_history:function(mail_history,callback){
 return db.query("Insert into mail_history values(?,?,?,?)",[mail_history.send_no,mail_history.subject,mail_history.mail_text, mail_history.insert_date
 	],callback);
 },
 deletemail_history:function(send_no,callback){
  return db.query("delete from mail_history where send_no=?",[send_no],callback);
 },
 updatemail_history:function(send_no,mail_history,callback){
  return db.query("update mail_history set subject=?,mail_text
  	=?,date=? where send_no=?",[mail_history.subject,mail_history.mail_text
  ,mail_history.insert_date,send_no],callback);
 }
 
};
 module.exports=mail_history;