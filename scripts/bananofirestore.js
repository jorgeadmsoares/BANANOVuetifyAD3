
/* bananofirestore */
function banano_bananofirestore_bananofirestoredb() {var _B=this;_B.__57={};_B.__58="";_B.__59="";_B.__5a="";_B.__5b="";_B.__5c="";_B.__5d="";_B.__5e="";_B.__5f="";_B.__60=null;_B.__61=null;_B.__62=null;_B.__63="==";_B.__64=">";_B.__65=">=";_B.__66="<";_B.__67="<=";_B.__68="in";_B.__69="array-contains-any";_B.__6a="array-contains";_B.__6b="ne";_B.__6c="asc";_B.__6d="desc";_B.__6e="added";_B.__6f="modified";_B.__70="removed";_B.__71=null;_B.__72=null;_B.__73=null;_B.__74=null;_B.__75= new banano_bananofirestore_fbmessaging();_B.__76={};_B.__77="";_B.__78="";_B.initialize=function() {_B.__57={};_B.__58="";_B.__59="";_B.__5a="";_B.__5b="";_B.__5c="";_B.__5d="";_B.__5e="";_B.__5f="";_B.__77="";_B.__60=firebase;_B.__76={};return _B;};_B.connect=function() {var __5b0;if (_B.__58!="") {_B.__57["apiKey"]=_B.__58;}if (_B.__59!="") {_B.__57["authDomain"]=_B.__59;}if (_B.__5a!="") {_B.__57["databaseURL"]=_B.__5a;}if (_B.__5b!="") {_B.__57["projectId"]=_B.__5b;}if (_B.__5c!="") {_B.__57["storageBucket"]=_B.__5c;}if (_B.__5d!="") {_B.__57["messagingSenderId"]=_B.__5d;}if (_B.__5e!="") {_B.__57["appId"]=_B.__5e;}if (_B.__5f!="") {_B.__57["measurementId"]=_B.__5f;}if (_B.isconnected(_B)) { return true;}_B.__61=_B.__60["initializeApp"](_B.__57);if (_B.__5a!="") {_B.__72=_B.__60["database"]();}if (_B.__5c!="") {_B.__62=_B.__61["firestore"]();if (Object.keys(_B.__76).length>0) {_B.__62["settings"]=_B.__76;}}if (_B.__5d!="") {_B.__75.initialize(_B.__60,_B.__77,_B.__78);}__5b0=_B.isconnected(_B);return __5b0;};_B.connectanalytics=function() {_B.__74=_B.__60["analytics"]();};_B.connectperformance=function() {_B.__73=_B.__60["performance"]();};_B.connectstorage=function() {_B.__71=_B.__60["storage"]();};_B.isconnected=function() {var _apps;_apps=_B.__60["apps"];if (_apps.length==0) {return false;} else {return true;}};_B.delete=function() {var __5b2;__5b2=_B.__61["delete"]();return __5b2;};_B.collection=function(__5b3) {var _lbc;_lbc= new banano_bananofirestore_fbcollection();_lbc.initialize(_B.__62,__5b3);return _lbc;};_B.getaccesstoken=function(__92) {var _bo,__5b6;_bo=__92;__5b6=_bo["credential"]["accessToken"];return __5b6;};_B.timestampsinsnapshots=function() {_B.__76["timestampsInSnapshots"]=true;return _B;};_B.enablepersistence=function() {var __5b7,__5b8;__5b7={"synchronizeTabs":true};__5b8=_B.__62["enablePersistence"](__5b7);return __5b8;};_B.disablenetwork=function() {var __5b8;__5b8=_B.__62["disableNetwork"]();return __5b8;};_B.enablenetwork=function() {var __5b8;__5b8=_B.__62["enableNetwork"]();return __5b8;};_B.auth=function() {var __5b9;__5b9= new banano_bananofirestore_fbauth();__5b9.initialize(_B.__61);return __5b9;};_B.getdisplayname=function(_resp) {var _dn;_dn=_resp["displayName"];return _dn;};_B.updatedisplayname=function(_res,__5bc) {var _rec,__5bd;_rec={"displayName":__5bc};__5bd=_res["user"]["updateProfile"](_rec);return __5bd;};_B.docchanges=function(__5be) {var __5bf,__5c0,_recs,_recx,__573,_doc,__5c1,_uid;__5bf=__5be;__5c0=__5bf["docChanges"]();_recs=[];_recs.length=0;for (var _recxindex=0;_recxindex<__5c0.length;_recxindex++) {_recx=__5c0[_recxindex];__573=_recx["type"];_doc=_recx["doc"];__5c1=_doc["data"]();_uid=_doc["id"];__5c1["changetype"]=__573;__5c1["id"]=_uid;_recs.push(__5c1);}return _recs;};_B.isremoved=function(_m) {var _ct;_ct=_B.getchangetype(_m,_B);if (_ct=="removed") { return true;}return false;};_B.isadded=function(_m) {var _ct;_ct=_B.getchangetype(_m,_B);if (_ct=="added") { return true;}return false;};_B.ismodified=function(_m) {var _ct;_ct=_B.getchangetype(_m,_B);if (_ct=="modified") { return true;}return false;};_B.getchangetype=function(_item) {var _ct;_ct=_item["changetype"];return _ct;};_B.getid=function(__92) {var _res;if (("id" in __92)) {_res=__92["id"];return _res;} else if (("message" in __92)) {_res=__92["message"];return _res;}};_B.getmessage=function(__99) {var _res;_res=__99["message"];return _res;};_B.getrecord=function(__92) {var _id,__a6;_id=__92["id"];__a6=__92["data"]();__a6["id"]=_id;return __a6;};_B.getdatabaseref=function(__5c6) {var _bo;_bo=_B.__72["ref"](__5c6);return _bo;};_B.databasepush=function(__5c6,__9b) {var _tbl,_bp;_tbl=_B.getdatabaseref(__5c6,_B);_bp=_tbl["push"](__9b);return _bp;};_B.getstorageref=function(__5c6) {var _bo;_bo=_B.__71["ref"](__5c6);return _bo;};_B.storageput=function(__5c6,_fo) {var _tbl,_bp;_tbl=_B.getstorageref(__5c6,_B);_bp=_tbl["put"](_fo);return _bp;};_B.getstorageuri=function(__5be) {var _suri;_suri=__5be["metadata"]["fullPath"];return _suri;};_B.getdownloadurl=function(__5be) {var _bp;_bp=__5be["ref"]["getDownloadURL"]();return _bp;};}function banano_bananofirestore_fbauth() {var _B=this;_B.__79=null;_B.__7a=null;_B.__7b=null;_B.__7c=null;_B.__7d=null;_B.initialize=function(__61) {_B.__79=__61["auth"]();return _B;};_B.signinwithpopupgoogle=function() {var _si;_B.__7a=new firebase.auth.GoogleAuthProvider();_B.__7a["addScope"]("https://www.googleapis.com/auth/contacts.readonly");_si=_B.__79["signInWithPopup"](_B.__7a);return _si;};_B.signinwithpopupfacebook=function() {var _si;_B.__7b=new firebase.auth.FacebookAuthProvider();_si=_B.__79["signInWithPopup"](_B.__7b);return _si;};_B.signinwithpopuptwitter=function() {var _si;_B.__7c=new firebase.auth.TwitterAuthProvider();_si=_B.__79["signInWithPopup"](_B.__7c);return _si;};_B.signinwithpopupgithub=function() {var _si;_B.__7d=new firebase.auth.GithubAuthProvider();_si=_B.__79["signInWithPopup"](_B.__7d);return _si;};_B.signinanonymously=function() {var _si;_si=_B.__79["signInAnonymously"]();return _si;};_B.onauthstatechanged=function(__5cc,__13d) {var _user,_cb;__13d=__13d.toLowerCase();_user={};_cb=function(_user) {if (typeof __5cc[(__13d).toLowerCase()]==="function") {return __5cc[(__13d).toLowerCase()](_user,_B)};};_B.__79["onAuthStateChanged"](_cb);};_B.getcurrentuser=function() {var __5cf,_usr;__5cf=_B.__79["currentUser"];if (is.null(__5cf) || is.undefined(__5cf)) { return null;}_usr=_B.getuserdata(__5cf,_B);return _usr;};_B.getcurrentuid=function() {var _user,_uid;_user=_B.getcurrentuser(_B);_uid=_user["uid"];return _uid;};_B.getuid=function(__5d1) {var _suid;_suid=__5d1["uid"];return _suid;};_B.getuser=function(_resp) {var _usr;_usr=_resp["user"];return _usr;};_B.getsignedinuserdetails=function(_user) {var _usr,_usr1;_usr=_B.getuser(_user,_B);_usr1=_B.getuserdata(_usr,_B);return _usr1;};_B.getuserdata=function(_user) {var __5d1,__5bc,__c,__5d4,__5d5,__5d6,_uid,__5d7;__5d1={};if (is.null(_user) || is.undefined(_user)) { return __5d1;}__5bc=_user["displayName"];__c=_user["email"];__5d4=_user["emailVerified"];__5d5=_user["photoURL"];__5d6=_user["isAnonymous"];_uid=_user["uid"];__5d7=_user["phoneNumber"];__5d1["displayName"]=__5bc;__5d1["email"]=__c;__5d1["emailVerified"]=__5d4;__5d1["photoURL"]=__5d5;__5d1["isAnonymous"]=__5d6;__5d1["uid"]=_uid;__5d1["phoneNumber"]=__5d7;return __5d1;};_B.createuserwithemailandpassword=function(__5d8,__7) {var __5d9;__5d9=_B.__79["createUserWithEmailAndPassword"](__5d8,__7);return __5d9;};_B.signinwithemailandpassword=function(__5d8,__7) {var __5d9;__5d9=_B.__79["signInWithEmailAndPassword"](__5d8,__7);return __5d9;};_B.signout=function() {var __5d9;__5d9=_B.__79["signOut"]();return __5d9;};_B.sendpasswordresetemail=function(__c) {var __5d9;__5d9=_B.__79["sendPasswordResetEmail"](__c);return __5d9;};_B.sendemailverification=function() {var __5d9;__5d9=_B.__79["user"]["sendEmailVerification"]();return __5d9;};}function banano_bananofirestore_fbcollection() {var _B=this;_B._co=null;_B.__7f={};_B.__80="";_B.__81={};_B.__82="";_B.initialize=function(_fb,__5b3) {_B._co=_fb["collection"](__5b3);return _B;};_B.onsnapshot=function(__5cc,__13d) {var _docx,_cb;_B.__7f=__5cc;_B.__80=__13d;_docx={};_cb=function(_docx) {if (typeof _B[("onSnapshotx").toLowerCase()]==="function") {return _B[("onSnapshotx").toLowerCase()](_docx,_B)};};_B._co["onSnapshot"](_cb);};_B.onsnapshotx=function(__5db) {var __5c0,_recx,__573,_docx,__5c1,_uid;__5c0=__5db["docChanges"]();for (var _recxindex=0;_recxindex<__5c0.length;_recxindex++) {_recx=__5c0[_recxindex];__573=_recx["type"];_docx=_recx["doc"];__5c1=_docx["data"]();_uid=_docx["id"];__5c1["changetype"]=__573;__5c1["id"]=_uid;(function() {if (typeof _B.__7f[(_B.__80).toLowerCase()]==="function") {var CSr = _B.__7f[(_B.__80).toLowerCase()](__5c1,_B);if(CSr!=null) {return CSr}}})();}};_B.add=function(__9b) {var __5dc;__5dc=_B._co["add"](__9b);return __5dc;};_B.addwait=async function(__9b) {var __5dd,__5de,_res;__5dd={};__5de=null;__5de=_B.add(__9b,_B);__5dd=await __5de;_res=_B.getid(__5dd,_B);return _res;};_B.getwait=async function() {var __5db,__5df,_docs,_recs,_userx,_uid,__5e1;__5db={};__5df=null;__5df=_B.get(_B);__5db=await __5df;_docs=__5db["docs"];_recs=[];_recs.length=0;for (var _userxindex=0;_userxindex<_docs.length;_userxindex++) {_userx=_docs[_userxindex];_uid=_userx["id"];__5e1=_userx["data"]();__5e1["id"]=_uid;_recs.push(__5e1);}return _recs;};_B.getid=function(__92) {var _res;if (("id" in __92)) {_res=__92["id"];return _res;} else if (("message" in __92)) {_res=__92["message"];_res="error."+_res;return _res;}};_B.doc=function(_pv) {var _docx;_docx= new banano_bananofirestore_fbdocument();_docx.initialize(_B._co,_pv);return _docx;};_B.orderby=function(_fld,__5e4) {_B._co=_B._co["orderBy"](_fld,__5e4);return _B;};_B.limit=function(__5e5) {_B._co=_B._co["limit"](__5e5);return _B;};_B.get=function() {var __5e6;__5e6=_B._co["get"]();return __5e6;};_B.startat=function(__5e5) {_B._co=_B._co["startAt"](__5e5);return _B;};_B.endat=function(__5e5) {_B._co=_B._co["endAt"](__5e5);return _B;};_B.where=function(_fld,_oper,__146) {switch ("" + _oper) {case "" + "ne":_B._co=_B._co["where"](_fld,"<",__146);_B._co=_B._co["where"](_fld,">",__146);break;default:_B._co=_B._co["where"](_fld,_oper,__146);break;}return _B;};_B.insertwait=async function(__2,_rec) {var _d,_r;_d=_B.doc(__2,_B);_r=await _d.setmergewait(_rec);return _r;};_B.updatewait=async function(__2,_rec) {var _d,_r;_d=_B.doc(__2,_B);_r=await _d.updatewait(_rec);return _r;};_B.readwait=async function(__2) {var _d,_r;_d=_B.doc(__2,_B);_r=await _d.getwait();return _r;};_B.deletewait=async function(__2) {var _d,_r;_d=_B.doc(__2,_B);_r=await _d.deletewait();return _r;};}function banano_bananofirestore_fbdocument() {var _B=this;_B._doc=null;_B.__7f={};_B.__80="";_B.initialize=function(_co,_pv) {_B._doc=_co["doc"](_pv);return _B;};_B.onsnapshot=function(__5cc,__13d) {var _docx,_cb;_B.__7f=__5cc;_B.__80=__13d;_docx={};_cb=function(_docx) {if (typeof _B[("onSnapshotx").toLowerCase()]==="function") {return _B[("onSnapshotx").toLowerCase()](_docx,_B)};};_B._doc["onSnapshot"](_cb);};_B.onsnapshotx=function(_docx) {var __5c1,_uid;__5c1=_docx["data"]();_uid=_docx["id"];__5c1["id"]=_uid;(function() {if (typeof _B.__7f[(_B.__80).toLowerCase()]==="function") {var CSr = _B.__7f[(_B.__80).toLowerCase()](__5c1,_B);if(CSr!=null) {return CSr}}})();};_B.update=function(__9b) {var __5dc;__5dc=_B._doc["update"](__9b);return __5dc;};_B.delete=function() {var __5ea;__5ea=_B._doc["delete"]();return __5ea;};_B.set=function(__9b) {var __5eb;__5eb=_B._doc["set"](__9b);return __5eb;};_B.setmerge=function(__9b) {var _m,__5eb;_m={};_m["merge"]=true;__5eb=_B._doc["set"](__9b,_m);return __5eb;};_B.get=function() {var __5e6;__5e6=_B._doc["get"]();return __5e6;};_B.getwait=async function() {var _docx,__5df,__5ec,_uid,__5e1,_m;_docx=null;__5df=null;__5df=_B.get(_B);_docx=await __5df;__5ec=_docx["exists"];if (__5ec) {_uid=_docx["id"];__5e1=_docx["data"]();__5e1["id"]=_uid;return __5e1;} else {_m={};return _m;}};_B.setwait=async function(__9b) {var __5dd,__5de;__5dd={};__5de=null;__5de=_B.set(__9b,_B);__5dd=await __5de;if (is.null(__5dd) || is.undefined(__5dd)) {return true;} else {return false;}};_B.setmergewait=async function(__9b) {var __5dd,__5de;__5dd={};__5de=null;__5de=_B.setmerge(__9b,_B);__5dd=await __5de;if (is.null(__5dd) || is.undefined(__5dd)) {return true;} else {return false;}};_B.updatewait=async function(__9b) {var __5dd,__5de,_res;__5dd={};__5de=null;__5de=_B.update(__9b,_B);__5dd=await __5de;if (is.null(__5dd) || is.undefined(__5dd)) {return "";} else {_res=_B.getid(__5dd,_B);return _res;}};_B.deletewait=async function() {var __5dd,__5de,_res;__5dd={};__5de=null;__5de=_B.delete(_B);__5dd=await __5de;if (is.null(__5dd) || is.undefined(__5dd)) {return "";} else {_res=_B.getid(__5dd,_B);return _res;}};_B.getid=function(__92) {var _res;if (("id" in __92)) {_res=__92["id"];return _res;} else if (("message" in __92)) {_res=__92["message"];_res="error."+_res;return _res;} else {return "";}};}function banano_bananofirestore_fbmessaging() {var _B=this;_B.__75=null;_B._key="";_B.__85="";_B.__86="";_B.initialize=function(_fb,__77,_sk) {_B.__75=_fb["messaging"]();_B._key=__77;_B.__85="";_B.__86=_sk;return _B;};_B.issubscribed=function(__92) {if ((__92.status<200 || __92.status>=400)) {return false;} else {return true;}};_B.issent=function(__92) {if ((__92.status<200 || __92.status>=400)) {return false;} else {return true;}};_B.requestpermission=function() {var _rp;_rp=_B.__75["requestPermission"]();return _rp;};_B.gettoken=function() {var _opt,_t;_opt={};_opt["vapidKey"]=_B._key;_t=_B.__75["getToken"](_opt);return _t;};_B.deletetoken=function() {var _dt;_dt=_B.__75["deleteToken"](_B.__85);return _dt;};_B.deletetokenandwait=async function() {var _done,__5f1;_done=false;__5f1=null;__5f1=_B.deletetoken(_B);_done=await __5f1;return _done;};_B.settoken=function(__5f2) {_B.__85=__5f2;};_B.onmessage=function(__5cc,__13d) {var __5f3,_cb;__13d=__13d.toLowerCase();__5f3={};_cb=function(__5f3) {if (typeof __5cc[(__13d).toLowerCase()]==="function") {return __5cc[(__13d).toLowerCase()](__5f3,_B)};};_B.__75["onMessage"](_cb);};_B.ontokenrefresh=function(__5cc,__13d) {var _cb;__13d=__13d.toLowerCase();_cb=function() {if (typeof __5cc[(__13d).toLowerCase()]==="function") {return __5cc[(__13d).toLowerCase()](_B)};};_B.__75["onTokenRefresh"](_cb);};_B.sendtotoken=function(__5f4,__5f5,__5f6,__5f7,__5f8) {var __ab,_hdrs,__5fa,_body,__5fb;__ab={};__ab={};__ab.method="POST";__ab.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__86;__ab.headers=_hdrs;__5fa={};__5fa["title"]=__5f5;__5fa["body"]=__5f6;__5fa["icon"]=__5f8;_body={};_body["to"]=__5f4;_body["notification"]=__5fa;_body["data"]=__5f7;__ab.body=JSON.stringify(_body);__5fb={};__5fb=fetch("https://fcm.googleapis.com/fcm/send",__ab);return __5fb;};_B.sendtotokenandwait=async function(__5f4,__5f5,__5f6,__5f7,__5f8) {var __5fc,__92,__5fb,_res;__5fc="";__92={};__5fb={};__5fb=_B.sendtotoken(__5f4,__5f5,__5f6,__5f7,__5f8,_B);__92=await __5fb;_res=await __92.json();if (__92.ok) {__5fc=_res["message_id"];}return __5fc;};_B.sendtotopic=function(__5fd,__5f5,__5f6,__5f7,__5f8) {var __ab,_hdrs,__5fa,_body,__5fb;__ab={};__ab={};__ab.method="POST";__ab.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__86;__ab.headers=_hdrs;__5fa={};__5fa["title"]=__5f5;__5fa["body"]=__5f6;__5fa["icon"]=__5f8;_body={};_body["to"]="/topics/" + __5fd + "";_body["data"]=__5f7;_body["notification"]=__5fa;__ab.body=JSON.stringify(_body);__5fb={};__5fb=fetch("https://fcm.googleapis.com/fcm/send",__ab);return __5fb;};_B.sendtotopicandwait=async function(__5fd,__5f5,__5f6,__5f7,__5f8) {var __5fc,__92,__5fb,_res;__5fc="";__92={};__5fb={};__5fb=_B.sendtotopic(__5fd,__5f5,__5f6,__5f7,__5f8,_B);__92=await __5fb;_res=await __92.json();if (__92.ok) {__5fc=_res["message_id"];}return __5fc;};_B.validatetoken=function() {var __5fb,__ab,_hdrs,__5fe;__5fb={};__ab={};__ab={};__ab.method="GET";__ab.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__86;__ab.headers=_hdrs;__5fe="https://iid.googleapis.com/iid/info/" + _B.__85 + "";__5fb=fetch(__5fe,__ab);return __5fb;};_B.validatetokenandwait=async function(__5fd) {var _done,__5fb;_done=false;__5fb={};__5fb=_B.validatetoken(_B);_done=await __5fb;return _done;};_B.subscribe=function(__5fd) {var __5fb,__ab,_hdrs,__5fe;__5fb={};__5fd=__5fd.trim();if (__5fd=="") { return __5fb;}__ab={};__ab={};__ab.method="POST";__ab.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__86;__ab.headers=_hdrs;__5fe="https://iid.googleapis.com/iid/v1/" + _B.__85 + "/rel/topics/" + __5fd + "";__5fb=fetch(__5fe,__ab);return __5fb;};_B.subscribeandwait=async function(__5fd) {var _done,__5fb;_done=false;__5fb={};__5fb=_B.subscribe(__5fd,_B);_done=await __5fb;return _done;};_B.unsubscribeandwait=async function(__5fd) {var _done,__5fb;_done=false;__5fb={};__5fb=_B.unsubscribe(__5fd,_B);_done=await __5fb;return _done;};_B.unsubscribe=function(__5fd) {var __5fb,__ab,_hdrs,__5fe;__5fb={};__5fd=__5fd.trim();if (__5fd=="") { return __5fb;}__ab={};__ab={};__ab.method="DELETE";__ab.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__86;__ab.headers=_hdrs;__5fe="https://iid.googleapis.com/iid/v1/" + _B.__85 + "/rel/topics/" + __5fd + "";__5fb=fetch(__5fe,__ab);return __5fb;};_B.createtopic=function(__5fd) {var __5fb,__ab,_body,_hdrs;__5fb={};__5fd=__5fd.trim();if (__5fd=="") { return __5fb;}__ab={};__ab={};__ab.method="POST";__ab.mode="cors";_body={};_body["to"]="/topics/" + __5fd + "";_body["registration_tokens"]=[_B.__85];__ab.body=JSON.stringify(_body);_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__86;__ab.headers=_hdrs;__5fb=fetch("https://iid.googleapis.com/iid/v1:batchAdd",__ab);return __5fb;};_B.createtopicandwait=async function(__5fd) {var _done,__5fb;_done=false;__5fb={};__5fb=_B.createtopic(__5fd,_B);_done=await __5fb;return _done;};_B.removetopic=function(__5fd) {var __5fb,__ab,_body,_hdrs;__5fb={};__5fd=__5fd.trim();if (__5fd=="") { return __5fb;}__ab={};__ab={};__ab.method="POST";__ab.mode="cors";_body={};_body["to"]="/topics/" + __5fd + "";_body["registration_tokens"]=[_B.__85];__ab.body=JSON.stringify(_body);_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__86;__ab.headers=_hdrs;__5fb=fetch("https://iid.googleapis.com/iid/v1:batchRemove",__ab);return __5fb;};_B.removetopicandwait=async function(__5fd) {var _done,__5fb;_done=false;__5fb={};__5fb=_B.removetopic(__5fd,_B);_done=await __5fb;return _done;};_B.getsubscriptions=function() {var __ab,_hdrs,__5fe,__5fb;__ab={};__ab={};__ab.method="GET";__ab.mode="cors";_hdrs={};_hdrs["Content-Type"]="application/json;";_hdrs["Authorization"]="key="+_B.__86;__ab.headers=_hdrs;__5fe="https://iid.googleapis.com/iid/info/" + _B.__85 + "?details=true";__5fb={};__5fb=fetch(__5fe,__ab);return __5fb;};_B.subscribetotopicsandwait=async function(__5ff) {var __600,_strtopic,__5fb,__601;__600=[];__600.length=0;for (var _strtopicindex=0;_strtopicindex<__5ff.length;_strtopicindex++) {_strtopic=__5ff[_strtopicindex];__5fb=_B.subscribe(_strtopic,_B);__600.push(__5fb);}__601=[];__601=await Promise.all(__600);return true;};_B.getsubscriptionsandwait=async function() {var __602,__92,__5fb,_res,_rel;__602={};__92={};__5fb={};__5fb=_B.getsubscriptions(_B);__92=await __5fb;_res=await __92.json();_rel=_res["rel"];__602=_rel["topics"];return __602;};_B.gettokenandwait=async function() {var __5b6,__5fb;__5b6="";__5fb={};__5fb=_B.gettoken(_B);__5b6=await __5fb;return __5b6;};}