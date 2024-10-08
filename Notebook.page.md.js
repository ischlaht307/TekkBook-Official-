ui.css("./Notebook.css");
export default class NotebookPage extends AppObject
{
    constructor( root )
    {
        super()
            this.root = root;
            this.lays = {}
             this.lays["base"] = null;
             
             this.Render();
    }//Construstor
    
    Render()
    {
            this.lays["base"] = ui.addLayout(this.root.viewPager, "linear", "FillXY, HCenter,Vertical");
                 this.lays["base"].backColor = "green";

            this.lays["title"] = ui.addText(this.lays["base"], "Notebook & Project Planner", "Primary, MultiLine", 0.9, -1 )
            this.lays.title.addClass("title");

   
    }//render()
    
    
}//NotebookPage Class---END

const notebook_css = {
                ".title" : {
                    "background-color": "black",
                  },
                  ".paper" : {
                      color: "Black",
                      "background-color": "grey"
                  }
             }


/*class Joss extends ui.Control{
    constructor(parent, width, height, ){
        super(parent, width, height, options, "Joss");
            
    }
    _create(){
           this._ctl = document.createElement( "video" )

        // Make sure it will occupy the container's width and height
        this._ctl.style.width = "100%"
        this._ctl.style.height = "100%"
    }
}
*/





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