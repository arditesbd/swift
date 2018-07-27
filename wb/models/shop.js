var db=require('../dbconnection');

var shop = {

getAllshops:function(callback){

return db.query("Select * from shop",callback);

},
getshopByshop_no:function(shop_no,callback){

    return db.query("select * from shop where shop_no=?",[shop_no],callback);
},
addshop:function(member,callback){
   console.log("inside service");
   console.log(member);
return db.query("Insert into shop values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[shop.shop_no,shop.name,shop.zip,shop.address,shop.city,shop.tel,shop.send_mail,shop.spid,shop.view_flg,shop.insert_date,shop.update_date],callback);
//return db.query("insert into member(shop_no,Title,Status) values(?,?,?)",[member1,member1.Title,member1.Status],callback);
},
deleteshop:function(shop_no,callback){
    return db.query("delete from shop where shop_no=?",[shop_no],callback);
},
//updatemember:function(shop_no,member,callback){
 //   return  db.query("update member set Title=?,Status=? where shop_no=?",[shop.Title,shop.Status,shop_no],callback);
//},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].shop_no;
   }
   return db.query("delete from shop where shop_no in (?)",[delarr],callback);
}
};
module.exports=shop;