import { BaseSkill } from "~/Skills/BaseSkill";

export class AmirInator extends BaseSkill {
  displayName = "AmirInator";

  stats = {
    penetration: 5,
    magic: 10,
  };

  classes = null;
  type = "Magical";
  minLevel = 0;
  cost = 15;
  currency = "Mana";
  cooldown = 5;
}
