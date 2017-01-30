import routerFn from './default' 
var router = routerFn('order');

//检测
// router
// .get('/checkout',async function(req, res, next) {
//     if(!req.query.name||!req.query.password){
//       res.json({status:0});
//       return;
//     }
//     var data=await M.account.find({
//         username:req.query.name,
//         password:req.query.password
//     });
//     if(data.length>0){
//       res.json({status:1});
//     }else{
//       res.json({status:0});
//     }
// })


export default  router