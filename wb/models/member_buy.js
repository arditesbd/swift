var db=require('../dbconnection');

var member_buy = {

getAllmember_buys:function(callback){

return db.query("Select * from member_buy",callback);

},
getmember_buyByBuy_no:function(buy_no,callback){

    return db.query("select * from member_buy where buy_no=?",[buy_no],callback);
},
addmember_buy:function(member,callback){
   console.log("inside service");
   console.log(member);
return db.query("Insert into member_buy values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[member_buy.buy_no,member_buy.member_id,member_buy.shop_no,member_buy.course_no,member_buy.limit_date,member_buy.coupon_id,member_buy.fee,member_buy.discount,member_buy.total_fee,member_buy.finish_flg,member_buy.fee_flg,member_buy.buy_date,member_buy.insert_date,member_buy.update_date],callback);
//return db.query("insert into member(buy_no,Title,Status) values(?,?,?)",[member1,member1.Title,member1.Status],callback);
},
deletemember_buy:function(buy_no,callback){
    return db.query("delete from member_buy where buy_no=?",[buy_no],callback);
},
//updatemember:function(buy_no,member,callback){
 //   return  db.query("update member set Title=?,Status=? where buy_no=?",[member_buy.Title,member_buy.Status,buy_no],callback);
//},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].buy_no;
   }
   return db.query("delete from member_buy where buy_no in (?)",[delarr],callback);
}
};
module.exports=member_buy;