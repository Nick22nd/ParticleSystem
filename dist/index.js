!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var r in i)("object"==typeof exports?exports:t)[r]=i[r]}}(window,(function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=i(2),n=i(3),o=i(4),s=i(5);var c,l,a,h,u=new r.ParticleSystem;u=new r.ParticleSystem;!function(t,e){h&&(clearTimeout(h),a=!1),console.log("canvasName: ",t),c=document.getElementById(t),console.log(c,document.getElementById(t)),l=c.getContext("2d"),a=!0;var i=function(){e(),a&&(h=setTimeout(i,10))};i()}("basicParticleSystemCanvas",(function(){let t={position:new n.Vector2(200,200),velocity:(e=2*Math.random()*Math.PI,new n.Vector2(Math.cos(e),Math.sin(e))).multiply(100),life:1,color:s.Color.red,size:5};var e;u.emit(new o.Particle(t)),u.simulate(.01),null!=l&&l.clearRect(0,0,c.width,c.height),u.render(l)}))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ParticleSystem=void 0;const r=i(3);e.ParticleSystem=class{constructor(){this.particles=[],this.effectors=[],console.log("new ParticleSystem"),this.gravity=new r.Vector2(0,100)}emit(t){this.particles.push(t)}simulate(t){this.aging(t),this.applyGravity(),this.applyEffectors(),this.kinematics(t)}render(t){for(var e in this.particles){var i=this.particles[e],r=1-i.config.age/i.config.life;t.fillStyle="rgba("+Math.floor(255*i.config.color.r)+","+Math.floor(255*i.config.color.g)+","+Math.floor(255*i.config.color.b)+","+r.toFixed(2)+")",t.beginPath(),t.arc(i.config.position.x,i.config.position.y,i.config.size,0,2*Math.PI,!0),t.closePath(),t.fill()}}aging(t){for(var e=0;e<this.particles.length;){var i=this.particles[e];i.config.age+=t,i.config.age>=i.config.life?this.kill(e):e++}}kill(t){this.particles.length>1&&(this.particles[t]=this.particles[this.particles.length-1]),this.particles.pop()}applyGravity(){for(var t in this.particles)this.particles[t].config.acceleration=this.gravity}applyEffectors(){for(var t in this.effectors){var e=this.effectors[t].applys;for(var i in this.particles)e(this.particles[i])}}kinematics(t){for(var e in this.particles){var i=this.particles[e];i.config.position=i.config.position.add(i.config.velocity.multiply(t)),i.config.velocity=i.config.velocity.add(i.config.acceleration.multiply(t))}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vector2=void 0;class r{constructor(t,e){this.x=t,this.y=e}euLength(){return Math.sqrt(this.x*this.x+this.y*this.y)}sqrLength(){return this.x*this.x+this.y*this.y}copy(){return new r(this.x,this.y)}normalize(){const t=1/this.euLength();return new r(this.x*t,this.y*t)}add(t){return new r(this.x+t.x,this.y+t.y)}subtract(t){return new r(this.x-t.x,this.y-t.y)}multiply(t){return new r(this.x*t,this.y*t)}divide(t){const e=1/t;return new r(this.x*e,this.y*e)}dot(t){return this.x*t.x+this.y*t.y}zero(){return new r(0,0)}}e.Vector2=r,r.zero=new r(0,0)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Particle=void 0;const r=i(3);e.Particle=class{constructor(t){this.config=t,this.config.age=0,this.config.acceleration=r.Vector2.zero}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Color=void 0;class r{constructor(t,e,i){this.r=t,this.g=e,this.b=i}copy(){return new r(this.r,this.g,this.b)}add(t){return new r(this.r+t.r,this.g+t.g,this.b+t.b)}multiply(t){return new r(this.r*t,this.g*t,this.b*t)}modulate(t){return new r(this.r*t.r,this.g*t.g,this.b*t.b)}saturate(){this.r=Math.min(this.r,1),this.g=Math.min(this.g,1),this.b=Math.min(this.b,1)}}e.Color=r,r.black=new r(0,0,0),r.white=new r(1,1,1),r.red=new r(1,0,0),r.green=new r(0,1,0),r.blue=new r(0,0,1),r.yellow=new r(1,1,0),r.cyan=new r(0,1,1),r.purple=new r(1,0,1)}])}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhcnRpY2xlU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9WZWN0b3IyLnRzIiwid2VicGFjazovLy8uL3NyYy9QYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29sb3IudHMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiYSIsImkiLCJ3aW5kb3ciLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJjYW52YXMiLCJjdHgiLCJpc0NvbnRpbnVlIiwidGltZW91dElEIiwicHMiLCJQYXJ0aWNsZVN5c3RlbSIsImNhbnZhc05hbWUiLCJmdW5jIiwiY2xlYXJUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibG9vcCIsInNldFRpbWVvdXQiLCJzdGFydCIsImNvbmZpZyIsInBvc2l0aW9uIiwiVmVjdG9yMiIsInZlbG9jaXR5IiwidGhldGEiLCJNYXRoIiwicmFuZG9tIiwiUEkiLCJjb3MiLCJzaW4iLCJtdWx0aXBseSIsImxpZmUiLCJjb2xvciIsIkNvbG9yIiwicmVkIiwic2l6ZSIsImVtaXQiLCJQYXJ0aWNsZSIsInNpbXVsYXRlIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZW5kZXIiLCJwYXJ0aWNsZXMiLCJlZmZlY3RvcnMiLCJ0aGlzIiwiZ3Jhdml0eSIsInBhcnRpY2xlIiwicHVzaCIsImR0IiwiYWdpbmciLCJhcHBseUdyYXZpdHkiLCJhcHBseUVmZmVjdG9ycyIsImtpbmVtYXRpY3MiLCJhbHBoYSIsImFnZSIsImZpbGxTdHlsZSIsImZsb29yIiwiZyIsImIiLCJ0b0ZpeGVkIiwiYmVnaW5QYXRoIiwiYXJjIiwieCIsInkiLCJjbG9zZVBhdGgiLCJmaWxsIiwibGVuZ3RoIiwia2lsbCIsImluZGV4IiwicG9wIiwiYWNjZWxlcmF0aW9uIiwiaiIsImFwcGx5cyIsImFkZCIsInNxcnQiLCJpbnYiLCJldUxlbmd0aCIsInYiLCJmIiwiaW52ZiIsInplcm8iLCJtaW4iLCJibGFjayIsIndoaXRlIiwiZ3JlZW4iLCJibHVlIiwieWVsbG93IiwiY3lhbiIsInB1cnBsZSJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBMkNBLEVBQU1DLEdBQ2hELEdBQXNCLGlCQUFaQyxTQUEwQyxpQkFBWEMsT0FDeENBLE9BQU9ELFFBQVVELFNBQ2IsR0FBcUIsbUJBQVhHLFFBQXlCQSxPQUFPQyxJQUM5Q0QsT0FBTyxHQUFJSCxPQUNQLENBQ0osSUFBSUssRUFBSUwsSUFDUixJQUFJLElBQUlNLEtBQUtELEdBQXVCLGlCQUFaSixRQUF1QkEsUUFBVUYsR0FBTU8sR0FBS0QsRUFBRUMsSUFQeEUsQ0FTR0MsUUFBUSxXQUNYLE8sWUNURSxJQUFJQyxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVVCxRQUduQyxJQUFJQyxFQUFTTSxFQUFpQkUsR0FBWSxDQUN6Q0osRUFBR0ksRUFDSEMsR0FBRyxFQUNIVixRQUFTLElBVVYsT0FOQVcsRUFBUUYs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QUFNWSxLQUFLNUQsRUFBSWlCLEVBQUcyQyxLQUFLYSxFQUFJeEQsRUFBRzJDLEtBQUtjLEVBQUl6RCxHQUV0RCxTQUFTMUIsR0FDTCxPQUFPLElBQUl5RCxFQUFNWSxLQUFLNUQsRUFBSVQsRUFBRVMsRUFBRzRELEtBQUthLEVBQUlsRixFQUFFa0YsRUFBR2IsS0FBS2MsRUFBSW5GLEVBQUVtRixHQUU1RCxXQUNJZCxLQUFLNUQsRUFBSXdDLEtBQUt5RCxJQUFJckMsS0FBSzVELEVBQUcsR0FBSTRELEtBQUthLEVBQUlqQyxLQUFLeUQsSUFBSXJDLEtBQUthLEVBQUcsR0FBSWIsS0FBS2MsRUFBSWxDLEtBQUt5RCxJQUFJckMsS0FBS2MsRUFBRyxJQTlCOUYsVUFJVyxFQUFBd0IsTUFBUSxJQUFJbEQsRUFBTSxFQUFHLEVBQUcsR0FDeEIsRUFBQW1ELE1BQVEsSUFBSW5ELEVBQU0sRUFBRyxFQUFHLEdBQ3hCLEVBQUFDLElBQU0sSUFBSUQsRUFBTSxFQUFHLEVBQUcsR0FDdEIsRUFBQW9ELE1BQVEsSUFBSXBELEVBQU0sRUFBRyxFQUFHLEdBQ3hCLEVBQUFxRCxLQUFPLElBQUlyRCxFQUFNLEVBQUcsRUFBRyxHQUN2QixFQUFBc0QsT0FBUyxJQUFJdEQsRUFBTSxFQUFHLEVBQUcsR0FDekIsRUFBQXVELEtBQU8sSUFBSXZELEVBQU0sRUFBRyxFQUFHLEdBQ3ZCLEVBQUF3RCxPQUFTLElBQUl4RCxFQUFNLEVBQUcsRUFBRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImltcG9ydCB7IFBhcnRpY2xlU3lzdGVtIH0gZnJvbSBcIi4vUGFydGljbGVTeXN0ZW1cIjtcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi9WZWN0b3IyXCI7XG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XG5pbXBvcnQgeyBQYXJ0aWNsZUNvbmZpZyB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcbnZhciBwcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbSgpO1xudmFyIGR0ID0gMC4wMTtcbnZhciBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICAgaXNDb250aW51ZTogYm9vbGVhbiwgdGltZW91dElEOiBudW1iZXI7XG52YXIgcHMgPSBuZXcgUGFydGljbGVTeXN0ZW0oKTtcbnZhciBkdCA9IDAuMDE7XG5mdW5jdGlvbiBzYW1wbGVEaXJlY3Rpb24oKSB7XG4gICAgdmFyIHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xuICAgIHJldHVybiBuZXcgVmVjdG9yMihNYXRoLmNvcyh0aGV0YSksIE1hdGguc2luKHRoZXRhKSk7XG59XG5cbmZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgbGV0IGNvbmZpZzogUGFydGljbGVDb25maWcgPSB7XG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMigyMDAsIDIwMCksIFxuICAgICAgICB2ZWxvY2l0eTogc2FtcGxlRGlyZWN0aW9uKCkubXVsdGlwbHkoMTAwKSxcbiAgICAgICAgbGlmZTogMSwgXG4gICAgICAgIGNvbG9yOiBDb2xvci5yZWQsIFxuICAgICAgICBzaXplOiA1XG4gICAgfVxuICAgIHBzLmVtaXQobmV3IFBhcnRpY2xlKGNvbmZpZykpO1xuICAgIHBzLnNpbXVsYXRlKGR0KTtcblxuICAgIGNsZWFyQ2FudmFzKCk7XG4gICAgcHMucmVuZGVyKGN0eCk7XG59XG5mdW5jdGlvbiBzdGFydChjYW52YXNOYW1lOiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgaWYgKHRpbWVvdXRJRClcbiAgICAgICAgc3RvcCgpO1xuICAgIGNvbnNvbGUubG9nKCdjYW52YXNOYW1lOiAnLCBjYW52YXNOYW1lKTtcbiAgICBcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNOYW1lKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjb25zb2xlLmxvZyhjYW52YXMsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc05hbWUpKTtcbiAgICBcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlzQ29udGludWUgPSB0cnVlO1xuXG4gICAgdmFyIGxvb3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZnVuYygpO1xuICAgICAgICBpZiAoaXNDb250aW51ZSlcbiAgICAgICAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQobG9vcCwgMTApO1xuICAgIH1cblxuICAgIGxvb3AoKTtcbn1cblxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dElEKTtcbiAgICBpc0NvbnRpbnVlID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2FudmFzKCkge1xuICAgIGlmIChjdHggIT0gbnVsbClcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufVxuXG5cbnN0YXJ0KFwiYmFzaWNQYXJ0aWNsZVN5c3RlbUNhbnZhc1wiLCBzdGVwKTsiLCJpbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4vVmVjdG9yMlwiO1xuaW1wb3J0IHsgQ2hhbWJlckJveCB9IGZyb20gXCIuL0NoYW1iZXJCb3hcIjtcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZVN5c3RlbSB7XG4gICAgcHJpdmF0ZSBwYXJ0aWNsZXM6IEFycmF5PFBhcnRpY2xlPiA9IFtdXG4gICAgcHJpdmF0ZSBlZmZlY3RvcnM6IEFycmF5PENoYW1iZXJCb3g+ID0gW11cblxuICAgIGdyYXZpdHk6IFZlY3RvcjJcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgUGFydGljbGVTeXN0ZW1cIik7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IyKDAsIDEwMClcbiAgICAgICAgLy8gdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5lZmZlY3RvcnMgPSBbXTtcbiAgICB9XG4gICAgZW1pdCAocGFydGljbGU6IFBhcnRpY2xlKSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzLnB1c2gocGFydGljbGUpO1xuICAgIH07XG5cbiAgICBzaW11bGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYWdpbmcoZHQpO1xuICAgICAgICB0aGlzLmFwcGx5R3Jhdml0eSgpO1xuICAgICAgICB0aGlzLmFwcGx5RWZmZWN0b3JzKCk7XG4gICAgICAgIHRoaXMua2luZW1hdGljcyhkdCk7XG4gICAgfTtcblxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGFydGljbGVzKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMucGFydGljbGVzW2ldO1xuICAgICAgICAgICAgdmFyIGFscGhhID0gMSAtIHAuY29uZmlnLmFnZSAvIHAuY29uZmlnLmxpZmU7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKFwiXG4gICAgICAgICAgICAgICAgKyBNYXRoLmZsb29yKHAuY29uZmlnLmNvbG9yLnIgKiAyNTUpICsgXCIsXCJcbiAgICAgICAgICAgICAgICArIE1hdGguZmxvb3IocC5jb25maWcuY29sb3IuZyAqIDI1NSkgKyBcIixcIlxuICAgICAgICAgICAgICAgICsgTWF0aC5mbG9vcihwLmNvbmZpZy5jb2xvci5iICogMjU1KSArIFwiLFwiXG4gICAgICAgICAgICAgICAgKyBhbHBoYS50b0ZpeGVkKDIpICsgXCIpXCI7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHAuY29uZmlnLnBvc2l0aW9uLngsIHAuY29uZmlnLnBvc2l0aW9uLnksIHAuY29uZmlnLnNpemUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgICBcbiAgICBhZ2luZyhkdDogbnVtYmVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgIHZhciBwID0gdGhpcy5wYXJ0aWNsZXNbaV07XG4gICAgICAgICAgICBwLmNvbmZpZy5hZ2UgKz0gZHQ7XG4gICAgICAgICAgICBpZiAocC5jb25maWcuYWdlID49IHAuY29uZmlnLmxpZmUpXG4gICAgICAgICAgICAgICAgdGhpcy5raWxsKGkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICBraWxsKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGFydGljbGVzLmxlbmd0aCA+IDEpXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpbmRleF0gPSB0aGlzLnBhcnRpY2xlc1t0aGlzLnBhcnRpY2xlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMucG9wKCk7XG4gICAgfVxuXG4gICAgIGFwcGx5R3Jhdml0eSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBhcnRpY2xlcylcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLmNvbmZpZy5hY2NlbGVyYXRpb24gPSB0aGlzLmdyYXZpdHk7XG4gICAgfVxuXG4gICAgIGFwcGx5RWZmZWN0b3JzKCkge1xuICAgICAgICBmb3IgKHZhciBqIGluIHRoaXMuZWZmZWN0b3JzKSB7XG4gICAgICAgICAgICB2YXIgYXBwbHlzID0gdGhpcy5lZmZlY3RvcnNbal0uYXBwbHlzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBhcnRpY2xlcylcbiAgICAgICAgICAgICAgICBhcHBseXModGhpcy5wYXJ0aWNsZXNbaV0pOyAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAga2luZW1hdGljcyhkdDogbnVtYmVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wYXJ0aWNsZXMpIHtcbiAgICAgICAgICAgIHZhciBwID0gdGhpcy5wYXJ0aWNsZXNbaV07XG4gICAgICAgICAgICBwLmNvbmZpZy5wb3NpdGlvbiA9IHAuY29uZmlnLnBvc2l0aW9uLmFkZChwLmNvbmZpZy52ZWxvY2l0eS5tdWx0aXBseShkdCkpO1xuICAgICAgICAgICAgcC5jb25maWcudmVsb2NpdHkgPSBwLmNvbmZpZy52ZWxvY2l0eS5hZGQocC5jb25maWcuYWNjZWxlcmF0aW9uLm11bHRpcGx5KGR0KSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgc3RhdGljIHplcm8gPSBuZXcgVmVjdG9yMigwLCAwKTtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICBldUxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH1cbiAgICBzcXJMZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuICAgIGNvcHkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgaW52ID0gMSAvIHRoaXMuZXVMZW5ndGgoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCAqIGludiwgdGhpcy55ICogaW52KTtcbiAgICB9XG4gICAgYWRkKHY6IFZlY3RvcjIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCArIHYueCwgdGhpcy55ICsgdi55KTtcbiAgICB9XG4gICAgc3VidHJhY3QodjogVmVjdG9yMikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54IC0gdi54LCB0aGlzLnkgLSB2LnkpO1xuICAgIH1cbiAgICBtdWx0aXBseShmOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCAqIGYsIHRoaXMueSAqIGYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZiBcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cbiAgICAgKi9cbiAgICBkaXZpZGUoZjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGludmYgPSAxL2Y7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnggKiBpbnZmLCB0aGlzLnkgKiBpbnZmKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZWN0b3IyfSB2IFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGRvdCh2OiBWZWN0b3IyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnlcbiAgICB9XG4gICAgemVybygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIDApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQYXJ0aWNsZUNvbmZpZyB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi9WZWN0b3IyXCI7XG5leHBvcnQgY2xhc3MgUGFydGljbGUge1xuICAgIGNvbmZpZzogUGFydGljbGVDb25maWdcbiAgICAvLyBwb3NpdGlvbjogYW55O1xuICAgIC8vIHNpemU6IGFueTtcbiAgICAvLyB2ZWxvY2l0eTogYW55O1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUGFydGljbGVDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICAgICAgdGhpcy5jb25maWcuYWdlID0gMFxuICAgICAgICB0aGlzLmNvbmZpZy5hY2NlbGVyYXRpb24gPSBWZWN0b3IyLnplcm9cbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIENvbG9yIHtcbiAgICByOiBudW1iZXJcbiAgICBnOiBudW1iZXJcbiAgICBiOiBudW1iZXJcbiAgICBzdGF0aWMgYmxhY2sgPSBuZXcgQ29sb3IoMCwgMCwgMCk7XG4gICAgc3RhdGljIHdoaXRlID0gbmV3IENvbG9yKDEsIDEsIDEpO1xuICAgIHN0YXRpYyByZWQgPSBuZXcgQ29sb3IoMSwgMCwgMCk7XG4gICAgc3RhdGljIGdyZWVuID0gbmV3IENvbG9yKDAsIDEsIDApO1xuICAgIHN0YXRpYyBibHVlID0gbmV3IENvbG9yKDAsIDAsIDEpO1xuICAgIHN0YXRpYyB5ZWxsb3cgPSBuZXcgQ29sb3IoMSwgMSwgMCk7XG4gICAgc3RhdGljIGN5YW4gPSBuZXcgQ29sb3IoMCwgMSwgMSk7XG4gICAgc3RhdGljIHB1cnBsZSA9IG5ldyBDb2xvcigxLCAwLCAxKTtcbiAgICBjb25zdHJ1Y3RvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgICAgIHRoaXMuZyA9IGc7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgfVxuICAgIGNvcHkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gICAgfVxuICAgIGFkZChjOiBDb2xvcikge1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMuciArIGMuciwgdGhpcy5nICsgYy5nLCB0aGlzLmIgKyBjLmIpO1xuICAgIH1cbiAgICBtdWx0aXBseShzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnIgKiBzLCB0aGlzLmcgKiBzLCB0aGlzLmIgKiBzKTtcbiAgICB9XG4gICAgbW9kdWxhdGUoYzogQ29sb3IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnIgKiBjLnIsIHRoaXMuZyAqIGMuZywgdGhpcy5iICogYy5iKTtcbiAgICB9XG4gICAgc2F0dXJhdGUoKSB7XG4gICAgICAgIHRoaXMuciA9IE1hdGgubWluKHRoaXMuciwgMSk7IHRoaXMuZyA9IE1hdGgubWluKHRoaXMuZywgMSk7IHRoaXMuYiA9IE1hdGgubWluKHRoaXMuYiwgMSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=