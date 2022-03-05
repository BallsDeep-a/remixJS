export function CompleteClassPreview({ className, theClass }) {
  return (
    <div
      className={["flex flex-column items-center stretch", className].join(" ")}
    >
      <div className="flex flex-column items-center stretch container py1 rounded">
        <span className="bold capitalize link-colored">
          {theClass.displayName}
        </span>
        <img
          src={theClass.icon}
          alt="class-icon"
          className="class-preview-img mt1"
        />
        <span className="mt1 grey px1 center">{theClass.description}</span>
      </div>

      <div className="flex flex-column stretch container py1 rounded border-top border-red mt1">
        <span className="link-colored self-center">Initial Stats</span>
        {Object.keys(theClass.stats).map((key, i) => (
          <div className="flex flex-row px1">
            <span key={`${i}-name`} className="capitalize link-colored">
              {key}: &nbsp;
            </span>
            <span
              key={`${i}-value`}
              className={`${
                theClass.stats[key] >= 5 ? "text-green" : "text-red"
              } bold`}
            >
              {theClass.stats[key]}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-column stretch container py1 rounded border-top border-red mt1">
        <span className="link-colored self-center">Skills</span>
        {Object.keys(theClass.skills).map((key, i) => (
          <div className="flex flex-row px1 link-colored">
            <img
              key={`spell_icon-${i}-value`}
              src={theClass.skills[key].icon}
              className="spell-icon self-center"
            />
            <span key={`${i}-skill_name`} className="ml1">
              {theClass.skills[key].displayName}
            </span>

            {theClass.skills[key].minLevel > 0 && (
              <span
                key={`${i}-skill_level`}
                className="ml1 grey h6 self-center"
              >
                [LVL {theClass.skills[key].minLevel}]
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
