import SpellIcon from "~/Assets/Img/spell.png";

export class BaseSkill {
  Player;
  Enemy;
  displayName;
  stats;
  classess;
  type;
  minLevel;
  cost;
  currency;
  cooldown;
  main;
  publicFields;
  icon = SpellIcon;
  //   constructor(skill) {
  //     this.displayName = skill["displayName"];
  //     this.player = skill["player"];
  //     this.enemy = skill["enemy"];
  //     this.stats = skill["stats"];
  //     this.classes = skill["classes"];
  //     this.type = skill["type"];
  //     this.minLevel = skill["minLevel"];
  //     this.currency = skill["currency"];
  //     this.cost = skill["cost"];
  //     this.cooldown = skill["cooldown"];
  //     this.main = skill["main"];
  //   }

  constructor(_Player, _Enemy) {
    this.Player = _Player;
    this.Enemy = _Enemy;
  }

  get getPublicFields() {
    const output = {};

    this.publicFields.map((key) => {
      output[key] = this[key];
    });

    return output;
  }
}
