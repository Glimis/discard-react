import  'fetch-polyfill'

function getUrl(url,params){
    return url.replace(/:([^\/?#]*)/g,function(v,key){
      return params[key]||v;
    })
}

export default  class Model  {

  load(params={}){
    var self=this;
    return new Promise(function(resolve, reject) {
      var get=self.proxy().get;
      if(!get)return;
      get=getUrl(get,params);
      get=get+"?cb="+JSON.stringify(params);
      fetch(get)
        .then(function(response) { 
            return response.json();  
        }).then(function(json) {  
          self.setData(json)
          resolve(json)
        }); 
    });  
  }
  
  save(params={}){
    var post=this.proxy().post;
    var body=JSON.stringify(this)
    if(!post)return;
    post=getUrl(post,params);
    var self=this;
    return new Promise(function(resolve, reject) {
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
          self.setData(json);
          resolve(json)
        }); 
    })
  }
  setData(data){
    Object.assign(this, data);
  }

  toJson(){
    debugger
  }
}


