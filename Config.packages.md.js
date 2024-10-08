

//FILE	SYSTEM	VARS-----FILE	SYSTEM	VARS-----FILE	SYSTEM	VARS-----FILE	SYSTEM	VARS-----
//----FILE	SYSTEM	VARS-----FILE	SYSTEM	VARS-----FILE	SYSTEM	VARS-----FILE	SYSTEM	VARS-----
const APP_NAME = app.GetAppName(); // "TekkBook" 
const APP_PATH = app.GetAppPath(); // ./tekkbook ...
const TEKKBOOK_META_DIR = APP_PATH + "/meta.json"; // ./tekkbook/meta.json ...
 const TEKKBOOK_DIRS = {};
             TEKKBOOK_DIRS.FS = APP_PATH + "/FS"; // ./tekkbook/FS ...
                 TEKKBOOK_DIRS.USER_DATA = {};
                     TEKKBOOK_DIRS.USER_DATA.LIBRARY = TEKKBOOK_DIRS.FS + "/USER-DATA/LIBRARY"; // ./tekkbook/FS/USERDATA/LIBRARY ...
                     TEKKBOOK_DIRS.USER_DATA.CODES = TEKKBOOK_DIRS.USER_DATA.LIBRARY+ "/CODES";// ./tekkbook/FS/USERDATA/LIBRARY/CODES ...
                     TEKKBOOK_DIRS.USER_DATA.NOTEBOOKS = TEKKBOOK_DIRS.USER_DATA.LIBRARY+ "/NOTEBOOKS";// ./tekkbook/FS/USERDATA/LIBRARY/NOTEBOOKS ...
                 TEKKBOOK_DIRS.CONFIG = TEKKBOOK_DIRS.FS + "/CONFIG"; // ./tekkbook/FS/CONFIG ...
                     TEKKBOOK_DIRS.STATES = TEKKBOOK_DIRS.CONFIG + "/states.json"; // ./tekkbook/FS/CONFIG/states.json ...
                     TEKKBOOK_DIRS.PREFS = TEKKBOOK_DIRS.CONFIG + "/prefs.json"; // ./tekkbook/FS/CONFIG/prefs.json ...
                     TEKKBOOK_DIRS.RES_DIR = TEKKBOOK_DIRS.CONFIG + "/RES";// ./tekkbook/FS/CONFIG/RES ...
                     TEKKBOOK_DIRS.RES = {};
                     TEKKBOOK_DIRS.RES.STRINGS = TEKKBOOK_DIRS.RES_DIR + "/strings.json"; // ./tekkbooki/FS/CONFIG/RES/strings.json ...
                     TEKKBOOK_DIRS.RES.DIMS = TEKKBOOK_DIRS.RES_DIR + "/dimensions.json";// ./tekkbook/FS/CONFIG/RES/dimensions.json ...
            
            
//Init vars for file creating at first app launch----------------------------
//Init vars for file creating at first app launch--------------------------------
//Init vars for file creating at first app launch----------------------------
const _init_Meta_Data_ = {
        "package-name": app.GetPackageName(),
        "version": "0.0.01-Dev-Ops : New release 1st launch: "+ app.IsNewVersion(),//Production - 1.0.0Beta/alpha/tekk
        "app-launches": 1,
        "env" :	"Dev-Operations.Alpha1.EXP",
        "build": app.GetBuildNum(),
        "install-date":	new Date().toISOString(),
        "apk": app.IsAPK(),
        "app-type": app.GetType(),
        "debugging": app.IsDebugging(),
        "permissions": app.ListPermissions(),
        "options" : app.GetOptions(),
        "user-agent" :{
           "users" : 1,
            "id": app.GetDeviceId(),
            "model": app.GetModel(),
            "os-api-level": app.GetOSVersion(),
            "free-space-int": app.GetFreeSpace("internal"),
            "free-space-ext": app.GetFreeSpace("external"),
            "type": (app.IsTablet() ? "tablet " 
                         : app.IsChrome() ? "chrome"
                         : app.IsTV ? "tv" 
                         : "Phone" ),
             "soft-navbar": app.HasSoftNav(),
             "right-navbar": app.IsNavBarOnRight(),
             "lock-type": null, // Screenlock, Pin, Password, Bio-fingerprint|face, Voice?,          
          }
    }
          //tekkbook/fs/config/res/strings.json ------ VAR
//tekkbook/fs/config/res/strings.json ------ VAR
    const _init_Strings_ = {
                    "app-name": "TekkBook",
                    
                 }// init_Strings
    const _init_Dimensions_ = {
                     text:{
                         unit: "em",
                         smaller: 0.7,
                         small: 0.85,
                         medium: 0.9,
                         base: 1.0,
                         large: 1.2,
                         larger: 1.4,
                         largest: 1.8,
                         heading: 2.2,
                         sub: 1.4,
                     },
                     tabs: {
                         width:1.0,
                         height: 0.14,
                     },
                     appbar: {
                          width: 1.0,
                          height: 0.1,
                     }
                 }
           
          //tekkbook/fs/config/prefs.json ------- VAR         
//tekkbook/fs/config/prefs.json ------- VAR                  
    const _init_Preferences_ = {
                         "theme" : {
                             "mode" :	"light",
                             "primary" : "darkred",
                             "secondary" : "white",
                           },
                           "defaults" :	{
                               "start-page" : "Home",//OR LAST
                           },
                           "security": {
                                "enabled" : false,
                                "lock-type": "none",
                                "lock-at-startup": false,
                                "lock-onPause" : false,
                             },
                             "auto-save" : false,
                             "primary-language" : "javascript",
                             "studio-text" : {
                                 "size" :	"1.0em",
                                 "syntax" : "javascript",
                                 "indent-to-spaces" : true,
                             }
                             
                 }// init_Preferences
                 
             //tekkbook/fs/config/states.json ------- VAR         
//tekkbook/fs/config/states.json ------- VAR    
 const _init_States_ = {
          "first-launch" :	true,
          "environment": "dev",//apk, spk, dev, production, test 
           "lock": {
               "type": "none",
               "enabled" : false,
              "tries" : 0
           }
             }// Init_States
                          
                                
/** Files Structure (without user library files)
――tekkbook＿
[meta data]  –|^meta.json
[filesystem] –|^FS＿
―――――――––―|^USER-DATA＿
[user saved data] -|―————――|^LIBRARY＿***
[app build confg]   |^ CONFIG＿
[states/user prefs]|  ―――–—|^states.json & prefs.json
[resources]—――–|^RES＿
[strings resource]  ——––|^ strings.json
[dimensions resource]  –-|^ dimensions.json
**/

export default class AppSystems{
    constructor(rootClass){
    app.SetOnError( this.OnErrorHandle );
        this.rootClass = rootClass;
          this.APP_NAME = app.GetAppName(); // "TekkBook" 
          this.APP_PATH = app.GetAppPath(); // ./tekkbook ...
            this._META_DATA_DIR_ = TEKKBOOK_META_DIR;
            this._TEKKBOOK_DIRS_ = TEKKBOOK_DIRS;
        //Setter and File System formated Values
                this.Meta_json = null;
                this.State_json = null;
                this.Preferences_json = null;
                this.Dims_json = null;
                this.Strings_json = null;
        //Getter Variables *NOTE- needs updated everytime JSON siblings change
                    this.Meta = new Map();
                    this.State = new Map();
                    this.Preferences = new Map();
                    this.Dims = new Map();
                    this.String = new Map();
                    
         this._initializeAppSystems_();
         setTimeout(()=>{this.Update_Prefs("defaults.start-page", "new")}, 500);
    }//constructor
    
    Update_Prefs(pref, val){
        let update = JSON.parse(this.Preferences_json);
        let newVal = "";
            if(pref.indexOf(".") != -1){ var prefArray = pref.split(".");}
            if(prefArray) prefArray.forEach((value) =>{ newVal = newVal+ "[\"" +value+ "\"]"  });
                eval("update"+newVal+" = \""+val+"\";")
                try{app.WriteFile(this._TEKKBOOK_DIRS_.PREFS, JSON.stringify(update));}
                catch(e){ 
                    console.log(`Debug : FAILED TO UPDATE SETTING -->> *${prefs}* WITH ERROR: ${e}` );
                    throw e+" -->> Setting could not be updated!";}
                this.Preferences.set(prefArray[0], update[prefArray[0]]);
                   if(this.rootClass.DEV_ENV === true) console.log(`App Flow: Setting**${pref}**successfully Updated`)
    }
    Update_File(){
    
    }
  //*******Start of initialzing Filesystems at app first launch and every launch
    _initializeAppSystems_(){
              let dt = this._initializeFileSystem_()
                     dt.then((res) =>{ 
                          res.forEach((sys)=>{
                                   let key = Object.keys(JSON.parse(sys.data));
                                   let val = Object.values(JSON.parse(sys.data));
                                   let len = key.length;
                                   let k = 0;
                                   for(k; k<len; k++){
                                       if(sys["name"] === "dimensions.json"){ this.Dims.set(key[k].toString(), val[k]);
                                           if(k === 0) this.Dims_json = sys.data }
                                       if(sys["name"] === "strings.json"){ this.String.set(key[k].toString(), val[k]);
                                           if(k === 0) this.Strings_json = sys.data }
                                       if(sys["name"] === "prefs.json"){ this.Preferences.set(key[k].toString(), val[k]);
                                           if(k === 0) this.Preferences_json = sys.data }
                                       if(sys["name"] === "states.json"){ this.State.set(key[k].toString(), val[k]);
                                           if(k === 0) this.States_json = sys.data }
                                       if(sys["name"] === "meta.json"){ this.Meta.set(key[k].toString(), val[k]);
                                           if(k === 0) this.Meta_json = sys.data }
                                   }      
                     });
              })
    }//init() 
//*******Making this process async - File systems
   async _initializeFileSystem_(){
        let DirSys = [];
        let FileSys = [];
//  ./ FS Filesystem FOLDER
              DirSys.push(await this.Folder_File_Handler(this._TEKKBOOK_DIRS_.FS, null));
// ./FS/USER_DATA/LIBRARY FOLDER
              DirSys.push(await this.Folder_File_Handler(this._TEKKBOOK_DIRS_.USER_DATA.LIBRARY, null));
// ,FS/USER_DATA/LIBRARY/NOTEBOOK FOLDER          
              DirSys.push(await this.Folder_File_Handler(this._TEKKBOOK_DIRS_.USER_DATA.NOTEBOOKS, null));
// ,FS/USER_DATA/LIBRARY/CODES FOLDER           
              DirSys.push(await this.Folder_File_Handler(this._TEKKBOOK_DIRS_.USER_DATA.CODES, null));
// ./FS/CONFIG FOLDER
              DirSys.push(await this.Folder_File_Handler(this._TEKKBOOK_DIRS_.CONFIG, null));
 // Resources FOLDER
              DirSys.push(await this.Folder_File_Handler(this._TEKKBOOK_DIRS_.RES_DIR, null));
// Strings resource FILE
              DirSys.push(await this.Folder_File_Handler(this._TEKKBOOK_DIRS_.RES.STRINGS, _init_Strings_));
//Dimensions resource FILE
              DirSys.push(await this.Folder_File_Handler(this._TEKKBOOK_DIRS_.RES.DIMS, _init_Dimensions_));
// states.json FILE
              DirSys.push(await this.Folder_File_Handler(this._TEKKBOOK_DIRS_.STATES,  _init_States_));
// prefs.json FILE
              DirSys.push(await this.Folder_File_Handler(this._TEKKBOOK_DIRS_.PREFS,  _init_Preferences_));
//App/Device/User Meta data file
              DirSys.push(await this.Folder_File_Handler(this._META_DATA_DIR_,  _init_Meta_Data_));
                  for(let obj in DirSys){
                      if(DirSys[obj].success !== true) throw `*${DirSys[obj].type}*  initialisation Failed  at directory  *${DirSys[obj].dir}*`
                      if(DirSys[obj].type === "file") FileSys.push(DirSys[obj]);
                  }
             return await FileSys;
    }// async _initializeFileSystem_()
//******Checking/Creating/Init File Systems
    Folder_File_Handler(dir, data){
         let d = dir.split("/");
         let f = d[d.length-1];
         let type = (f.toLowerCase().endsWith(".json") ? "file"
                             : f.toLowerCase().endsWith(".js") ? "file" 
                             : "folder");
//check and init folders        
             if(type === "folder"){
                 let folderExists = app.FolderExists(dir);
                     if(folderExists){
                          console.log("App Flow : Folder  exists -->> "+f);
                           return {"dir" : dir, "name" :	f, "type" : type,  "state" : "exists", "success" : true};
                      }// if(exists)
                 let makeFolder = app.MakeFolder(dir);
                     if( app.FolderExists(dir)){ 
                         console.log("App Flow : Folder created -->> "+f);
                          return {"dir" : dir, "name" :	f, "type" : type,  "state" : "created", "success" : true};
                      }//if
                      else{
                          console.log("App Flow : Failed to create folder -->> "+f);
                            return {"dir" : dir, "name" :	f,  "type" : type,  "state" : null, "success" : false}
                      }//else
              }// if(type === Folder)
//check and init files
              else if(type === "file"){
                   let fileExists = app.FileExists(dir);
                       if(fileExists){
                           console.log("App Flow -> File exists -->> "+ f);
                             return {"dir" : dir, "name" :	f, "type" : type, "state" : "exists", "success" :	true, "data" : app.ReadFile(dir)}
                       }// if exists
                    let write = app.WriteFile(dir, JSON.stringify(data));
                        if(app.FileExists(dir)){
                            console.log("App Flow : File created -->> "+ f);
                              return {"dir" : dir, "name" :	f, "type" : type, "state" : "created", "success" :	true, "data" : app.ReadFile(dir)}
                        }// if
                        else{
                            console.log("App Flow : Failed to create and write to File -->> "+f);
                              return {"dir" : dir, "name" : f, "type" : type, "state" : null, "success" :	false, "data" : null}
                        }// elseq
              }// else if (type === file)
    }// Folder_File_Handler()
    OnErrorHandle(msg, line, file){
        let txt = `--》 Message: ${msg} \n
        --》 File: ${file} \n
        --》 Line: ${line}`;            
       app.Alert(txt);
    }
    
}//appSysem class 


/*
 function newDescriptor(propertyName, getter, setter, options = {}) {
    return {
        get: getter,
        set: setter,
        ...options
    };
}

Object.defineProperty(AppSystems.prototype,"Prefs", newDescriptor(
    "Prefs",
    function() { return this.Preferences },
    function(x) { app.ReplaceInFile(  ) },
    { enumerable: true }
));

Object.defineProperty(AppSystems.prototype, "States", createPropertyDescriptor(
    "States",
    function() { },
    function(newValue) {  }
));
*/

//-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS 
//-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS 
//-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS 
//-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS 
//-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS 
//-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS 
//-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS 
//-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS //-----DEV TOOLS----DEV TOOLS 

//-------========--------=======---=-=-=-=-=---===-=-=-====---=-=-=-==-
//-------========--------=======---=-=-=-=-=---===-=-=-===---=-=-=-===-
//-------========--------=======---=-=-=-=-=---===-=-=-====---=-=-=-==-
//-------========--------=======---=-=-=-=-=---===-=-=-===---=-=-=-===-
//-------========--------=======---=-=-=-=-=---===-=-=-====---=-=-=-==-
//-------========--------=======---=-=-=-=-=---===-=-=-===---=-=-=-===-
//-------========--------=======---=-=-=-=-=---===-=-=-====---=-=-=-==-
//-------========--------=======---=-=-=-=-=---===-=-=-===---=-=-=-===-

/*
 function createCachingProxy(target) {
  const cache = new Map();

  const handler = {
    get(target, prop) {
      if (cache.has(prop)) {
        return cache.get(prop);
      }

      const value = Reflect.get(target, prop);
      cache.set(prop, value);
      return value;
    },

    set(target, prop, value) {
      cache.set(prop,v value);

      return Reflect.set(target, prop, value);
    }wafraa
  };
ddwaddddddwwAAAawDDDDD  return new Proxy(target, handler);
}

// Example usage
const originalObject = {
  property1: "value1",
  property2: "value2"
};

const cachedObject = createCachingProxy(originalObject);

console.log(cachedObject.property1); // Output: value1 (from cache)
console.log(cachedObject.property2); // Output: value2 (from cache)

cachedObject.property1 = "new value";
console.log(cachedObject.property1); // Output: new value (from cache)

*/
//-------========--------=======---=-=-=-=-=---===-=-=-====---=-=-=-==-
//-------========--------=======---=-=-=-=-=---===-=-=-===---=-=-=-===-
//-------========--------=======---=-=-=-=-=---===-=-=-====---=-=-=-==-
//-------========--------=======---=-=-=-=-=---===-=-=-===---=-=-=-===-
//-------========--------=======---=-=-=-=-=---===-=-=-====---=-=-=-==-
//-------========--------=======---=-=-=-=-=---===-=-=-===---=-=-=-===-