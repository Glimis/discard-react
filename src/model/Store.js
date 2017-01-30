import  'fetch-polyfill'
import _ from 'lodash'
function json2url(json)
{
  var arr=[];
  
  for(var i in json)
  {
    var v=json[i];
    if(_.isObject(v)){
      v=JSON.stringify(v);
    }
    arr.push(i+'='+v);
  }
  
  return arr.join('&');
}

export default  class Store  {

  load(params){
     var self=this;
    var get=this.proxy().get;
    return new Promise(function(resolve, reject) {
      if(!get)return;
     get=get+"?"+json2url(params);
     
      fetch(get,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
        .then(function(response) { 
            return response.json();  
        }).then(function(json) {  
          self.setData(json)
          resolve(json);
        }); 
    })
  }
  
  save(){
    var post=this.proxy().post;
    var body=JSON.stringify(this)
    if(!post)return;
      fetch(post,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: body
      })
      .then(function(response) { 
          return response.json();  
      }).then(function(json) {  
        self.setData(json)
      }); 
  }
  setData(data){
    Object.assign(this,data)
  }
}


