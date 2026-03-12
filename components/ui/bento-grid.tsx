import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
  tag?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] sm:auto-rows-[22rem] grid-cols-1 lg:grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  tag,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-end overflow-hidden rounded-xl",
      "bg-near-black",
      className
    )}
    {...props}
  >
    {/* Background image */}
    <div className="absolute inset-0">{background}</div>

    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    {/* Tag badge */}
    {tag && (
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-block rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
          {tag}
        </span>
      </div>
    )}

    {/* Content */}
    <div className="relative z-10 p-5 sm:p-6">
      <div className="pointer-events-none flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        <Icon className="h-8 w-8 origin-left transform-gpu text-white/80 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl font-display font-bold text-white">
          {name}
        </h3>
        <p className="max-w-lg text-sm text-white/80">{description}</p>
      </div>

      {/* CTA - always visible on mobile */}
      <div className="pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center pt-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden">
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0 text-white hover:text-blox-blue"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    </div>

    {/* CTA - hover reveal on desktop */}
    <div className="pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-5 sm:p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex z-10">
      <Button
        variant="link"
        asChild
        size="sm"
        className="pointer-events-auto p-0 text-white hover:text-blox-blue"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>

    {/* Hover overlay */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/20" />
  </div>
);

export { BentoCard, BentoGrid };
