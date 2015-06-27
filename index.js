var sp = require("sdk/simple-prefs");
var { get, set, reset } = require("sdk/preferences/service");

// Server Sync

function onPrefSync(){
  if(sp.prefs["usesync"] == true){
    set("services.sync.tokenServerURI", sp.prefs["schemasync"]+"://"+sp.prefs["urlsync"]+"/token/1.0/sync/1.5");
  }
  else{
    reset("services.sync.tokenServerURI");
  }
}

sp.on("usesync", onPrefSync);
sp.on("urlsync", onPrefSync);
sp.on("schemasync", onPrefSync);

// Server Auth

function onPrefAuth(){
  if ( sp.prefs["useauth"]== true) {
    set("identity.fxaccounts.auth.uri", sp.prefs["schemauth"]+"://"+sp.prefs["urlauth"]+"/v1");
  }
  else{
    reset("identity.fxaccounts.auth.uri");
  }
}

sp.on("useauth", onPrefAuth);
sp.on("urlauth", onPrefAuth);
sp.on("schemauth", onPrefAuth);