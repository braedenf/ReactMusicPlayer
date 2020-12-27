(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),i=n(12),o=n.n(i),s=n(4),l=n.n(s),u=n(6),p=n(3),d=n(9),b=(n(19),n(7)),j=n(5),h=function(e){var t=e.isPlaying,n=e.setIsPlaying,c=e.audioRef,r=e.setSongInfo,i=e.songInfo,o=e.songs,s=e.setSongs,d=e.currentSong,h=e.setCurrentSong,f=function(e){var t=o.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{active:!0}):Object(p.a)(Object(p.a)({},t),{},{active:!1})}));s(t)},m=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},g=function(){var e=Object(u.a)(l.a.mark((function e(n){var a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.findIndex((function(e){return e.id===d.id})),"skip-forward"!==n){e.next=8;break}return r=o[(a+1)%o.length],e.next=5,h(r);case 5:f(r),e.next=14;break;case 8:if("skip-back"!==n){e.next=14;break}return i=o[(a+(o.length-1))%o.length],e.next=12,h(i);case 12:f(i),t&&c.current.play();case 14:t&&c.current.play();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:m(i.currentTime)}),Object(a.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(d.color[0],", ").concat(d.color[1],")")},className:"track",children:[Object(a.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){c.current.currentTime=e.target.value,r(Object(p.a)(Object(p.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(a.jsx)("div",{style:v,className:"animate-track"})]}),Object(a.jsx)("p",{children:i.duration?m(i.duration):"0:00"})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(b.a,{onClick:function(){return g("skip-back")},className:"skip-back",size:"2x",icon:j.a}),Object(a.jsx)(b.a,{onClick:function(){t?(c.current.pause(),n(!t)):(c.current.play(),n(!t))},className:"play",size:"2x",icon:t?j.d:j.e}),Object(a.jsx)(b.a,{onClick:function(){return g("skip-forward")},className:"skip-foward",size:"2x",icon:j.b})]})]})},f=function(e){var t=e.currentSong;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},m=function(e){var t=e.song,n=e.songs,c=e.setCurrentSong,r=e.id,i=e.audioRef,o=e.isPlaying,s=e.setSongs,d=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.id===r})),e.next=3,c(t[0]);case 3:a=n.map((function(e){return e.id===r?Object(p.a)(Object(p.a)({},e),{},{active:!0}):Object(p.a)(Object(p.a)({},e),{},{active:!1})})),s(a),o&&i.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{onClick:d,className:"library-song ".concat(t.active?"selected":""),children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("h4",{children:t.artist})]})]})},g=function(e){var t=e.songs,n=e.setCurrentSong,c=e.audioRef,r=e.isPlaying,i=e.setSongs,o=e.libraryStatus;return Object(a.jsxs)("div",{className:"library ".concat(o?"active-library":""),children:[Object(a.jsx)("h2",{children:"Library"}),Object(a.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(a.jsx)(m,{setCurrentSong:n,song:e,songs:t,id:e.id,audioRef:c,isPlaying:r,setSongs:i},e.id)}))})]})},v=function(e){var t=e.setLibraryStatus,n=e.libraryStatus;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Waves"}),Object(a.jsxs)("button",{onClick:function(){return t(!n)},children:["Library",Object(a.jsx)(b.a,{icon:j.c})]})]})},O=n(27);var x=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"Snowstalgia",artist:"invention_",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#D49EB6","#1F487C"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10305"},{name:"Our Star",artist:"niquo",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#D49EB6","#1F487C"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10328"}]};n(8);var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(x()),n=Object(d.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(r[0]),s=Object(d.a)(o,2),b=s[0],j=s[1],m=Object(c.useState)(!1),O=Object(d.a)(m,2),y=O[0],S=O[1],k=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);M(Object(p.a)(Object(p.a)({},T),{},{currentTime:t,duration:n,animationPercentage:r}))},w=Object(c.useState)(!1),C=Object(d.a)(w,2),N=C[0],P=C[1],A=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),I=Object(d.a)(A,2),T=I[0],M=I[1],D=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.findIndex((function(e){return e.id===b.id})),t.next=3,j(r[(n+1)%r.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App ".concat(N?"Library-Active":""),children:[Object(a.jsx)(v,{libraryStatus:N,setLibraryStatus:P}),Object(a.jsx)(f,{currentSong:b}),Object(a.jsx)(h,{audioRef:e,isPlaying:y,setIsPlaying:S,currentSong:b,setSongInfo:M,songInfo:T,songs:r,setCurrentSong:j,setSongs:i}),Object(a.jsx)(g,{audioRef:e,songs:r,setCurrentSong:j,isPlaying:y,setSongs:i,libraryStatus:N}),Object(a.jsx)("audio",{onTimeUpdate:k,onLoadedMetadata:k,ref:e,src:b.audio,onEnded:D})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.1fe28856.chunk.js.map