(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),s=a.n(r),o=(a(82),a(40)),l=a(31),c=a(12),u=a(10),d=a(14),g=a(15),p=a(16),m=a(67),h=a.n(m),f=a(143),b=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),i.a.createElement("p",null,"Welcome to Squiggler"),i.a.createElement(f.a,{href:"/login",variant:"extended","aria-label":"go",color:"primary"},"Enter the Fowwest"))}}]),t}(n.Component),k=a(24),y=a.n(k),E=a(146),v=a(154),S=a(147),j=a(145),w=a(71),q=a(109),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={handle:"",password:"",redirect:!1},a.setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return i.a.createElement(l.a,{to:"/squiggles"})},a.handleHandleChange=function(e){a.setState({handle:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),y.a.post("https://chitter-backend-api.herokuapp.com/users",{user:{handle:a.state.handle,password:a.state.password}}).then(function(e){y.a.post("https://chitter-backend-api.herokuapp.com/sessions",{session:{handle:a.state.handle,password:a.state.password}}).then(function(e){sessionStorage.setItem("user_id",e.data.user_id),sessionStorage.setItem("session_key",e.data.session_key),a.setRedirect()})})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.renderRedirect(),i.a.createElement(q.a,{style:{margin:"30px",padding:"30px"}},i.a.createElement(w.a,{style:{padding:"0.5em 0"},component:"h1",variant:"h5"},"Join the Fowwest"),i.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},i.a.createElement(j.a,{container:!0,spacing:2},i.a.createElement(j.a,{item:!0,xs:12},i.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Secret Squiggle Alias",name:"email",autoComplete:"email",onChange:this.handleHandleChange})),i.a.createElement(j.a,{item:!0,xs:12},i.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handlePasswordChange}))),i.a.createElement(E.a,{style:{margin:"1.5em 0"},type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Sign Up"),i.a.createElement(j.a,{container:!0,justify:"flex-end"},i.a.createElement(j.a,{item:!0},i.a.createElement(S.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))))}}]),t}(i.a.Component),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={handle:"",password:"",redirect:!1},a.setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return i.a.createElement(l.a,{to:"/squiggles"})},a.handleHandleChange=function(e){a.setState({handle:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),y.a.post("https://chitter-backend-api.herokuapp.com/sessions",{session:{handle:a.state.handle,password:a.state.password}}).then(function(e){sessionStorage.setItem("user_id",e.data.user_id),sessionStorage.setItem("session_key",e.data.session_key),a.setRedirect()})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.renderRedirect(),i.a.createElement(q.a,{style:{margin:"30px",padding:"30px"}},i.a.createElement(w.a,{style:{padding:"0.5em 0"},component:"h1",variant:"h5"},"Enter the Fowwest"),i.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},i.a.createElement(j.a,{container:!0,spacing:2},i.a.createElement(j.a,{item:!0,xs:12},i.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Secret Squiggle Alias",name:"email",autoComplete:"email",onChange:this.handleHandleChange})),i.a.createElement(j.a,{item:!0,xs:12},i.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handlePasswordChange}))),i.a.createElement(E.a,{style:{margin:"1.5em 0"},type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Log In"),i.a.createElement(j.a,{container:!0,justify:"flex-end"},i.a.createElement(j.a,{item:!0},i.a.createElement(S.a,{href:"/signup",variant:"body2"},"No account? Sign up here"))))))}}]),t}(i.a.Component),C=a(22),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={squiggle:""},a.handleChange=function(e){a.setState({squiggle:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.createSquiggle(a.state.squiggle),a.setState({squiggle:""})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(q.a,{style:{margin:"30px 0",padding:"20px 0px"}},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(j.a,{container:!0,spacing:1,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(j.a,{item:!0,xs:12},i.a.createElement(v.a,{id:"outlined-multiline-flexible",label:"Write your squiggle here",multiline:!0,fullWidth:!0,rows:"2",rowsMax:"4",variant:"outlined",style:{margin:"20px auto"},onChange:this.handleChange})),i.a.createElement(j.a,{item:!0,xs:12},i.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary"},"Submit")))))}}]),t}(i.a.Component),L=a(150),A=a(149),I=a(151),W=a(152),F=a(69),M=a.n(F),R=a(148),D=a(156),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={isLiked:!1,likes:a.props.squiggle.likes,user_id:sessionStorage.getItem("user_id"),session_key:sessionStorage.getItem("session_key"),user_object:null},a.findUser=function(){a.state.likes.forEach(function(e){e.user.id.toString(10)===a.state.user_id&&(a.setState({isLiked:!0}),a.setState({user_object:e}))})},a.handleClick=function(e){a.state.isLiked=!a.state.isLiked,a.props.toggleLike(a.state.isLiked),!0===a.state.isLiked?a.addLike():a.deleteLike()},a.addLike=function(){y.a.put("https://chitter-backend-api.herokuapp.com/peeps/".concat(a.props.squiggle.id,"/likes/").concat(a.state.user_id),null,{headers:{Authorization:"Token token=".concat(a.state.session_key)}}).then(function(e){console.log(e),console.log(e.data),a.setState({likes:[].concat(Object(C.a)(a.state.likes),[e.data])}),a.setState({user_object:e.data})})},a.deleteLike=function(){y.a.delete("https://chitter-backend-api.herokuapp.com/peeps/".concat(a.props.squiggle.id,"/likes/").concat(a.state.user_id),{headers:{Authorization:"Token token=".concat(a.state.session_key)}}).then(function(e){var t=Object(C.a)(a.state.likes),n=t.indexOf(a.state.user_object);-1!==n&&(t.splice(n,1),a.setState({likes:t}))})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.findUser()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{variant:"subtitle1",color:"primary"},"Liked by ",this.state.likes.map(function(e){return i.a.createElement("span",{key:e.user.id},"\ud83c\udf30",e.user.handle," ")})),i.a.createElement(R.a,{control:i.a.createElement(D.a,{checked:this.state.isLiked,onClick:this.handleClick}),label:"Like this squiggle"}))}}]),t}(i.a.Component),z=a(70),T=a.n(z),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(e){a.props.deleteSquiggle()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.isMine?i.a.createElement(f.a,{style:{margin:"10px 0px 0px 30px"},size:"small","aria-label":"delete",onClick:this.handleClick},i.a.createElement(T.a,null)):i.a.createElement(i.a.Fragment,null)}}]),t}(i.a.Component),J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={isMine:!1,user_id:sessionStorage.getItem("user_id")},a.toggleLike=function(e){a.props.toggleLike(e)},a.prettify=function(e){return e.slice(0,10)+" @ "+e.slice(11,19)},a.deleteSquiggle=function(){a.props.deleteSquiggle(a.props.squiggle.id)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.squiggle.user.id.toString(10)===this.state.user_id&&this.setState({isMine:!0})}},{key:"render",value:function(){var e=this.props.squiggle;return i.a.createElement(j.a,{item:!0,key:e.id,xs:12},i.a.createElement(A.a,{component:"a",href:"#"},i.a.createElement(L.a,null,i.a.createElement(j.a,{container:!0,spacing:0},i.a.createElement(j.a,{item:!0,xs:8},i.a.createElement("div",null,i.a.createElement(I.a,null,i.a.createElement(w.a,{component:"h2",variant:"h5"},"\ud83c\udf30",e.user.handle),i.a.createElement(w.a,{variant:"subtitle1",color:"textSecondary"},this.prettify(e.created_at)),i.a.createElement(w.a,{variant:"subtitle1",paragraph:!0},e.body),i.a.createElement(P,{squiggle:e,toggleLike:this.toggleLike}),i.a.createElement(H,{isMine:this.state.isMine,deleteSquiggle:this.deleteSquiggle})))),i.a.createElement(j.a,{item:!0,xs:4},i.a.createElement(W.a,{image:M.a,style:{height:"100%"},title:"Image title"}))))))}}]),t}(i.a.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).toggleLike=function(e){a.props.toggleLike(e)},a.deleteSquiggle=function(e){a.props.deleteSquiggle(e)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.squiggles;return i.a.createElement(j.a,{container:!0,spacing:4},t.map(function(t){return i.a.createElement(J,{key:t.id,squiggle:t,toggleLike:e.toggleLike,deleteSquiggle:e.deleteSquiggle})}))}}]),t}(i.a.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={squiggles:[],user_id:sessionStorage.getItem("user_id"),session_key:sessionStorage.getItem("session_key")},a.createSquiggle=function(e){y.a.post("https://chitter-backend-api.herokuapp.com/peeps",{peep:{user_id:a.state.user_id,body:e}},{headers:{Authorization:"Token token=".concat(a.state.session_key),"Content-Type":"application/json"}}).then(function(e){console.log(e),console.log(e.data),a.setState({squiggles:[e.data].concat(Object(C.a)(a.state.squiggles))})})},a.toggleLike=function(e){console.log("fowwest"+e)},a.deleteSquiggle=function(e){y.a.delete("https://chitter-backend-api.herokuapp.com/peeps/".concat(e),{headers:{Authorization:"Token token=".concat(a.state.session_key)}}).then(function(t){console.log(t),a.deleteSquiggleFromState(e)})},a.deleteSquiggleFromState=function(e){var t=a.state.squiggles.filter(function(t){return t.id!==e});a.setState({squiggles:t})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://chitter-backend-api.herokuapp.com/peeps").then(function(t){return e.setState({squiggles:t.data})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(_,{createSquiggle:this.createSquiggle}),i.a.createElement(N,{squiggles:this.state.squiggles,toggleLike:this.toggleLike,deleteSquiggle:this.deleteSquiggle}))}}]),t}(i.a.Component),B=a(157),V=a(153);a(107);var $=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(B.a,null),i.a.createElement(V.a,{maxWidth:"sm"},i.a.createElement(o.a,null,i.a.createElement(l.b,{exact:!0,path:"/",component:b}),i.a.createElement(l.b,{exact:!0,path:"/signup",component:O}),i.a.createElement(l.b,{exact:!0,path:"/login",component:x}),i.a.createElement(l.b,{path:"/squiggles",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,a){e.exports=a.p+"static/media/acorn.4ee5f938.svg"},69:function(e,t,a){e.exports=a.p+"static/media/squiggle_default.ca58fb5a.jpeg"},77:function(e,t,a){e.exports=a(108)},82:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.9d0bc706.chunk.js.map