export default class StructuresPage extends AppObject
{
    constructor(root){
        super();
            this.root = root;
            this.lays = {};
            this.lays.base = null;
            
            this.Render();
    }//constructor
    
    Render()
    {
          this.lays.base = ui.addLayout(this.root.viewPager, "linear", "FillXY, HCenter,Vertical");
            this.lays.base.backColor ="red";
            this.lays.title = ui.addText(this.lays.base, "Structures Page", "H1, FillX" );

    }//render()
    
}//Structures Class