type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="relative">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-xs md:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
      <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 sm:w-20" />
    </div>
  );
}
