
export default class FavoritesPage extends AppObject
{
    constructor( root )
    {
        super()
              this.root = root;
              this.lays = {};
              this.lays.base  = null;
              
            this.Render();
    }//constructor

    Render()
    {  
         this.lays.base = ui.addLayout(this.root.viewPager, "linear", "FillXY, HCenter,Vertical");

         var s = "This is your <strong>Favorites page</strong>."
         this.txtHome = ui.addText( this.lays.base, s, "Multiline,Html" )

         this.btnHello = ui.addButton( this.lays.base, "Hello Favorites", "primary" )
         this.btnHello.setOnTouch( ()=>{ ui.showPopup("hi","bottom") } )
        
    }//render()
}//SettingsPage Class