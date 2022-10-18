abstract class Dom{
    owner: string;
    constructor(owner:string){
        this.owner=owner;
    }
    changeOwner(owner:string):void{
        this.owner=owner;
    }
    getOwner():string{
        return this.owner;
    }
    
    
}


  

    
    class Blok extends Dom{
        private mieszkania:number=15;

        constructor(Owner:string){
            super(Owner);
            
        }


    }
    const blok:Blok=new Blok("Ewa");
    console.log(blok);
     