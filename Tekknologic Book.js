cfg.fast;
//ui.css("./Styles.css");

class Main extends App
{      
    constructor(){
        super();
        ui.setTheme("light");
        ui.setThemeColor("darkred", "red");
        this.AppStarted = false;
//Page Instances and routing initializers-------------==========
            setTimeout(()=>{this.pages = {
                                         "Structures": new StructuresPage(this),
                                         "Home" :	new HomePage(this),
                                         "Favorites": new FavoritesPage(this),
                                         "Studio": new StudioPage(this),
                                          "Notebook": new NotebookPage(this),
                                         }// this.pages{}
            },10);
      
         this.CurrentPage = 3;
            
            this.viewDimensions = {};
                this.viewDimensions["width"]= 1.0;
                this.viewDimensions["appbar"]= 0.055;
                this.viewDimensions["bottombar"]= 0.045;
                this.viewDimensions["viewpager"]=1.0- this.viewDimensions["appbar"] - this.viewDimensions["bottombar"];
 
    }// constructor
   
    onStart()
    {
    app.Hide();
        this.rootLay = ui.addLayout("main","linear","fillxy, hcenter");
       this._AppViewLayout() ;//Topbar, Bottombar, Viewpager.
       this.Config = new AppSys(this);
       //setTimeout(()=>{app.Alert(this.Config.Preferences.get("defaults")["start-page"])},500);
       //this.viewPager.goto(this.Config.Preferences.get("defaults")["start-page"])
    }

//METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----
//METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----MÈxçm,;p.,0;;;;;;;;oETHODS-----METHODS-----METHODS-----
//METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----
//METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----
//METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----
//METHODS-----METHODS-----METHODS-----METHODS-----METHODS-----METHODS-D----METHODS-----METHODS-----METHODS-----
    _AppViewLayout(){
    
             this.createBar();
        
             this.createDrawer();
             
             this.viewPager = ui.addLayout(this.rootLay, "Slide", "FillXY",1.0,this.viewDimensions["viewpager"]);
                      this.viewPager.setOnSlide((ctl, index)=>{this.navbar.value = index});
                      
              const NavbarData = [ ["Structures","folder"],["Home","home"], [ "Studio","code"],["Favorites", "favorites"], ["NoteBook]","book"] ]
              this.navbar = ui.addBottomNavbar(this.rootLay, NavbarData, "HideLabels", 1.0, this.viewDimensions.bottombar);
                  this.navbar.cornerRadius = [10,10,0,0];
                  this.navbar.backColor = "darkred"
                  this.navbar.textColor = "white";
                  this.navbar.iconColor = "white";
                  this.navbar.setOnChange(this.navbar_Navigate)
         setTimeout(()=>{app.Show();},2000);
    }
    navbar_Navigate(pageLabel, pageIndex){
        let label = pageLabel;
        let index = pageIndex;
        this.viewPager.goto(index)
        let RenderCodePage = (this.CurrentPage === 2 && index !== 2? false 
                                                      : this.CurrentPage !== 2 && index === 2? true 
                                                      : "NoEvent" );
        this.CurrentPage = index;
        
        if(RenderCodePage === "NoEvent") return;
            this.pages.Studio.RenderCodePage(RenderCodePage);
    }


    createBar()
    {
        this.bar = ui.addAppBar( this.rootLay, "My App", "center,menu, Primary", 1.0, this.viewDimensions["appbar"])
        this.bar.cornerRadius = [0,0, 10,10 ];
        this.bar.textVariant = "H4";
        this.bar.setOnMenu( () => { this.drawer.show() } )
        
    }
    
    createDrawer()
    {
        this.layDrawer = ui.addLayout( null, "Linear" )

        this.txt = ui.addText(this.layDrawer, "TekkBook", "vcenter,center,h5", 1, 0.1 )
        this.txt.backColor = "red";
        this.txt.textColor = "white";

        //(Icons can be found here - https://fonts.google.com/icons)
        var menus1 = [["home", "HomePage"], ["settings", "SettingsPage"]];
        this.lstMenu = ui.addList( this.layDrawer, menus1, "icon", 1 );
        this.lstMenu.setOnTouch( this.onMenu );

        var drawerWidth = platform.mobile ? 0.1 : 0.2;
        this.drawer = ui.addDrawer( this.layDrawer, "left", drawerWidth );
        this.drawer.setOnClose( ()=>{ console.log("onClose") } );
    }
    onMenu( title, body, icon, index )
    {
        
    }
}//CLASS

/*
Main.prototype.RenderUI = function(pages){
        let arr = Object.keys(pages);
         pages.Home.Render();
         arr.forEach( P => arr[P] = P);
         pages.Home.txt = JSON.stringify(arr[Code]);

}
*/
//import {AppSys} from "Config.packages.md.js";}
app.Import("AppSys", "./Config.packages.md.js");
app.Import("HomePage", "./Home.page.md.js");
//app.Import("SettingsPage", "./Settings.page.md.js");
app.Import("StructuresPage", "./Structures.page.md.js");
app.Import("FavoritesPage", "./Favorites.page.md.js");
app.Import("StudioPage", "./Studio.page.md.js");
app.Import("NotebookPage","./Notebook.page.md.js");

//app.Import("Helpers", "/storage/emulated/0/Android/data/com.smartphoneremote.androidscriptfree/files/Resources/Tekknologic/Modules/Helpers/Helpers.md.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//