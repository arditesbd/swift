var db=require('../dbconnection'); //reference of dbconnection.js
 
var mail_sig={
 
getAllMail_sigs:function(callback){
 
return db.query("Select * from mail_sig",callback);
 
},
 getmail_sigBySig_no:function(sig_no,callback){
 
return db.query("select * from mail_sig where sig_no=?",[sig_no],callback);
 },
 addmail_sig:function(mail_sig,callback){
 return db.query("Insert into mail_sig values(?,?,?,?)",[mail_sig.sig_no,mail_sig.company_id,mail_sig.sig, mail_sig.insert_date
 	],callback);
 },
 deletemail_sig:function(sig_no,callback){
  return db.query("delete from mail_sig where sig_no=?",[sig_no],callback);
 },
 updatemail_sig:function(sig_no,mail_sig,callback){
  return db.query("update mail_sig set company_id=?,sig
  	=?,date=? where sig_no=?",[mail_sig.company_id,mail_sig.sig
  ,mail_sig.insert_date,sig_no],callback);
 }
 
};
 module.exports=mail_sig;