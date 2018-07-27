var db=require('../dbconnection'); //reference of dbconnection.js
 
var daily_weather_info={
 
getAlldaily_weather_infos:function(callback){
 
return db.query("Select * from daily_weather_info",callback);
 
},
 getdaily_weather_infoById:function(id,callback){
 
return db.query("select * from daily_weather_info where id=?",[id],callback);
 },
 adddaily_weather_info:function(daily_weather_info,callback){
 return db.query("Insert into daily_weather_info values(?,?,?,?) limit 1000",[daily_weather_info.id,daily_weather_info.weather,daily_weather_info.shop_no, daily_weather_info.date
 	],callback);
 },
 deletedaily_weather_info:function(id,callback){
  return db.query("delete from daily_weather_info where id=?",[id],callback);
 },
 updatedaily_weather_info:function(id,daily_weather_info,callback){
  return db.query("update daily_weather_info set weather=?, shop_no=? ,date=? where id=?",[daily_weather_info.weather , daily_weather_info.shop_no,daily_weather_info.date,id],callback);
 }
 
};
 module.exports=daily_weather_info;