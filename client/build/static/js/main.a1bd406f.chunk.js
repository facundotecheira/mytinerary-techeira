(this["webpackJsonpmytinerary-techeira"]=this["webpackJsonpmytinerary-techeira"]||[]).push([[0],{105:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r.n(a),s=r(25),c=r.n(s),i=(r(50),r(51),r(13)),o=r(14),u=r(16),l=r(15),j=r(7),d=r(6),p=r(3),b=r.n(p),m=r(8),h=r(9),O={registrarUsuario:function(e,t,r,a,n,s,c){return function(){var i=Object(m.a)(b.a.mark((function i(o,u){var l;return b.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,h.post("https://mytinerary-techeira.herokuapp.com/api/auth/signUp",{firstName:e,lastName:t,email:r,password:a,url:n,country:s,google:c});case 3:if(!(l=i.sent).data.success||l.data.error){i.next=10;break}return localStorage.setItem("token",l.data.response.token),o({type:"USER",payload:l.data.response._doc}),i.abrupt("return",{errores:[{message:"User successfully registered"}]});case 10:return i.abrupt("return",{errores:[{message:l.data.error}]});case 11:i.next=15;break;case 13:i.prev=13,i.t0=i.catch(0);case 15:case"end":return i.stop()}}),i,null,[[0,13]])})));return function(e,t){return i.apply(this,arguments)}}()},iniciarSesion:function(e,t){return function(){var r=Object(m.a)(b.a.mark((function r(a,n){var s;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,h.post("https://mytinerary-techeira.herokuapp.com/api/auth/signIn",{email:e,password:t});case 3:if(!(s=r.sent).data.success||s.data.error){r.next=10;break}return localStorage.setItem("token",s.data.response.token),a({type:"USER",payload:s.data.response._doc}),r.abrupt("return",{errores:[]});case 10:return r.abrupt("return",{errores:[{message:s.data.error}]});case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),console.error(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(e,t){return r.apply(this,arguments)}}()},cerrarSesion:function(){return function(e,t){e({type:"LOG_OUT_USER"})}},signInLS:function(e){return function(){var t=Object(m.a)(b.a.mark((function t(r,a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.get("https://mytinerary-techeira.herokuapp.com/api/verifyToken",{headers:{Authorization:"Bearer "+e}});case 3:n=t.sent,r({type:"USER",payload:n.data}),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",r({type:"LOG_OUT_USER"}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}()}},f=O,x=r(1),g={cerrarSesion:f.cerrarSesion},v=Object(d.b)((function(e){return{usuario:e.user.usuario}}),g)((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)(j.b,{to:"/",className:"navbar-brand",children:Object(x.jsx)("img",{className:"iconbrand",src:"./assets/logo3.png",alt:"iconbrand"})}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon"})}),Object(x.jsxs)("div",{className:"collapse navbar-collapse menuH",id:"navbarSupportedContent",children:[Object(x.jsxs)("ul",{className:"navbar-nav me-auto menuHC ",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(j.b,{to:"/",className:"nav-link active","aria-current":"page",children:"Home"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(j.b,{to:"/cities",className:"nav-link active",children:"Cities"})})]}),Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[e.usuario?Object(x.jsxs)("p",{className:"mt-3",children:["Welcome! ",e.usuario.firstName]}):"",Object(x.jsx)("ul",{className:"navbar-nav containeruser mb-2 mb-lg-0",children:Object(x.jsxs)("li",{className:"nav-item dropdown ",children:[Object(x.jsx)("a",{className:"nav-link dropdown-toggle ",href:"#s",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:e.usuario?Object(x.jsx)("img",{className:"imguser ms-4 mt-2",src:e.usuario.url,alt:"usericon"}):Object(x.jsx)("img",{className:"imguser",src:"/assets/person-circle.svg",alt:"usericon"})}),Object(x.jsxs)("ul",{className:"dropdown-menu menuUser","aria-labelledby":"navbarDropdown",children:[!e.usuario&&Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/signin",className:"dropdown-item",children:"Sign in"})}),!e.usuario&&Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/signup",className:"dropdown-item",children:"Sign up"})}),e.usuario&&Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/",className:"dropdown-item signout-link ",children:Object(x.jsx)("p",{className:"signout",onClick:function(){return e.cerrarSesion()},children:" Sign out"})})})]})]})})]})]})]})})})})),y=function(){return Object(x.jsxs)("div",{className:"containerHero",children:[Object(x.jsx)("video",{className:"video",src:"./assets/Photographer.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(x.jsx)("h1",{children:"Mytinerary"}),Object(x.jsxs)("div",{className:"containerH3",children:[Object(x.jsx)("h3",{className:"heroH3",children:"Find your perfect trip,"}),Object(x.jsx)("h3",{children:"designed by insiders who know and love their cities!"})]}),Object(x.jsx)("div",{children:Object(x.jsx)(j.b,{to:"/cities",className:"buttonHero",children:"GET STARTED"})})]})},N=r(5),C=(r(78),r(79),r(44)),w=r.n(C),k=[{ruta:"japang.jpg",title:"Tokyo"},{ruta:"canada.jpg",title:"Vancouver"},{ruta:"norway.jpg",title:"Oslo"},{ruta:"Stockholm.jpg",title:"Stockholm"},{ruta:"copenhagen.jpg",title:"Copenhagen"},{ruta:"helsinki.jpg",title:"Helsinki"},{ruta:"hamburg.jpg",title:"Hamburg"},{ruta:"zurich.jpg",title:"Zurich"},{ruta:"seul.jpg",title:"Seoul"},{ruta:"paris.jpg",title:"Paris"},{ruta:"newyork.jpg",title:"New York"},{ruta:"venecia.jpg",title:"Venice"}],I=Object(d.b)((function(e){return{fechita:e.galery.fecha}}))((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{className:"h1Galery",children:"Popular MYtineraries"}),Object(x.jsx)("div",{className:"divGalery",children:Object(x.jsx)(w.a,Object(N.a)(Object(N.a)({},{arrows:!0,infinite:!0,rows:2,slidesPerRow:2,autoplay:!0,speed:0,autoplaySpeed:4e3,cssEase:"linear",className:"slides",pauseOnHover:!1,swipe:!1,responsive:[{breakpoint:1024,settings:{rows:2,slidesPerRow:2,infinite:!0}},{breakpoint:768,settings:{dots:!0,arrows:!1}},{breakpoint:600,settings:{rows:4,slidesPerRow:1,dots:!0,arrows:!1}},{breakpoint:480,settings:{rows:4,slidesPerRow:1,dots:!0,arrows:!1}},{breakpoint:400,settings:{rows:4,slidesPerRow:1,dots:!0,arrows:!1}},{breakpoint:360,settings:{rows:4,slidesPerRow:1,arrows:!1,dots:!0}}]}),{},{children:k.map((function(e){return Object(x.jsx)("div",{className:"galery",children:Object(x.jsxs)("div",{className:"galGalery",children:[Object(x.jsx)("img",{className:"imgGalery",alt:e.title,src:"./assets/".concat(e.ruta)},e.title),Object(x.jsx)("div",{className:"titleGalery",children:Object(x.jsx)("h2",{children:e.title},e.title)})]},e.title)},e.title)}))}))})]})})),S=function(){return Object(x.jsxs)("footer",{children:[Object(x.jsxs)("div",{className:"navegation",children:[Object(x.jsx)(j.b,{to:"/",children:"Home"}),Object(x.jsx)(j.b,{to:"/cities",children:"Cities"}),Object(x.jsx)("a",{href:"#a",children:"Sign in"}),Object(x.jsx)("a",{href:"#a",children:"Sign up"})]}),Object(x.jsx)("div",{className:"copy",children:"Copyright \xa9 Techeira Facundo"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{className:"redesIcon",src:"/assets/instagram.png",alt:"instagram"}),Object(x.jsx)("img",{className:"redesIcon",src:"/assets/wpp.png",alt:"wpp"}),Object(x.jsx)("img",{className:"twitter",src:"/assets/twitter.png",alt:"twitter"})]})]})},E=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return window.scrollTo(0,0),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsx)(y,{}),Object(x.jsx)(I,{}),Object(x.jsx)(S,{})]})}}]),r}(n.a.Component),_=r(10),T=r(9),A=r.n(T),R={getCities:function(){return function(){var e=Object(m.a)(b.a.mark((function e(t,r){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://mytinerary-techeira.herokuapp.com/api/galery");case 2:a=e.sent,n=a.data.response,t({type:"GET_ALL_CITIES",payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},filtercities:function(e){return function(t,r){t({type:"FILTER_CITIES",payload:e})}},getOneCity:function(e){return function(){var t=Object(m.a)(b.a.mark((function t(r,a){var n,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("https://mytinerary-techeira.herokuapp.com/api/galery/".concat(e));case 2:n=t.sent,s=n.data.response,r({type:"GET_ONE_CITY",payload:s});case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}},G=R,L={filtrarcities:G.filtercities},U=Object(d.b)((function(e){return{auxiliar:e.galery.auxiliar}}),L)((function(e){var t=Object(a.useRef)(),r=Object(a.useState)(e.cities),n=Object(_.a)(r,2),s=n[0],c=n[1];Object(a.useEffect)((function(){e.filtrarcities(t.current.value)}),[]),Object(a.useEffect)((function(){s!==e.auxiliar&&c(e.auxiliar)}),[e.auxiliar]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{className:"h1Galery",children:"All Cities"}),Object(x.jsxs)("div",{className:"citiesH2Input",children:[Object(x.jsx)("h2",{className:"text-center",children:"FIND YOUR NEW ADVENTURE!"}),Object(x.jsx)("input",{className:"citiInput",type:"text",ref:t,onChange:function(){e.filtrarcities(t.current.value)},placeholder:" Search a city or Country"})]}),Object(x.jsx)("div",{className:"citiesGalery",children:s.length>0?s.map((function(e){return Object(x.jsx)("div",{className:"galery",children:Object(x.jsxs)("div",{className:"galGalery",children:[Object(x.jsx)("img",{className:"imgGalery",alt:e.title,src:"./assets/".concat(e.path)},e.title),Object(x.jsxs)("div",{className:"titleGalery",children:[Object(x.jsxs)("h2",{children:[e.title,", ",e.country]},e.title),Object(x.jsx)(j.b,{className:"linktocity",to:"/cities/".concat(e._id),children:"Read more"})]})]},e.title)},e.title)})):Object(x.jsx)("div",{className:"containerEmpty",children:Object(x.jsx)("div",{className:"ayudaa",children:Object(x.jsx)("h1",{children:"No results found"})})})})]})})),P=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.obtenerCiudades()}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),this.props.listacities.length>0&&Object(x.jsx)(U,{cities:this.props.listacities}),Object(x.jsx)(S,{})]})}}]),r}(n.a.Component),F={obtenerCiudades:G.getCities},D=Object(d.b)((function(e){return{listacities:e.galery.listCities}}),F)(P),Y={agregarComentarios:function(e,t,r,a,n){return function(){var n=Object(m.a)(b.a.mark((function n(s){var c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A.a.post("https://mytinerary-techeira.herokuapp.com/api/comentary",{comentary:e,comentaryPhoto:t,userId:r,itinerary:a});case 3:c=n.sent,s({type:"ADD_COMENTARY",payload:c.data.response.nuevoComentario}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},obtenerComentarios:function(e){return function(){var e=Object(m.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://mytinerary-techeira.herokuapp.com/api/comentary");case 2:r=e.sent,t({type:"GET_COMENTARY",payload:r.data.response});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},editarComentario:function(e,t){return function(){var r=Object(m.a)(b.a.mark((function r(a){var n;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.put("https://mytinerary-techeira.herokuapp.com/api/comentary/".concat(e),{comentary:t});case 2:return n=r.sent,r.abrupt("return",{response:n.data.response.actualizado,success:!0});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},eliminarComentario:function(e){return function(){var t=Object(m.a)(b.a.mark((function t(r){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.delete("https://mytinerary-techeira.herokuapp.com/api/comentary/".concat(e));case 2:return a=t.sent,t.abrupt("return",{response:a.data.response.comentary,success:!0});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},H=Y,B={getAItinerary:function(e){return function(){var t=Object(m.a)(b.a.mark((function t(r){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("https://mytinerary-techeira.herokuapp.com/api/itinerary/galery/".concat(e));case 2:a=t.sent,n=a.data.response,r({type:"GET_A_ITINERARY",payload:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},obtenerActividades:function(){return function(){var e=Object(m.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://mytinerary-techeira.herokuapp.com/api/activities");case 2:r=e.sent,t({type:"GET_ALL_ACTIVIETIES",payload:r.data.response});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},likeItinerary:function(e,t){return Object(m.a)(b.a.mark((function r(){var a;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,A.a.put("https://mytinerary-techeira.herokuapp.com/api/itinerary/like/".concat(e),{idUser:t});case 3:return a=r.sent,console.log(a.data.response),r.abrupt("return",a.data.response);case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))}},q=B,M=r(17),V=r(19),W=r(20),z=r.n(W),J=Object(d.b)((function(e){return{usuario:e.user.usuario}}))((function(e){var t=Object(a.useRef)(),r=Object(a.useState)(!1),n=Object(_.a)(r,2),s=n[0],c=n[1],i=e.id,o=e.todo.filter((function(e){return e.itinerary==i}));return Object(a.useEffect)((function(){c(!1)}),[e.render]),Object(x.jsx)(x.Fragment,{children:o&&o.map((function(r){return e.usuario&&e.usuario._id==r.userId?s?Object(x.jsxs)("div",{className:"containerComent",children:[Object(x.jsx)("img",{className:"imguser ",src:r.comentaryPhoto,alt:"usericon"}),Object(x.jsx)("input",{type:"text",className:"comment",defaultValue:r.comentary,ref:t}),Object(x.jsx)(V.a,{className:"send",onClick:function(){return e.editComment(r._id,t.current.value)}}),Object(x.jsx)(M.d,{className:"iconDelete",onClick:function(){return t=r._id,void z.a.fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(r){r.isConfirmed&&(e.deleteComment(t),z.a.fire("Deleted!","Your comment has been deleted.","success"))}));var t}})]},r.comentaryPhoto):Object(x.jsxs)("div",{className:"containerComent",children:[console.log(e.usuario.url),Object(x.jsx)("img",{className:"imguser ",src:r.comentaryPhoto,alt:"usericon"}),Object(x.jsxs)("p",{className:"comment",children:[r.comentary," "]}),Object(x.jsx)(M.b,{className:"iconEdit",onClick:function(){return c(!s)}})]},r._id):Object(x.jsxs)("div",{className:"containerComent",children:[Object(x.jsx)("img",{className:"imguser ",src:r.comentaryPhoto,alt:"usericon"}),Object(x.jsxs)("p",{className:"comment",children:[r.comentary," "]})]},r.comentary)}))})})),K=Object(d.b)((function(e){return{listaComentario:e.comentary.listComentary,usuario:e.user.usuario,auxiliar:e.comentary.auxiliar}}))((function(e){var t=e.id,r=e.todo.filter((function(e){return e.itineraryId==t}));return Object(x.jsx)(x.Fragment,{children:0!=r.length&&Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"text-center",children:"Activities"}),Object(x.jsx)("div",{className:"images",children:r.map((function(e){return e.activities.map((function(e){return Object(x.jsxs)("div",{className:"image",children:[Object(x.jsx)("img",{className:"imageImg",src:"/assets/".concat(e.photo)}),Object(x.jsx)("p",{children:e.name})]},e.photo)}))}))})]})})})),Z=function(e,t){z.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:e,title:t})},Q={obtenerComentarios:H.obtenerComentarios,agregarComentarios:H.agregarComentarios,editarComentario:H.editarComentario,eliminarComentario:H.eliminarComentario,obtenerActividades:q.obtenerActividades,likeItinerary:q.likeItinerary},X=Object(d.b)((function(e){return{listaComentario:e.comentary.listComentary,listaActividades:e.itinerary.listActivities,auxiliar:e.comentary.auxiliar,usuario:e.user.usuario}}),Q)((function(e){var t=Object(a.useState)(!0),r=Object(_.a)(t,2),n=r[0],s=r[1],c=Object(a.useState)(!1),i=Object(_.a)(c,2),o=i[0],u=i[1],l=e.ite,d=Object(a.useRef)(),p=Object(a.useState)(!0),h=Object(_.a)(p,2),O=h[0],f=h[1],g=Object(a.useState)(l.likes),v=Object(_.a)(g,2),y=v[0],N=v[1],C=y.includes(e.usuario&&e.usuario._id)?Object(x.jsx)(M.a,{className:"heartIconRed"}):Object(x.jsx)(M.c,{className:"heartIcon"});Object(a.useEffect)((function(){e.obtenerComentarios(),e.obtenerActividades()}),[e.auxiliar]);var w=function(){var t=Object(m.a)(b.a.mark((function t(){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f(!1),e.usuario){t.next=5;break}Z("error","You must be logged in to like this post"),t.next=9;break;case 5:return t.next=7,e.likeItinerary(l._id,e.usuario._id);case 7:r=t.sent,N(r);case 9:f(!0);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=d.current.value;e.usuario?""!==t?(e.agregarComentarios(t,e.usuario.url,e.usuario._id,l._id),d.current.value=""):Z("error","You cannot send empty comments"):Z("error","You must be logged in")},I=function(t){e.eliminarComentario(t).then((function(t){e.obtenerComentarios()})).catch((function(e){return console.log(e)}))},S=function(t,r){e.editarComentario(t,r).then((function(t){e.obtenerComentarios(),s(!n)})).catch((function(e){return console.log(e)}))};return Object(x.jsxs)("div",{className:"containerItinerary",children:[Object(x.jsxs)("div",{className:"containerImgInformation",children:[Object(x.jsx)("div",{className:"containerImgItinerary",children:Object(x.jsx)("img",{className:"imgItinerary",src:"/assets/".concat(l.imageItinerary)})}),Object(x.jsxs)("div",{className:"containerInfoItinerary",children:[Object(x.jsxs)("div",{className:"section1",children:[Object(x.jsxs)("div",{className:"containerDataAuthor",children:[Object(x.jsx)("div",{className:"nameAuthor",children:Object(x.jsx)("img",{className:"imgAuthor",src:"/assets/".concat(l.imageAuthor)})},"nameAuthor"),Object(x.jsx)("h3",{children:l.nameAuthor})]},"containerDataAuthor"),Object(x.jsx)("div",{className:"logoExploring",children:Object(x.jsx)("img",{className:"imgLogoExploring",src:"/assets/logo-exploradores.png"})},"logoExploring")]},"section1"),Object(x.jsxs)("div",{className:"section2",children:[Object(x.jsxs)("h3",{children:[l.title,Object(x.jsxs)("div",{onClick:O?w:null,className:"liked d-flex align-items-start",children:[Object(x.jsx)("p",{className:"me-3",children:y.length}),C]})]}),Object(x.jsx)("p",{children:l.description})]},"section2"),Object(x.jsx)("div",{className:"section3",children:Object(x.jsx)(j.b,{to:"/cities",className:"ms-3",children:l.hashtags})},"section3"),Object(x.jsx)("div",{children:Object(x.jsxs)("span",{className:"ms-3",children:[l.hours,"    Price: ",l.price]})},"section4")]})]}),o&&Object(x.jsxs)("div",{className:"containerComentaryImg",children:[e.listaActividades&&e.listaActividades.map((function(e){return Object(x.jsx)(K,{id:l._id,todo:[e]},e._id)})),Object(x.jsxs)("div",{className:"containerComentary",children:[Object(x.jsx)("h3",{className:"text-center",children:"Comments"}),e.listaComentario&&e.listaComentario.map((function(e){return Object(x.jsx)(J,{id:l._id,render:n,todo:[e],deleteComment:I,editComment:S},e._id)})),Object(x.jsxs)("div",{className:"containerInputSend",children:[Object(x.jsx)("input",{type:"text",ref:d,placeholder:"Write a comment",onKeyPress:function(e){"Enter"===e.key&&k()},className:"comment"}),Object(x.jsx)(V.a,{className:"send",onClick:function(){return k()}})]})]})]}),Object(x.jsxs)("button",{className:"buttonItinerary",onClick:function(){return u(!o)},children:[" ",o?"view less":"view more"]})]})})),$=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).id=a.props.params.id,a}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.obtenerItinerarios(this.id),this.props.obtenerUnaCiudad(this.id)}},{key:"render",value:function(){var e=this.props.listOneCity,t=e.title,r=e.country,a=e.path,n=e.currency,s=e.language;return window.scrollTo(0,0),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsxs)("h1",{className:"titleCity",children:[t," ",r]}),Object(x.jsxs)("div",{className:"containerCity",children:[Object(x.jsxs)("div",{className:"containerCityInfo",children:[Object(x.jsxs)("h3",{children:["Currency: ",n]}),Object(x.jsxs)("h3",{children:["Language: ",s]})]}),Object(x.jsx)("div",{className:"containerImgCity",children:Object(x.jsx)("img",{className:"imgCity",alt:t,src:"/assets/".concat(a)})})]}),this.props.listaItinerary.length>0?this.props.listaItinerary.map((function(e){return Object(x.jsx)(X,{ite:e},e._id)})):Object(x.jsx)("div",{className:"containerEmpty",children:Object(x.jsx)("div",{className:"ayudaa",children:Object(x.jsx)("h1",{children:"No itinerary found"})})}),Object(x.jsx)("div",{className:"divButtonCity",children:Object(x.jsx)(j.b,{to:"/cities",className:"buttonCity",children:"Back to cities"},"back")}),Object(x.jsx)(S,{})]})}}]),r}(n.a.Component),ee={obtenerItinerarios:q.getAItinerary,obtenerUnaCiudad:G.getOneCity},te=Object(d.b)((function(e){return{listaItinerary:e.itinerary.listItinerary,listOneCity:e.galery.city}}),ee)($),re={getCountries:function(){return function(){var e=Object(m.a)(b.a.mark((function e(t,r){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://countriesnow.space/api/v0.1/countries");case 2:a=e.sent,n=a.data.data,t({type:"GET_ALL_COUNTRIES",payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}},ae=re,ne=r(30),se=r.n(ne),ce={obtenerPaises:ae.getCountries,registerUser:f.registrarUsuario},ie=Object(d.b)((function(e){return{conuntries:e.country.countries}}),ce)((function(e){var t=0,r=e.handleSubmit,n=e.param,s=Object(a.useRef)(),c=Object(a.useRef)(),i=Object(a.useRef)(),o=Object(a.useRef)(),u=Object(a.useRef)(),l=Object(a.useRef)(),d=function(t){var r={firstName:t.profileObj.givenName,lastName:t.profileObj.familyName,email:t.profileObj.email,password:t.profileObj.googleId,url:t.profileObj.imageUrl,country:"Argentina",google:!0};e.handleSubmit(r.firstName,r.lastName,r.email,r.password,r.url,r.country,r.google).then((function(e){return e.data.success})).catch((function(e){return console.log(e)}))},p=function(t){var r={email:t.profileObj.email,password:t.profileObj.googleId};e.handleSubmit(r.email,r.password)},b=function(e){e.preventDefault(),"/signup"==n?(r(s.current.value,c.current.value,i.current.value,o.current.value,u.current.value,l.current.value),s.current.value="",c.current.value="",i.current.value="",o.current.value="",u.current.value="",l.current.value=""):(r(i.current.value,o.current.value),i.current.value="",o.current.value="")};return Object(a.useEffect)((function(){e.obtenerPaises()}),[]),Object(x.jsx)(x.Fragment,{children:"/signup"==n?Object(x.jsxs)("div",{className:"formContainer",children:[Object(x.jsx)("h2",{className:"text-center titleForm",children:"Register to start the adventure"}),Object(x.jsxs)("form",{className:"form",onSubmit:b,children:[Object(x.jsxs)("span",{children:[" ",Object(x.jsx)("input",{ref:s,type:"text",placeholder:"First name"})," "]}),Object(x.jsx)("span",{children:Object(x.jsx)("input",{ref:c,type:"text",placeholder:"Last name"})}),Object(x.jsx)("span",{children:Object(x.jsx)("input",{ref:i,type:"email",name:"",id:"",placeholder:"Email"})}),Object(x.jsx)("span",{children:Object(x.jsx)("input",{ref:o,type:"password",placeholder:"Password"})}),Object(x.jsx)("span",{children:Object(x.jsx)("input",{ref:u,type:"text",placeholder:"Url profile picture"})}),Object(x.jsx)("span",{children:Object(x.jsxs)("select",{ref:l,name:"country",id:"",children:[Object(x.jsx)("option",{value:"",children:"Select your Country"}),e.conuntries.map((function(e){return Object(x.jsx)("option",{value:e.country,children:e.country},"Botswana"==e.country?t++:e.country)}))]})}),Object(x.jsx)("input",{className:"formSubmit",type:"submit",value:"Create account"}),Object(x.jsx)(j.b,{to:"/signin",className:"",children:"Do you already have an account"})]}),Object(x.jsx)("div",{className:"google",children:Object(x.jsx)(se.a,{clientId:"1083246067612-q4fqup81pi8sq5cfaqiafm7t3qcsniv1.apps.googleusercontent.com",buttonText:"Sign up with Google",onSuccess:d,onFailure:d,cookiePolicy:"single_host_origin"})})]}):Object(x.jsxs)("div",{className:"formContainer",children:[Object(x.jsx)("h2",{className:"text-center titleForm",children:"Welcome back"}),Object(x.jsxs)("form",{className:"form",onSubmit:b,children:[Object(x.jsx)("span",{children:Object(x.jsx)("input",{ref:i,type:"email",name:"",id:"",placeholder:"Email"})}),Object(x.jsx)("span",{children:Object(x.jsx)("input",{ref:o,type:"password",placeholder:"Password"})}),Object(x.jsx)("input",{className:"formSubmit",type:"submit",value:"Sign In"}),Object(x.jsx)(j.b,{to:"/signup",className:"",children:"Don't have an account"})]}),Object(x.jsx)("div",{className:"google",children:Object(x.jsx)(se.a,{clientId:"1083246067612-q4fqup81pi8sq5cfaqiafm7t3qcsniv1.apps.googleusercontent.com",buttonText:"Sign in with Google",onSuccess:p,onFailure:p,cookiePolicy:"single_host_origin"})})]})})})),oe=r(4),ue=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).navigate=a.props.location.pathname,a}return Object(o.a)(r,[{key:"render",value:function(){var e=this;if(localStorage.getItem("token"))return Object(x.jsx)(oe.a,{to:"/"});var t=function(){var t=Object(m.a)(b.a.mark((function t(r,a,n,s,c,i){var o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.registerUser(r,a,n,s,c,i);case 2:o=t.sent,console.log(o),o.errores&&o.errores.map((function(e){"The user already exists"==e.message?Z("error",e.message):e.message.length>6?Z("success",e.message):Z("error",e.message.join("\n"))}));case 5:case"end":return t.stop()}}),t)})));return function(e,r,a,n,s,c){return t.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsx)(ie,{handleSubmit:t,param:this.navigate})]})}}]),r}(n.a.Component),le={registerUser:f.registrarUsuario},je=Object(d.b)((function(e){return{usuario:e.user.usuario}}),le)(ue),de=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).navigate=a.props.location.pathname,a}return Object(o.a)(r,[{key:"render",value:function(){var e=this;if(localStorage.getItem("token"))return Object(x.jsx)(oe.a,{to:"/"});var t=function(){var t=Object(m.a)(b.a.mark((function t(r,a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.iniciarSesion(r,a);case 2:(n=t.sent).errores&&n.errores.map((function(e){Z("error",e.message)}));case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsx)(ie,{handleSubmit:t,param:this.navigate})]})}}]),r}(n.a.Component),pe={iniciarSesion:f.iniciarSesion},be=Object(d.b)((function(e){return{usuario:e.user.usuario}}),pe)(de);function me(e){return function(t){var r=Object(oe.f)(),a=Object(oe.g)(),n=Object(oe.h)();return Object(x.jsx)(e,Object(N.a)(Object(N.a)({},t),{},{params:n,navigate:a,location:r}))}}var he=me(te),Oe=me(je),fe=me(be);var xe={signInLS:f.signInLS},ge=Object(d.b)(null,xe)((function(e){return Object(a.useEffect)((function(){var t=localStorage.getItem("token");e.signInLS(t)}),[]),Object(x.jsx)(j.a,{children:Object(x.jsxs)(oe.d,{children:[Object(x.jsx)(oe.b,{path:"/",element:Object(x.jsx)(E,{})}),Object(x.jsx)(oe.b,{path:"/cities",element:Object(x.jsx)(D,{})}),Object(x.jsx)(oe.b,{path:"/cities/:id",element:Object(x.jsx)(he,{})}),Object(x.jsx)(oe.b,{path:"/signup",element:Object(x.jsx)(Oe,{})}),Object(x.jsx)(oe.b,{path:"/signin",element:Object(x.jsx)(fe,{})})]})})})),ve=r(21),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{listCities:[],auxiliar:[],city:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_CITIES":return Object(N.a)(Object(N.a)({},e),{},{listCities:t.payload});case"FILTER_CITIES":var r=e.listCities.filter((function(e){if(e.title.toString().toLowerCase().includes(t.payload.trim().toLowerCase())||e.country.toString().toLowerCase().includes(t.payload.trim().toLowerCase()))return e}));return Object(N.a)(Object(N.a)({},e),{},{auxiliar:r});case"GET_ONE_CITY":return Object(N.a)(Object(N.a)({},e),{},{city:t.payload});default:return e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{listItinerary:[],listActivities:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_A_ITINERARY":return Object(N.a)(Object(N.a)({},e),{},{listItinerary:t.payload});case"GET_ALL_ACTIVIETIES":return Object(N.a)(Object(N.a)({},e),{},{listActivities:t.payload});default:return e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{countries:[]},t=arguments.length>1?arguments[1]:void 0;return"GET_ALL_COUNTRIES"===t.type?Object(N.a)(Object(N.a)({},e),{},{countries:t.payload}):e},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{usuario:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER":return Object(N.a)(Object(N.a)({},e),{},{usuario:t.payload});case"LOG_OUT_USER":return localStorage.removeItem("token"),{usuario:null};default:return e}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{listComentary:[],auxiliar:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COMENTARY":return Object(N.a)(Object(N.a)({},e),{},{listComentary:t.payload});case"ADD_COMENTARY":return Object(N.a)(Object(N.a)({},e),{},{auxiliar:t.payload});default:return e}},Ie=Object(ve.b)({galery:ye,itinerary:Ne,country:Ce,user:we,comentary:ke}),Se=r(45),Ee=Object(ve.c)(Ie,Object(ve.a)(Se.a));c.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(d.a,{store:Ee,children:Object(x.jsx)(ge,{})})}),document.getElementById("root"))},50:function(e,t,r){},51:function(e,t,r){}},[[105,1,2]]]);
//# sourceMappingURL=main.a1bd406f.chunk.js.map