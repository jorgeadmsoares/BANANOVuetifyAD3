
/* bananofirestore */
function banano_bananofirestore_bananofirestoredb() {var _B=this;_B.__394={};_B.__395="";_B.__396="";_B.__397="";_B.__398="";_B.__399="";_B.__39a="";_B.__39b="";_B.__39c="";_B.__39d=null;_B.__39e=null;_B.__39f=null;_B.__3a0="==";_B.__3a1=">";_B.__3a2=">=";_B.__3a3="<";_B.__3a4="<=";_B.__3a5="in";_B.__3a6="array-contains-any";_B.__3a7="array-contains";_B.__3a8="ne";_B.__3a9="asc";_B.__3aa="desc";_B.__3ab="added";_B.__3ac="modified";_B.__3ad="removed";_B.__3ae=null;_B.__3af=null;_B.__3b0=null;_B.__3b1=null;_B.__3b2= new banano_bananofirestore_fbmessaging();_B.__3b3={};_B.__3b4="";_B.__3b5="";_B.initialize=function() {_B.__394={};_B.__395="";_B.__396="";_B.__397="";_B.__398="";_B.__399="";_B.__39a="";_B.__39b="";_B.__39c="";_B.__3b4="";_B.__39d=firebase;_B.__3b3={};return _B;};_B.connect=function() {if (_B.__395!="") {_B.__394["apiKey"]=_B.__395;}if (_B.__396!="") {_B.__394["authDomain"]=_B.__396;}if (_B.__397!="") {_B.__394["databaseURL"]=_B.__397;}if (_B.__398!="") {_B.__394["projectId"]=_B.__398;}if (_B.__399!="") {_B.__394["storageBucket"]=_B.__399;}if (_B.__39a!="") {_B.__394["messagingSenderId"]=_B.__39a;}if (_B.__39b!="") {_B.__394["appId"]=_B.__39b;}if (_B.__39c!="") {_B.__394["measurementId"]=_B.__39c;}if (_B.isconnected(_B)) { return _B;}_B.__39e=_B.__39d["initializeApp"](_B.__394);_B.__3b1=_B.__39d["analytics"]();if (_B.__397!="") {_B.__3af=_B.__39d["database"]();}if (_B.__399!="") {_B.__3ae=_B.__39d["storage"]();_B.__39f=_B.__39e["firestore"]();_B.__39f["settings"]=_B.__3b3;}_B.__3b0=_B.__39d["performance"]();if (_B.__39a!="") {_B.__3b2.initialize(_B.__39d,_B.__3b4,_B.__3b5);}return _B;};_B.isconnected=function() {var _apps;_apps=_B.__39d["apps"];if (_apps.length==0) {return false;} else {return true;}};_B.delete=function() {var __8e1;__8e1=_B.__39e["delete"]();return __8e1;};_B.collection=function(__61e) {var _lbc;_lbc= new banano_bananofirestore_fbcollection();_lbc.initialize(_B.__39f,__61e);return _lbc;};_B.getaccesstoken=function(__61) {var _bo,__8e3;_bo=__61;__8e3=_bo["credential"]["accessToken"];return __8e3;};_B.timestampsinsnapshots=function() {_B.__3b3["timestampsInSnapshots"]=true;return _B;};_B.enablepersistence=function() {var __8e4,__8e5;__8e4={"synchronizeTabs":true};__8e5=_B.__39f["enablePersistence"](__8e4);return __8e5;};_B.disablenetwork=function() {var __8e5;__8e5=_B.__39f["disableNetwork"]();return __8e5;};_B.enablenetwork=function() {var __8e5;__8e5=_B.__39f["enableNetwork"]();return __8e5;};_B.auth=function() {var __8e6;__8e6= new banano_bananofirestore_fbauth();__8e6.initialize(_B.__39e);return __8e6;};_B.getdisplayname=function(_resp) {var _dn;_dn=_resp["displayName"];return _dn;};_B.updatedisplayname=function(_res,__8e9) {var _rec,__8ea;_rec={"displayName":__8e9};__8ea=_res["user"]["updateProfile"](_rec);return __8ea;};_B.fromjson=function(__61) {var _docs,_recs,_userx,_uid,__8ed;_docs=__61["docs"];_recs=[];_recs.length=0;for (var _userxindex=0;_userxindex<_docs.length;_userxindex++) {_userx=_docs[_userxindex];_uid=_userx["id"];__8ed=_userx["data"]();__8ed["id"]=_uid;_recs.push(__8ed);}return _recs;};_B.docchanges=function(__8ee) {var __8ef,__8f0,_recs,_recx,__444,_doc,__8f1,_uid;__8ef=__8ee;__8f0=__8ef["docChanges"]();_recs=[];_recs.length=0;for (var _recxindex=0;_recxindex<__8f0.length;_recxindex++) {_recx=__8f0[_recxindex];__444=_recx["type"];_doc=_recx["doc"];__8f1=_doc["data"]();_uid=_doc["id"];__8f1["changetype"]=__444;__8f1["id"]=_uid;_recs.push(__8f1);}return _recs;};_B.setondocchanges=function(__8ee,__4e3,__78) {var __8ef,__8f0,_recx,__444,_doc,__8f1,_uid;__78=__78.toLowerCase();__8ef=__8ee;__8f0=__8ef["docChanges"]();for (var _recxindex=0;_recxindex<__8f0.length;_recxindex++) {_recx=__8f0[_recxindex];__444=_recx["type"];_doc=_recx["doc"];__8f1=_doc["data"]();_uid=_doc["id"];__8f1["changetype"]=__444;__8f1["id"]=_uid;(function() {if (typeof __4e3[(__78).toLowerCase()]==="function") {var CSr = __4e3[(__78).toLowerCase()](__8f1,_B);if(CSr!=null) {return CSr}}})();}};_B.isremoved=function(_m) {var _ct;_ct=_B.getchangetype(_m,_B);if (_ct=="removed") { return true;}return false;};_B.isadded=function(_m) {var _ct;_ct=_B.getchangetype(_m,_B);if (_ct=="added") { return true;}return false;};_B.ismodified=function(_m) {var _ct;_ct=_B.getchangetype(_m,_B);if (_ct=="modified") { return true;}return false;};_B.getchangetype=function(_item) {var _ct;_ct=_item["changetype"];return _ct;};_B.getid=function(__61) {var _res;_res=__61["id"];return _res;};_B.getmessage=function(__68) {var _res;_res=__68["message"];return _res;};_B.getrecord=function(__61) {var _id,__d8;_id=__61["id"];__d8=__61["data"]();__d8["id"]=_id;return __d8;};_B.getdatabaseref=function(__8f2) {var _bo;_bo=_B.__3af["ref"](__8f2);return _bo;};_B.databasepush=function(__8f2,__6a) {var _tbl,_bp;_tbl=_B.getdatabaseref(__8f2,_B);_bp=_tbl["push"](__6a);return _bp;};_B.getstorageref=function(__8f2) {var _bo;_bo=_B.__3ae["ref"](__8f2);return _bo;};_B.storageput=function(__8f2,_fo) {var _tbl,_bp;_tbl=_B.getstorageref(__8f2,_B);_bp=_tbl["put"](_fo);return _bp;};_B.getstorageuri=function(__8ee) {var _suri;_suri=__8ee["metadata"]["fullPath"];return _suri;};_B.getdownloadurl=function(__8ee) {var _bp;_bp=__8ee["ref"]["getDownloadURL"]();return _bp;};}function banano_bananofirestore_fbauth() {var _B=this;_B._auth=null;_B.__3b7=null;_B.__3b8=null;_B.__3b9=null;_B.__3ba=null;_B.initialize=function(__39e) {_B._auth=__39e["auth"]();return _B;};_B.signinwithpopupgoogle=function() {var _si;_B.__3b7=new firebase.auth.GoogleAuthProvider();_B.__3b7["addScope"]("https://www.googleapis.com/auth/contacts.readonly");_si=_B._auth["signInWithPopup"](_B.__3b7);return _si;};_B.signinwithpopupfacebook=function() {var _si;_B.__3b8=new firebase.auth.FacebookAuthProvider();_si=_B._auth["signInWithPopup"](_B.__3b8);return _si;};_B.signinwithpopuptwitter=function() {var _si;_B.__3b9=new firebase.auth.TwitterAuthProvider();_si=_B._auth["signInWithPopup"](_B.__3b9);return _si;};_B.signinwithpopupgithub=function() {var _si;_B.__3ba=new firebase.auth.GithubAuthProvider();_si=_B._auth["signInWithPopup"](_B.__3ba);return _si;};_B.signinanonymously=function() {var _si;_si=_B._auth["signInAnonymously"]();return _si;};_B.onauthstatechanged=function(__4e3,__78) {var _user,_cb;__78=__78.toLowerCase();_user={};_cb=function(_user) {if (typeof __4e3[(__78).toLowerCase()]==="function") {return __4e3[(__78).toLowerCase()](_user,_B)};};_B._auth["onAuthStateChanged"](_cb);};_B.getcurrentuser=function() {var __8f6,_usr;__8f6=_B._auth["currentUser"];if (is.null(__8f6) || is.undefined(__8f6)) { return null;}_usr=_B.getuserdata(__8f6,_B);return _usr;};_B.getcurrentuid=function() {var _user,_uid;_user=_B.getcurrentuser(_B);_uid=_user["uid"];return _uid;};_B.getuid=function(__8f8) {var _suid;_suid=__8f8["uid"];return _suid;};_B.getuser=function(_resp) {var _usr;_usr=_resp["user"];return _usr;};_B.getsignedinuserdetails=function(_user) {var _usr,_usr1;_usr=_B.getuser(_user,_B);_usr1=_B.getuserdata(_usr,_B);return _usr1;};_B.getuserdata=function(_user) {var __8f8,__8e9,__c,__8fb,__8fc,__8fd,_uid,__8fe;__8f8={};if (is.null(_user) || is.undefined(_user)) { return __8f8;}__8e9=_user["displayName"];__c=_user["email"];__8fb=_user["emailVerified"];__8fc=_user["photoURL"];__8fd=_user["isAnonymous"];_uid=_user["uid"];__8fe=_user["phoneNumber"];__8f8["displayName"]=__8e9;__8f8["email"]=__c;__8f8["emailVerified"]=__8fb;__8f8["photoURL"]=__8fc;__8f8["isAnonymous"]=__8fd;__8f8["uid"]=_uid;__8f8["phoneNumber"]=__8fe;return __8f8;};_B.createuserwithemailandpassword=function(__5d5,__7) {var __8ff;__8ff=_B._auth["createUserWithEmailAndPassword"](__5d5,__7);return __8ff;};_B.signinwithemailandpassword=function(__5d5,__7) {var __8ff;__8ff=_B._auth["signInWithEmailAndPassword"](__5d5,__7);return __8ff;};_B.signout=function() {var __8ff;__8ff=_B._auth["signOut"]();return __8ff;};_B.sendpasswordresetemail=function(__c) {var __8ff;__8ff=_B._auth["sendPasswordResetEmail"](__c);return __8ff;};_B.sendemailverification=function() {var __8ff;__8ff=_B._auth["user"]["sendEmailVerification"]();return __8ff;};}function banano_bananofirestore_fbcollection() {var _B=this;_B._co=null;_B.__3bc="";_B.initialize=function(__39f,__61e) {_B.__3bc=__61e;_B._co=__39f["collection"](__61e);return _B;};_B.onsnapshot=function(__4e3,__78) {var _docx,_cb;__78=__78.toLowerCase();_docx={};_cb=function(_docx) {if (typeof __4e3[(__78).toLowerCase()]==="function") {return __4e3[(__78).toLowerCase()](_docx,_B)};};_B._co["onSnapshot"](_cb);};_B.add=function(__6a) {var __901;__901=_B._co["add"](__6a);return __901;};_B.doc=function(_pv) {var _docx;_docx= new banano_bananofirestore_fbdocument();_docx.initialize(_B._co,_pv);return _docx;};_B.orderby=function(_fld,__903) {_B._co=_B._co["orderBy"](_fld,__903);return _B;};_B.limit=function(__904) {_B._co=_B._co["limit"](__904);return _B;};_B.get=function() {var __905;__905=_B._co["get"]();return __905;};_B.startat=function(__904) {_B._co=_B._co["startAt"](__904);return _B;};_B.endat=function(__904) {_B._co=_B._co["endAt"](__904);return _B;};_B.where=function(_fld,_oper,__88) {switch ("" + _oper) {case "" + "ne":_B._co=_B._co["where"](_fld,"<",__88);_B._co=_B._co["where"](_fld,">",__88);break;default:_B._co=_B._co["where"](_fld,_oper,__88);break;}return _B;};}function banano_bananofirestore_fbdocument() {var _B=this;_B._doc=null;_B.initialize=function(_co,_pv) {_B._doc=_co["doc"](_pv);return _B;};_B.update=function(__6a) {var __901;__901=_B._doc["update"](__6a);return __901;};_B.delete=function(__906,__907) {var __908;__908=_B._doc["delete"]();return __908;};_B.set=function(__6a) {var __909;__909=_B._doc["set"](__6a);return __909;};_B.get=function() {var __905;__905=_B._doc["get"]();return __905;};}function banano_bananofirestore_fbmessaging() {var _B=this;_B.__3b2=null;_B._key="";_B.__3be="";_B.__3bf="";_B.initialize=function(_fb,__3b4,_sk) {_B.__3b2=_fb["messaging"]();_B._key=__3b4;_B.__3be="";_B.__3bf=_sk;return _B;};_B.issubscribed=function(__61) {if ((__61.status<200 || __61.status>=400)) {return false;} else {return true;}};_B.issent=function(__61) {if ((__61.status<200 || __61.status>=400)) {return false;} else {return true;}};_B.requestpermission=function() {var _rp;_rp=_B.__3b2["requestPermission"]();return _rp;};_B.gettoken=function() {var _opt,_t;_opt={};_opt["vapidKey"]=_B._key;_t=_B.__3b2["getToken"](_opt);return _t;};_B.deletetoken=function() {var _dt;_dt=_B.__3b2["deleteToken"](_B.__3be);return _dt;};_B.deletetokenandwait=async function() {var _done,__90c;_done=false;__90c=null;__90c=_B.deletetoken(_B);_done=await __90c;return _done;};_B.settoken=function(__90d) {_B.__3be=__90d;};_B.onmessage=function(__4e3,__78) {var __90e,_cb;__78=__78.toLowerCase();__90e={};_cb=function(__90e) {if (typeof __4e3[(__78).toLowerCase()]==="function") {return __4e3[(__78).toLowerCase()](__90e,_B)};};_B.__3b2["onMessage"](_cb);};_B.ontokenrefresh=function(__4e3,__78) {var _cb;__78=__78.toLowerCase();_cb=function() {if (typeof __4e3[(__78).toLowerCase()]==="function") {return __4e3[(__78).toLowerCase()](_B)};};_B.__3b2["onTokenRefresh"](_cb);};_B.sendtotoken=function(__90f,__910,__911,__8c0,__7e9) {var __1b2,_hdrs,__912,_body,__913;__1b2={};__1b2={};__1b2.method="POST";__1b2.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__3bf;__1b2.headers=_hdrs;__912={};__912["title"]=__910;__912["body"]=__911;__912["icon"]=__7e9;_body={};_body["to"]=__90f;_body["notification"]=__912;_body["data"]=__8c0;__1b2.body=JSON.stringify(_body);__913={};__913=fetch("https://fcm.googleapis.com/fcm/send",__1b2);return __913;};_B.sendtotokenandwait=async function(__90f,__910,__911,__8c0,__7e9) {var __914,__61,__913,_res;__914="";__61={};__913={};__913=_B.sendtotoken(__90f,__910,__911,__8c0,__7e9,_B);__61=await __913;_res=await __61.json();if (__61.ok) {__914=_res["message_id"];}return __914;};_B.sendtotopic=function(__915,__910,__911,__8c0,__7e9) {var __1b2,_hdrs,__912,_body,__913;__1b2={};__1b2={};__1b2.method="POST";__1b2.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__3bf;__1b2.headers=_hdrs;__912={};__912["title"]=__910;__912["body"]=__911;__912["icon"]=__7e9;_body={};_body["to"]="/topics/" + __915 + "";_body["data"]=__8c0;_body["notification"]=__912;__1b2.body=JSON.stringify(_body);__913={};__913=fetch("https://fcm.googleapis.com/fcm/send",__1b2);return __913;};_B.sendtotopicandwait=async function(__915,__910,__911,__8c0,__7e9) {var __914,__61,__913,_res;__914="";__61={};__913={};__913=_B.sendtotopic(__915,__910,__911,__8c0,__7e9,_B);__61=await __913;_res=await __61.json();if (__61.ok) {__914=_res["message_id"];}return __914;};_B.validatetoken=function() {var __913,__1b2,_hdrs,__916;__913={};__1b2={};__1b2={};__1b2.method="GET";__1b2.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__3bf;__1b2.headers=_hdrs;__916="https://iid.googleapis.com/iid/info/" + _B.__3be + "";__913=fetch(__916,__1b2);return __913;};_B.validatetokenandwait=async function(__915) {var _done,__913;_done=false;__913={};__913=_B.validatetoken(_B);_done=await __913;return _done;};_B.subscribe=function(__915) {var __913,__1b2,_hdrs,__916;__913={};__915=__915.trim();if (__915=="") { return __913;}__1b2={};__1b2={};__1b2.method="POST";__1b2.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__3bf;__1b2.headers=_hdrs;__916="https://iid.googleapis.com/iid/v1/" + _B.__3be + "/rel/topics/" + __915 + "";__913=fetch(__916,__1b2);return __913;};_B.subscribeandwait=async function(__915) {var _done,__913;_done=false;__913={};__913=_B.subscribe(__915,_B);_done=await __913;return _done;};_B.unsubscribeandwait=async function(__915) {var _done,__913;_done=false;__913={};__913=_B.unsubscribe(__915,_B);_done=await __913;return _done;};_B.unsubscribe=function(__915) {var __913,__1b2,_hdrs,__916;__913={};__915=__915.trim();if (__915=="") { return __913;}__1b2={};__1b2={};__1b2.method="DELETE";__1b2.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__3bf;__1b2.headers=_hdrs;__916="https://iid.googleapis.com/iid/v1/" + _B.__3be + "/rel/topics/" + __915 + "";__913=fetch(__916,__1b2);return __913;};_B.createtopic=function(__915) {var __913,__1b2,_body,_hdrs;__913={};__915=__915.trim();if (__915=="") { return __913;}__1b2={};__1b2={};__1b2.method="POST";__1b2.mode="cors";_body={};_body["to"]="/topics/" + __915 + "";_body["registration_tokens"]=[_B.__3be];__1b2.body=JSON.stringify(_body);_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__3bf;__1b2.headers=_hdrs;__913=fetch("https://iid.googleapis.com/iid/v1:batchAdd",__1b2);return __913;};_B.createtopicandwait=async function(__915) {var _done,__913;_done=false;__913={};__913=_B.createtopic(__915,_B);_done=await __913;return _done;};_B.removetopic=function(__915) {var __913,__1b2,_body,_hdrs;__913={};__915=__915.trim();if (__915=="") { return __913;}__1b2={};__1b2={};__1b2.method="POST";__1b2.mode="cors";_body={};_body["to"]="/topics/" + __915 + "";_body["registration_tokens"]=[_B.__3be];__1b2.body=JSON.stringify(_body);_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__3bf;__1b2.headers=_hdrs;__913=fetch("https://iid.googleapis.com/iid/v1:batchRemove",__1b2);return __913;};_B.removetopicandwait=async function(__915) {var _done,__913;_done=false;__913={};__913=_B.removetopic(__915,_B);_done=await __913;return _done;};_B.getsubscriptions=function() {var __1b2,_hdrs,__916,__913;__1b2={};__1b2={};__1b2.method="GET";__1b2.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__3bf;__1b2.headers=_hdrs;__916="https://iid.googleapis.com/iid/info/" + _B.__3be + "?details=true";__913={};__913=fetch(__916,__1b2);return __913;};_B.subscribetotopicsandwait=async function(__917) {var __918,_strtopic,__913,__919;__918=[];__918.length=0;for (var _strtopicindex=0;_strtopicindex<__917.length;_strtopicindex++) {_strtopic=__917[_strtopicindex];__913=_B.subscribe(_strtopic,_B);__918.push(__913);}__919=[];__919=await Promise.all(__918);return true;};_B.getsubscriptionsandwait=async function() {var __91a,__61,__913,_res,_rel;__91a={};__61={};__913={};__913=_B.getsubscriptions(_B);__61=await __913;_res=await __61.json();_rel=_res["rel"];__91a=_rel["topics"];return __91a;};_B.gettokenandwait=async function() {var __8e3,__913;__8e3="";__913={};__913=_B.gettoken(_B);__8e3=await __913;return __8e3;};}