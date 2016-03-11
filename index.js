var sp = require("sdk/simple-prefs");
var { get, set, reset } = require("sdk/preferences/service");

// Server Sync

function onPrefSync(){
  if(sp.prefs["usesync"] == true){
    set("identity.sync.tokenserver.uri", sp.prefs["schemasync"]+"://"+sp.prefs["urlsync"]+"/token/1.0/sync/1.5");
  }
  else{
    reset(pr);
  }
}

sp.on("usesync", onPrefSync);
sp.on("urlsync", onPrefSync);
sp.on("schemasync", onPrefSync);

// Server Auth

function onPrefAuth(){
  if (sp.prefs["useauth"]== true) {
    set("identity.fxaccounts.auth.uri", sp.prefs["schemauth"]+"://"+sp.prefs["urlauth"]+"/v1");
  }
  else{
    reset("identity.fxaccounts.auth.uri");
  }
}

sp.on("useauth", onPrefAuth);
sp.on("urlauth", onPrefAuth);
sp.on("schemauth", onPrefAuth);

// Server Content

function onPrefContent(){
  if (sp.prefs["usecontent"] == true) {
    set("identity.fxaccounts.remote.signin.uri", sp.prefs["schemacontent"]+"://"+sp.prefs["urlcontent"]+"/signin?service=sync&context=fx_desktop_v1");
    set("identity.fxaccounts.remote.signup.uri", sp.prefs["schemacontent"]+"://"+sp.prefs["urlcontent"]+"/signup?service=sync&context=fx_desktop_v1");
    set("identity.fxaccounts.remote.force_auth.uri", sp.prefs["schemacontent"]+"://"+sp.prefs["urlcontent"]+"/force_auth?service=sync&context=fx_desktop_v1");
    set("identity.fxaccounts.settings.uri", sp.prefs["schemacontent"]+"://"+sp.prefs["urlcontent"]+"/settings");
  }
  else{
    reset("identity.fxaccounts.remote.signin.uri");
    reset("identity.fxaccounts.remote.signup.uri");
    reset("identity.fxaccounts.remote.force_auth.uri");
    reset("identity.fxaccounts.settings.uri");
  }
}
sp.on("usecontent", onPrefContent);
sp.on("urlcontent", onPrefContent);
sp.on("schemacontent", onPrefContent);