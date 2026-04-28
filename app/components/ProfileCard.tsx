type ProfileCardProps = {
  name: string;
  role: string;
  imageUrl: string;
  imageAlt: string;
  centered?: boolean;
  className?: string;
  size?: "default" | "large";
  imagePositionClass?: string;
};

export function ProfileCard({
  name,
  role,
  imageUrl,
  imageAlt,
  centered = false,
  className = "",
  size = "default",
  imagePositionClass = "object-center",
}: ProfileCardProps) {
  const imageSize = size === "large" ? "h-24 w-24" : "h-20 w-20";
  const titleSize = size === "large" ? "text-3xl" : "text-xl";
  const roleSize = size === "large" ? "text-lg" : "text-base";
  const minimumHeight = size === "large" ? "min-h-[320px]" : "min-h-[250px]";

  return (
    <article
      className={`group rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 ${minimumHeight} ${
        centered ? "mx-auto max-w-sm text-center" : ""
      } ${className} glass-card`}
    >
      <img
        src={imageUrl}
        alt={imageAlt}
        className={`mx-auto rounded-full border-2 border-white/10 object-cover shadow-lg ring-4 ring-slate-800/40 transition duration-300 group-hover:ring-indigo-200 ${imageSize} ${imagePositionClass}`}
      />
      <p className={`mt-5 font-semibold text-white ${titleSize}`}>{name}</p>
      <p className={`mt-2 whitespace-pre-line leading-relaxed text-slate-300 ${roleSize}`}>{role}</p>
    </article>
  );
}
