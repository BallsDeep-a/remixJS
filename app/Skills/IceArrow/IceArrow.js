// export const IceArrow = {
//   displayName: "Ice Arrow",

//   stats: {
//     penetration: 5,
//     magic: 10,
//   },

//   classess: [],
//   type: "Magical",
//   level: 0,
//   cost: 15,
//   currency: "Mana",
//   cooldown: 5,

//   main: function (player, enemy) {
//     (user, enemy);
//   },
// };

import { BaseSkill } from "~/Skills/BaseSkill";

export class IceArrow extends BaseSkill {
  displayName = "Ice Arrow";

  stats = {
    penetration: 5,
    magic: 10,
  };

  classes = null;
  type = "Magical";
  minLevel = 2;
  cost = 15;
  currency = "Mana";
  cooldown = 5;
}
