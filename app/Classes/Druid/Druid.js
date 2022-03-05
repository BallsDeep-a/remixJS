import logo from "~/Assets/Img/Classes/druid.png";
import { BaseClass } from "~/Classes/BaseClass";
import { IceArrow } from "~/Skills/IceArrow/IceArrow";
import { AmirInator } from "~/Skills/AmirInator/AmirInator";

export class Druid extends BaseClass {
  displayName = "Druid";
  slug = "druid";
  icon = logo;

  shortDescription = "Masters of magic with unmatched wisdom.";
  description =
    "High wisdom and a lot of spells. Not to mention quite the long... staff. Yes, staff";

  stats = {
    strength: 15,
    dexterity: 4,
  };

  skills = [new IceArrow(), new AmirInator()];

  publicFields = ["icon", "description", "stats", "skills"];
}
