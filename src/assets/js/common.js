   class Cookie {
    constructor(name, value, days) {
      this.name = name; //存储名
      this.value = value; //存储内容
      this.days = days //时间
    }
    set(name = this.name, value = this.value, days) {
      var d = new Date();
      if (days == null) {
        days = 1;
      }
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    }
    get(name = this.name) {
      var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
      return v ? v[2] : null;
    }
    delete(name = this.name) {
      this.set(name, "", -1);
    }
    clear() {
      let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      if (keys) {
        for (let i = keys.length; i--;)
          document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
      }
    }
  }
  class History {
    set(){
      new Cookie().set("back",new Commit().encode(window.location.href))
    }
    get(){
      window.location.href=new Commit().decode(new Cookie().get("back"))
      //window.history.go(0)    
      new Cookie().delete("back")
    }
  }
  export default {
    Cook: new Cookie(),
    baseUrl: process.env.NODE_ENV=="development"?"":"http://"+location.host+"/  index.php/",
    back:new History(),
  }