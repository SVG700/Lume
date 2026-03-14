type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="relative">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
      <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-electric to-violet" />
    </div>
  );
}
