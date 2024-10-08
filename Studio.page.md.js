
export default class Studio extends AppObject
{
    constructor(root){
        super();
            this.root = root;
            this.lays = {}
              this.lays.base = null;
              this.lays.codePagebase= null;
             this.Render();
       
    }//Constructor
    
    
    Render()
    {
        this.lays.base = ui.addLayout(this.root.viewPager, "linear", "FillXY, HCenter,Vertical");
        
            this.lays.txt = ui.addText(this.lays.base, "Studio", "Primary", 0.8, -1 )
            this.RenderCodePage(false);
            
    }//render()
    
    
    RenderCodePage(show){
        if(!this.lays.codePageBaseLay){
            this.lays.codePageBaseLay = app.CreateLayout("Linear","HCenter,FillX")
            
             this.lays.codePageBaseLay.Animate("ScaleToTop", null,1)
              this.lays.codePageCard = app.CreateLayout("Card", "FillXY")
                this.lays.codeEdit = app.CreateCodeEdit("","FillXY" );
                this.lays.codePageCard.SetBackAlpha(255);
                
                    this.lays.codePageBaseLay.SetSize(-1, 0.6);
                    this.lays.codePageBaseLay.SetMargins(0.04,0.14,0.04,0);
                    
                    this.lays.codePageCard.SetBackColor( "blue" );
                    this.lays.codePageCard.SetPadding(0.09, 0.09, 0.09, 0.09 );
                    this.lays.codePageCard.SetCornerRadius(40);
                    let mg = 0.015;
                    this.lays.codeEdit.SetMargins(mg,mg,mg,mg);
                        
                        this.lays.codePageBaseLay.AddChild(this.lays.codePageCard )
                        this.lays.codePageCard.AddChild(this.lays.codeEdit);
     
                app.AddLayout(this.lays.codePageBaseLay);
             
             }// if this.codePage
            // if(show) setTimeout(()=>{this.lays.codePageBaseLay.Animate("ScaleFromTop", null, 1000)},100);
                  if(this.root.AppStarted){
                       if(show) this.lays.codePageBaseLay.Animate("ScaleFromTop", null, 1000);
                        else this.lays.codePageBaseLay.Animate("ScaleToTop", null,1000)
                   }else{ 
                        this.lays.codePageBaseLay.Animate("ScaleToTop", null, 0);
                        this.root.AppStarted = true;
                   }
    }//RenderCodePage
  

}//Studio class


class Joss extends ui.Control{
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