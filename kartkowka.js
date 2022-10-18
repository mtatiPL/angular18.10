var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Zwierze = /** @class */ (function () {
    function Zwierze(name, wiek, waga) {
        this.name = name;
        this.wiek = wiek;
        this.waga = waga;
    }
    Zwierze.prototype.setOwner = function (name) {
        this.name = name;
    };
    Zwierze.prototype.getName = function () {
        return this.name;
    };
    Zwierze.prototype.jedz = function (glod) {
        this.glod = glod - 10;
    };
    Zwierze.prototype.dzialaj = function (glod) {
        this.glod = glod + 5;
    };
    return Zwierze;
}());
var Ssak = /** @class */ (function (_super) {
    __extends(Ssak, _super);
    function Ssak(name, wiek, waga) {
        return _super.call(this, name, wiek, waga) || this;
    }
    Ssak.prototype.zabawa = function (zadowolenie) {
        this.zadowolenie = zadowolenie + 10;
    };
    return Ssak;
}(Zwierze));
var ssak = new Ssak("delfin", 10, 40);
console.log(ssak);
ssak.jedz(50);
console.log(ssak);
ssak.dzialaj(50);
console.log(ssak);
ssak.zabawa(0);
console.log(ssak);
