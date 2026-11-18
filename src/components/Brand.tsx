import Image from "next/image";
import { cx } from "./ui";

/**
 * College lockup: the crest plus the name set as live text, so the name stays sharp
 * at every size and on every screen. Crest file: public/emblem.webp (112 × 138).
 */
export function Brand({
  tone = "light",
  size = "md",
  className,
  priority,
}: {
  tone?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
  priority?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <span className={cx("flex items-center", size === "sm" ? "gap-2.5" : "gap-2.5 min-[375px]:gap-3", className)}>
      <span className={cx("shrink-0", dark && "rounded-[3px] bg-white p-1.5")}>
        <Image
          src="/emblem.webp"
          alt=""
          width={112}
          height={138}
          priority={priority}
          className={cx("w-auto", size === "sm" ? "h-[42px] min-[375px]:h-[44px]" : "h-[46px] min-[375px]:h-[52px] sm:h-[56px]")}
        />
      </span>
      <span className="flex min-w-0 flex-col whitespace-nowrap leading-none">
        <span className={cx("text-[0.875rem] font-medium", dark ? "text-white/70" : "text-muted")}>
          Jana Seva Sangh&apos;s
        </span>
        <span
          className={cx(
            "mt-1 font-serif font-semibold tracking-[-0.01em]",
            size === "sm" ? "text-[1.1875rem] min-[375px]:text-[1.25rem]" : "text-[1.1875rem] min-[375px]:text-[1.3125rem] sm:text-[1.5rem]",
            dark ? "text-white" : "text-red",
          )}
        >
          Shri Ram College
        </span>
        <span className={cx("mt-1 text-[0.875rem] font-semibold", dark ? "text-white/85" : "text-ink")}>
          of Commerce &amp; Science
        </span>
      </span>
    </span>
  );
}
