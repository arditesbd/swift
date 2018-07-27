var db=require('../dbconnection');

var member_pay={

getAllmember_pays:function(callback){

return db.query("Select * from member_pay",callback);

},
getmember_payByNo:function(no,callback){

    return db.query("select * from member_pay where no=?",[no],callback);
},
addmember_pay:function(member_pay,callback){
   console.log("inside service");
   console.log(member_pay);
return db.query("Insert into member_pay values(?,?,?,?,?)",[member_pay.no,member_pay.detail_no,member_pay.id,member_pay.fee,member_pay.buy_date],callback);
//return db.query("insert into member_pay(no,send_no,member_id) values(?,?,?)",[member_pay1,member_pay1.send_no,member_pay1.member_id],callback);
},
deletemember_pay:function(no,callback){
    return db.query("delete from member_pay where no=?",[no],callback);
},
//updatemember_pay:function(no,member_pay,callback){
  //  return  db.query("update member_pay set send_no=?,member_id=? where no=?",[member_pay.send_no,member_pay.member_id,no],callback);
//},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].no;
   }
   return db.query("delete from member_pay where no in (?)",[delarr],callback);
}
};
module.exports=member_pay;