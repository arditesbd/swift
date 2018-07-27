var db=require('../dbconnection');

var member={

getAllmembers:function(callback){

return db.query("Select * from member",callback);

},
getmemberByMember_id:function(member_id,callback){

    return db.query("select * from member where member_id=?",[member_id],callback);
},
addmember:function(member,callback){
   console.log("inside service");
   console.log(member);
return db.query("Insert into member values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[member.member_id,member.member_no,member.shop_no,member.email,member.name,member.name_kana,member.zip,member.pref,member.address1,member.address2,member.tel,member.year,member.month,member.day,member.sex,member.mail_flg,member.tooth_flg,member.comment,member.kanri_comment,member.password,member.intro,member.old_login_id,member.member_flg,member.old_reserve_comm,member.insert_date,member.update_date],callback);
//return db.query("insert into member(member_id,Title,Status) values(?,?,?)",[member1,member1.Title,member1.Status],callback);
},
deletemember:function(member_id,callback){
    return db.query("delete from member where member_id=?",[member_id],callback);
},
//updatemember:function(member_id,member,callback){
 //   return  db.query("update member set Title=?,Status=? where member_id=?",[member.Title,member.Status,member_id],callback);
//},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].member_id;
   }
   return db.query("delete from member where member_id in (?)",[delarr],callback);
}
};
module.exports=member;