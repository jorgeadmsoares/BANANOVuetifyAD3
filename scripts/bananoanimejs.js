
/* bananoanimejs */
function banano_bananoanimejs_bananoanimejs() {var _B=this;_B.__4e=null;_B.__4f=[];_B.__3={};_B.__50=[];_B.__51="1turn";_B.__52="linear";_B.__53="spring";_B.__54="easeInQuad";_B.__55="easeInCubic";_B.__56="easeInQuart";_B.__57="easeInQuint";_B.__58="easeInSine";_B.__59="easeInExpo";_B.__5a="easeInCirc";_B.__5b="easeInBack";_B.__5c="easeOutQuad";_B.__5d="easeOutCubic";_B.__5e="easeOutQuart";_B.__5f="easeOutQuint";_B.__60="easeOutSine";_B.__61="easeOutExpo";_B.__62="easeOutCirc";_B.__63="easeOutBack";_B.__64="easeInBounce";_B.__65="easeInOutQuad";_B.__66="easeInOutCubic";_B.__67="easeInOutQuart";_B.__68="easeInOutQuint";_B.__69="easeInOutSine";_B.__6a="easeInOutExpo";_B.__6b="easeInOutCirc";_B.__6c="easeInOutBack";_B.__6d="easeInOutBounce";_B.__6e="easeOutBounce";_B.__6f="easeOutInQuad";_B.__70="easeOutInCubic";_B.__71="easeOutInQuart";_B.__72="easeOutInQuint";_B.__73="easeOutInSine";_B.__74="easeOutInExpo";_B.__75="easeOutInCirc";_B.__76="easeOutInBack";_B.__77="easeOutInBounce";_B.__78="alternate";_B.__79="reverse";_B.__7a="normal";_B.__7b= new banano_bananoanimejs_bananoanimejsitem();_B.__7c=false;_B.initialize=function(__949,__9ed) {_B.__4f.length=0;_B.__3=__949;_B.__50.length=0;_B.__7b.initialize();_B.target(__9ed,_B);_B.__7c=false;return _B;};_B.animation=function() {var _ajsa;_ajsa= new banano_bananoanimejs_bananoanimejsitem();_ajsa.initialize();return _ajsa;};_B.keyframes=function(_kf) {_B.__50.push(_kf.pop());return _B;};_B.target=function(__9f0) {_B.__4f.push(__9f0);return _B;};_B.create=function() {var __7d;_B.__7c=true;__7d=_B.__7b.pop();if (_B.__50.length>0) {__7d["keyframes"]=_B.__50;}__7d["targets"]=_B.__4f;_B.__4e=anime(__7d);};_B.play=function() {if (_B.__7c==false) {_B.create(_B);}_B.__4e["play"]();};_B.pause=function() {_B.__4e["pause"]();};_B.restart=function() {_B.__4e["restart"]();};_B.reverse=function() {_B.__4e["reverse"]();};}function banano_bananoanimejs_bananoanimejsitem() {var _B=this;_B.__7d={};_B.__4f=[];_B.initialize=function() {_B.__7d={};_B.__4f.length=0;return _B;};_B.alternate=function(_b) {if (is.null(_b) || is.undefined(_b)) { return _B;}if (_b==false) { return _B;}_B.direction("alternate",_B);return _B;};_B.delay=function(_d) {if (is.null(_d) || is.undefined(_d)) { return _B;}if (_d=="") { return _B;}_B.__7d["delay"]=_d;return _B;};_B.delaycallback=function(__949,__1ca) {var _el,_i,_cb;_el={};_i={};_cb=function(_el,_i) {if (typeof __949[(__1ca).toLowerCase()]==="function") {return __949[(__1ca).toLowerCase()](_el,_i,_B)};};_B.__7d["delay"]=_cb;return _B;};_B.translatexcallback=function(__949,__1ca) {var _el,_i,_cb;_el={};_i={};_cb=function(_el,_i) {if (typeof __949[(__1ca).toLowerCase()]==="function") {return __949[(__1ca).toLowerCase()](_el,_i,_B)};};_B.__7d["translateX"]=_cb;return _B;};_B.updatecallback=function(__949,__1ca) {var _cb;_cb=function() {if (typeof __949[(__1ca).toLowerCase()]==="function") {return __949[(__1ca).toLowerCase()](_B)};};_B.__7d["update"]=_cb;return _B;};_B.translateycallback=function(__949,__1ca) {var _el,_i,_cb;_el={};_i={};_cb=function(_el,_i) {if (typeof __949[(__1ca).toLowerCase()]==="function") {return __949[(__1ca).toLowerCase()](_el,_i,_B)};};_B.__7d["translateY"]=_cb;return _B;};_B.scalecallback=function(__949,__1ca) {var _el,_i,_l,_cb;_el={};_i={};_l={};_cb=function(_el,_i,_l) {if (typeof __949[(__1ca).toLowerCase()]==="function") {return __949[(__1ca).toLowerCase()](_el,_i,_l,_B)};};_B.__7d["scale"]=_cb;return _B;};_B.rotatecallback=function(__949,__1ca) {var _cb;_cb=function() {if (typeof __949[(__1ca).toLowerCase()]==="function") {return __949[(__1ca).toLowerCase()](_B)};};_B.__7d["rotate"]=_cb;return _B;};_B.borderradiuscallback=function(__949,__1ca) {var _cb;_cb=function() {if (typeof __949[(__1ca).toLowerCase()]==="function") {return __949[(__1ca).toLowerCase()](_B)};};_B.__7d["borderRadius"]=_cb;return _B;};_B.durationcallback=function(__949,__1ca) {var _cb;_cb=function() {if (typeof __949[(__1ca).toLowerCase()]==="function") {return __949[(__1ca).toLowerCase()](_B)};};_B.__7d["duration"]=_cb;return _B;};_B.value=function(_v) {if (is.null(_v) || is.undefined(_v)) { return _B;}if (_v=="") { return _B;}_B.__7d["value"]=_v;return _B;};_B.opacity=function(_v) {if (is.null(_v) || is.undefined(_v)) { return _B;}if (_v=="") { return _B;}_B.__7d["opacity"]=_v;return _B;};_B.easing=function(_e) {if (is.null(_e) || is.undefined(_e)) { return _B;}if (_e=="") { return _B;}_B.__7d["easing"]=_e;return _B;};_B.steps=function(__9f2) {if (is.null(__9f2) || is.undefined(__9f2)) { return _B;}if (__9f2=="") { return ;}_B.__7d["easing"]="steps(" + __9f2 + ")";return _B;};_B.cubicbezier=function(_x1,_y1,_x2,_y2) {_B.__7d["easing"]="cubicBezier(" + _x1 + ", " + _y1 + ", " + _x2 + ", " + _y2 + "})";return _B;};_B.spring=function(_mass,__9f4,__9f5,__9f6) {_B.__7d["easing"]="spring(" + _mass + ", " + __9f4 + ", " + __9f5 + ", " + __9f6 + ")";return _B;};_B.easeinelastic=function(__9f7,__9f8) {_B.__7d["easing"]="easeInElastic(" + __9f7 + ", " + __9f8 + ")";return _B;};_B.easeoutelastic=function(__9f7,__9f8) {_B.__7d["easing"]="easeOutElastic(" + __9f7 + ", " + __9f8 + ")";return _B;};_B.easeinoutelastic=function(__9f7,__9f8) {_B.__7d["easing"]="easeInOutElastic(" + __9f7 + ", " + __9f8 + ")";return _B;};_B.easeoutinelastic=function(__9f7,__9f8) {_B.__7d["easing"]="easeOutInElastic(" + __9f7 + ", " + __9f8 + ")";return _B;};_B.duration=function(_d) {if (is.null(_d) || is.undefined(_d)) { return _B;}if (_d=="") { return _B;}_B.__7d["duration"]=_d;return _B;};_B.pop=function() {if (_B.__4f.length>0) {_B.__7d["targets"]=_B.__4f;}return _B.__7d;};_B.change=function(_prop,__9f9) {_B.__7d[_prop]=__9f9;return _B;};_B.change1=function(_prop,__9fa,__9fb) {var __9fc;__9fc=[];__9fc.length=0;__9fc.push(__9fa);__9fc.push(__9fb);_B.__7d[_prop]=__9fc;return _B;};_B.left=function(_l) {if (is.null(_l) || is.undefined(_l)) { return _B;}if (_l=="") { return _B;}_B.change("left",_l,_B);return _B;};_B.backgroundcolor=function(_bg) {if (is.null(_bg) || is.undefined(_bg)) { return _B;}if (_bg=="") { return _B;}_B.change("backgroundColor",_bg,_B);return _B;};_B.borderradius=function(__9fa,__9fb) {_B.change1("borderRadius",__9fa,__9fb,_B);return _B;};_B.translatex=function(_x) {if (is.null(_x) || is.undefined(_x)) { return _B;}if (_x=="") { return _B;}_B.change("translateX",_x,_B);return _B;};_B.translatex1=function(_x0,_x1) {var __5cd;__5cd=[];__5cd.length=0;__5cd.push(_x0);__5cd.push(_x1);_B.change("translateX",__5cd,_B);return _B;};_B.translatey=function(_x) {if (is.null(_x) || is.undefined(_x)) { return _B;}if (_x=="") { return _B;}_B.change("translateY",_x,_B);return _B;};_B.translatez=function(_x) {if (is.null(_x) || is.undefined(_x)) { return _B;}if (_x=="") { return _B;}_B.change("translateZ",_x,_B);return _B;};_B.rotate=function(_r) {if (is.null(_r) || is.undefined(_r)) { return _B;}if (_r=="") { return _B;}_B.change("rotate",_r,_B);return _B;};_B.rotatex=function(_r) {if (is.null(_r) || is.undefined(_r)) { return _B;}if (_r=="") { return _B;}_B.change("rotateX",_r,_B);return _B;};_B.rotatey=function(_r) {if (is.null(_r) || is.undefined(_r)) { return _B;}_B.change("rotateY",_r,_B);return _B;};_B.rotatez=function(_r) {if (is.null(_r) || is.undefined(_r)) { return _B;}if (_r=="") { return _B;}_B.change("rotateZ",_r,_B);return _B;};_B.scale=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("scale",_s,_B);return _B;};_B.scalex=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("scaleX",_s,_B);return _B;};_B.scaley=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("scaleY",_s,_B);return _B;};_B.scalez=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("scaleZ",_s,_B);return _B;};_B.skew=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("skew",_s,_B);return _B;};_B.skewx=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("skewX",_s,_B);return _B;};_B.skewy=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("skewY",_s,_B);return _B;};_B.perspective=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("perspective",_s,_B);return _B;};_B.roundit=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("round",_s,_B);return _B;};_B.loopit=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("loop",_s,_B);return _B;};_B.basefrequency=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("baseFrequency",_s,_B);return _B;};_B.direction=function(_d) {if (is.null(_d) || is.undefined(_d)) { return _B;}if (_d=="") { return _B;}_B.change("direction",_d,_B);return _B;};_B.enddelay=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("endDelay",_s,_B);return _B;};_B.innerhtml=function(__9fa,__9fb) {_B.change1("innerHTML",__9fa,__9fb,_B);return _B;};_B.autoplay=function(_b) {if (is.null(_b) || is.undefined(_b)) { return _B;}if (_b==false) { return _B;}if (_b=="") { return _B;}_B.change("autoplay",_b,_B);return _B;};_B.width=function(_w) {if (is.null(_w) || is.undefined(_w)) { return _B;}if (_w=="") { return _B;}_B.change("width",_w,_B);return _B;};_B.height=function(_h) {if (is.null(_h) || is.undefined(_h)) { return _B;}if (_h=="") { return _B;}_B.change("height",_h,_B);return _B;};_B.target=function(__9f0) {if (is.null(__9f0) || is.undefined(__9f0)) { return _B;}if (__9f0=="") { return _B;}_B.__4f.push(__9f0);return _B;};}function banano_bananoanimejs_bananoanimejstimeline() {var _B=this;_B.__4e=null;_B.__4f=[];_B.__3={};_B.__7e= new banano_bananoanimejs_bananoanimejsitem();_B.__7f=null;_B.__7c=false;_B.initialize=function(__949) {_B.__4f.length=0;_B.__3=__949;_B.__7e.initialize();_B.__4e=anime;_B.__7c=false;return _B;};_B.create=function() {var __7d;_B.__7c=true;__7d=_B.__7e.pop();_B.__7f=_B.__4e["timeline"](__7d);return _B;};_B.animation=function() {var _ajsa;_ajsa= new banano_bananoanimejs_bananoanimejsitem();_ajsa.initialize();return _ajsa;};_B.add=function(_anim) {var __7d;if (_B.__7c==false) {_B.create(_B);}__7d=_anim.pop();_B.__7f["add"](__7d);return _B;};_B.addoffset=function(_anim,__a02) {var __7d;if (_B.__7c==false) {_B.create(_B);}__7d=_anim.pop();_B.__7f["add"](__7d,__a02);return _B;};_B.play=function() {_B.__7f["play"]();};_B.pause=function() {_B.__7f["pause"]();};_B.restart=function() {_B.__7f["restart"]();};_B.reverse=function() {_B.__7f["reverse"]();};}