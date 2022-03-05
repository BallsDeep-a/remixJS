import { Link } from "remix";

export function CompactClassPreview({ className, theClass }) {
  return (
    <div
      className={["container flex flex-row rounded py1", className].join(" ")}
    >
      <img
        src={theClass.icon}
        alt="class-image"
        className="class-preview-img ml1"
      />
      <div className="flex flex-column justify-between ml1">
        <Link
          to={`preview/${theClass.slug}`}
          className="link-colored bold fit-content capitalize"
        >
          {theClass.displayName}
        </Link>
        <span className="flex flex-row h6 grey pr1">
          {theClass.shortDescription}
        </span>
      </div>
    </div>
  );
}
