import logo from "~/Assets/Img/Classes/paladin.png";
import { BaseClass } from "~/Classes/BaseClass";
import { IceArrow } from "~/Skills/IceArrow/IceArrow";
import { AmirInator } from "~/Skills/AmirInator/AmirInator";

export class Paladin extends BaseClass {
  displayName = "Paladin";
  slug = "paladin";

  icon = logo;

  shortDescription = "The holy warriors of god. Deus le vult.";
  description =
    "Sturdy with a variety of healing spells. The perfect tankers one would say";

  stats = {
    strength: 15,
    dexterity: 4,
  };

  skills = [new IceArrow(), new AmirInator()];

  publicFields = ["icon", "description", "stats", "skills"];
}
