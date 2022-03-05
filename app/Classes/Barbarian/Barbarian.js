import logo from "~/Assets/Img/Classes/barbarian.png";
import { BaseClass } from "~/Classes/BaseClass";
import { IceArrow } from "~/Skills/IceArrow/IceArrow";
import { AmirInator } from "~/Skills/AmirInator/AmirInator";

export class Barbarian extends BaseClass {
  displayName = "Barbarian";
  slug = "barbarian";

  icon = logo;

  shortDescription = "Pure muscle and physical strength.";
  description =
    "Strong but inaccurate, dealing more damage at the expense of instability";

  stats = {
    strength: 15,
    dexterity: 4,
  };

  skills = [new IceArrow(), new AmirInator()];

  publicFields = ["icon", "description", "stats", "skills"];
}
