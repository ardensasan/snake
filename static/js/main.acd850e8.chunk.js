(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{37:function(t,e,r){},38:function(t,e,r){},43:function(t,e,r){"use strict";r.r(e);var n=r(10),c=r.n(n),s=r(32),i=r.n(s),o=(r(37),r(38),r(31)),u=r(24),a=r(17),d=function(){var t=Object(n.useRef)(),e=Object(n.useRef)([1,0]),r=Object(n.useRef)([]),c=new u.a.Rect({x:0,y:0,width:50,height:50,fill:"#00D2FF",stroke:"black",strokeWidth:.5}),s=new u.a.Rect({x:50,y:0,width:50,height:50,fill:"#00D2FF",stroke:"black",strokeWidth:.5}),i=Object(n.useRef)([{rect:c,direction:[1,0]},{rect:s,direction:[1,0]}]),d=new u.a.Shape({sceneFunc:function(t,e){t.beginPath(),t.moveTo(50,25),t.lineTo(25,50),t.lineTo(0,50),t.lineTo(0,0),t.lineTo(25,0),t.closePath(),t.fillStrokeShape(e)},fill:"#00D2FF",stroke:"black",strokeWidth:.5,x:125,y:25,offset:{x:25,y:25}});return Object(n.useEffect)((function(){t.current.add(d),t.current.add(i.current[0].rect),t.current.add(i.current[1].rect),new u.a.Animation((function(t){var n,c;d.x(d.attrs.x+e.current[0]),d.y(d.attrs.y-e.current[1]),i.current.forEach((function(t,e){r.current.forEach((function(e){t.rect.attrs.x===e.position[0]&&t.rect.attrs.y===e.position[1]&&(e.segmentsPassed=e.segmentsPassed+1,t.direction=e.direction)})),t.rect.x(t.rect.attrs.x+t.direction[0]),t.rect.y(t.rect.attrs.y-t.direction[1])})),n=r.current,c=i.current.length-1,n=n.filter((function(t){return t.segmentsPassed<c}))}),t).start()})),window.addEventListener("keypress",(function(t){var n=t.code;"KeyW"===n?(1===e.current[0]&&0===e.current[1]||-1===e.current[0]&&0===e.current[1])&&(r.current.push({position:[d.attrs.x-25,d.attrs.y-25],direction:[0,1],segmentsPassed:0}),d.rotate(-90*e.current[0]),e.current=[0,1]):"KeyS"===n?(1===e.current[0]&&0===e.current[1]||-1===e.current[0]&&0===e.current[1])&&(console.log(d.attrs.x),r.current.push({position:[d.attrs.x-25,d.attrs.y-25],direction:[0,-1],segmentsPassed:0}),d.rotate(90*e.current[0]),e.current=[0,-1]):"KeyA"===n?(0===e.current[0]&&1===e.current[1]||0===e.current[0]&&-1===e.current[1])&&(r.current.push({position:[d.attrs.x-25,d.attrs.y-25],direction:[-1,0],segmentsPassed:0}),d.rotate(-90*e.current[1]),e.current=[-1,0]):"KeyD"===n&&(0===e.current[0]&&1===e.current[1]||0===e.current[0]&&-1===e.current[1])&&(r.current.push({position:[d.attrs.x-25,d.attrs.y-25],direction:[1,0],segmentsPassed:0}),d.rotate(90*e.current[1]),e.current=[1,0])})),Object(a.jsx)(o.a,{ref:t})},h=function(){return Object(a.jsx)(o.b,{width:window.innerWidth,height:window.innerHeight,children:Object(a.jsx)(d,{})})};var f=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(h,{})})},l=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,44)).then((function(e){var r=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;r(t),n(t),c(t),s(t),i(t)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),l()}},[[43,1,2]]]);
//# sourceMappingURL=main.acd850e8.chunk.js.map