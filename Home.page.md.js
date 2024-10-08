
export default class HomePage extends AppObject
{
    #Instances = [];
    constructor( root )
    {
        super()
        this.root = root;
        this.lays = {}
          this.lays.base = null;
          this.Render();
    }//Construstor
    
    Render()
    {
            this.lays.base = ui.addLayout(this.root.viewPager, "linear", "FillXY, HCenter,Vertical");
           this.lays.base.backColor = "green";

            this.lays.txt = ui.addText(this.lays.base, "", "Primary, MultiLine", 0.8, -1 )

            var s = "This is your <strong>home page</strong>."
            this.txtHome = ui.addText(this.lays.base, s, "Multiline,Html" )
            this.txtHome.textSize = "1.2em";
            console.log("rendered home page!!!!!!!!!!!")
            
    }//render()
    
}//HomePage Class

 








//
/*
           
var els = document.querySelectorAll('*');
this.data = [];
for( var x in els){
    this.ndata = Object.keys(els[x]);
    for( var p in this.ndata){
     Object.keys(this.ndata[p]).forEach(obj => this.data += Object.values(obj)+" \n")
    }
}
this.txt.text = str(this.data) ;
*/
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