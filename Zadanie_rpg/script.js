function klasa(hp,mana,str,ag,inte,gold){
    this.hp = hp;
    this.mana = mana;
    this.str = str;
    this.ag = ag;
    this.inte = inte;
    this.gold = gold;
}
function item(damage,level,zuzycie,cena){
    this.damage = damage;
    this.level = level;
    this.zuzycie = zuzycie;
    this.cena = cena;
}
var mecz = new item(15,1,100,25);
var rozdzka = new item(25,1,100,50);
var lutnia = new item(0,1,100,150);
var laska = new item(20,1,100,10);
var Wojownik = new klasa(10,0,10,10,2,100);
var Czarodziej = new klasa(5,10,5,5,10,1000);
var Bard = new klasa(7,5,8,10,8,50);
var Druid = new klasa(8,10,10,10,10,0);

function myFunction(){
    var hp_w;
    var mana_w;
    var str_w;
    var ag_w;
    var inte_w;
    var gold_w;
    var klasa_js = document.getElementById("klasa_select").value;
    switch(klasa_js){
        case "Wojownik":
        hp_w = Wojownik.hp;
        mana_w = Wojownik.mana;
        str_w = Wojownik.str;
        ag_w = Wojownik.ag;
        inte_w = Wojownik.inte;
        gold_w = Wojownik.gold;
        ava.innerHTML= "<img src = \"wojownik.jpg\">";
        document.getElementById("inwent").innerHTML = "Damage: " + mecz.damage + "<br>Level: " + mecz.level + "<br>Zuzycie: " + mecz.zuzycie + "<br>Cena: "+ mecz.cena ;
        zd_inv.innerHTML= "<img src = \"miecz.jpg\">";
        break;
        case "Czarodziej":
        hp_w = Czarodziej.hp;
        mana_w = Czarodziej.mana;
        str_w = Czarodziej.str;
        ag_w = Czarodziej.ag;
        inte_w = Czarodziej.inte;
        gold_w = Czarodziej.gold;
        ava.innerHTML= "<img src = \"czar.jpg\">";
        document.getElementById("inwent").innerHTML = "Damage: " + rozdzka.damage + "<br>Level: " + rozdzka.level + "<br>Zuzycie: " + rozdzka.zuzycie + "<br>Cena: "+ rozdzka.cena ;
        zd_inv.innerHTML= "<img src = \"rozdzka.jpg\">";
        break;
        case "Bard":
        hp_w = Bard.hp;
        mana_w = Bard.mana;
        str_w = Bard.str;
        ag_w = Bard.ag;
        inte_w = Bard.inte;
        gold_w = Bard.gold;
        ava.innerHTML= "<img src = \"bard.jpg\">";
        document.getElementById("inwent").innerHTML = "Damage: " + lutnia.damage + "<br>Level: " + lutnia.level + "<br>Zuzycie: " + lutnia.zuzycie + "<br>Cena: "+ lutnia.cena ;
        zd_inv.innerHTML= "<img src = \"lutnia.jpg\">";
        break;
        case "Druid":
        hp_w = Druid.hp;
        mana_w = Druid.mana;
        str_w = Druid.str;
        ag_w = Druid.ag;
        inte_w = Druid.inte;
        gold_w = Druid.gold;
        ava.innerHTML= "<img src = \"druid.jpg\">";
        document.getElementById("inwent").innerHTML = "Damage: " + laska.damage + "<br>Level: " + laska.level + "<br>Zuzycie: " + laska.zuzycie + "<br>Cena: "+ laska.cena ;
        zd_inv.innerHTML= "<img src = \"laska.jpg\">";
        break;
    }
    document.getElementById("hp_postaci").innerHTML = "HP: " + hp_w;
    document.getElementById("mana_postaci").innerHTML = "Mana: " + mana_w;
    document.getElementById("str_postaci").innerHTML = "Strengh: " + str_w;
    document.getElementById("ag_postaci").innerHTML = "AG: " +ag_w;
    document.getElementById("inte_postaci").innerHTML = "Intelect: " + inte_w;
    document.getElementById("gold_postaci").innerHTML = "Dengi: " +   gold_w;
}