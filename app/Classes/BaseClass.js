export class BaseClass {
  displayName;
  icon;
  description;
  stats;
  skills;
  publicFields;
  slug;
  //   constructor(object) {
  //     this.icon = object["icon"];
  //     this.description = object["description"];
  //     this.stats = object["stats"];
  //     this.skills = object["skills"];
  //     this.publicFields = object["publicFields"];
  //   }

  getPublicFields() {
    const output = {};

    this.publicFields.map((key) => {
      output[key] = this[key];
    });

    return output;
  }
}
