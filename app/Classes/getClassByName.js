export async function getClassByName(name) {
  switch (name) {
    case "barbarian":
      return new (await import("./Barbarian/Barbarian")).Barbarian();
    case "druid":
      return new (await import("./Druid/Druid")).Druid();
    case "paladin":
      return new (await import("./Paladin/Paladin")).Paladin();

    default:
      return null;
  }
}
