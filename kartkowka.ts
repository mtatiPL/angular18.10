abstract class Zwierze{
    private name:string;
   protected  wiek:number;
    protected waga:number;
    protected glod:number;

    constructor(name:string,wiek:number,waga:number){
        this.name=name;
        this.wiek=wiek;
        this.waga=waga;
       

    }
    setOwner(name:string):void{
        this.name=name;
    }
    getName():string{
        return this.name;
    }
  jedz(glod:number){
    this.glod=glod-10;
  }
  dzialaj(glod:number){
this.glod=glod+5
  }
}
class Ssak extends Zwierze{
    zadowolenie:number;
    constructor(name:string,wiek:number,waga:number){
        super(name, wiek, waga);
    }
    zabawa(zadowolenie:number){
        this.zadowolenie=zadowolenie+10;
    }
}
const ssak:Ssak=new Ssak("delfin",10,40);
console.log(ssak);

ssak.jedz(50);
console.log(ssak);


ssak.dzialaj(50);
console.log(ssak);


ssak.zabawa(0);
console.log(ssak);


