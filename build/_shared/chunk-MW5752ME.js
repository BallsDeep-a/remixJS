import{g as s}from"/build/_shared/chunk-TOAMQMCD.js";s();var o=class{displayName;icon;description;stats;skills;publicFields;slug;getPublicFields(){let t={};return this.publicFields.map(e=>{t[e]=this[e]}),t}};s();s();var a="/build/_assets/spell-6Y6VIHFP.png";var l=class{Player;Enemy;displayName;stats;classess;type;minLevel;cost;currency;cooldown;main;publicFields;icon=a;constructor(t,e){this.Player=t,this.Enemy=e}get getPublicFields(){let t={};return this.publicFields.map(e=>{t[e]=this[e]}),t}};var r=class extends l{displayName="Ice Arrow";stats={penetration:5,magic:10};classes=null;type="Magical";minLevel=2;cost=15;currency="Mana";cooldown=5};s();var m=class extends l{displayName="AmirInator";stats={penetration:5,magic:10};classes=null;type="Magical";minLevel=0;cost=15;currency="Mana";cooldown=5};export{o as a,r as b,m as c};