import type { FC, SVGProps } from "react";

interface IProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  tooltipText?: string;
}

const TechIcon = ({ icon: Icon, tooltipText }: IProps) => (
  <div className="group relative flex flex-col items-center justify-center">
    <Icon
      className="tech-logo mt-[10px] h-[70px] w-auto max-[500px]:h-[60px]"
      aria-label={tooltipText ?? "tech logo"}
      width={60}
      height={60}
    />
    <span className="bg-accent text-background invisible absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-3 py-2 text-[14px] opacity-0 transition-opacity duration-[2000ms] group-hover:visible group-hover:opacity-100 before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-[5px] before:border-solid before:border-transparent before:border-t-accent before:content-[''] max-[500px]:text-[13px]">
      {tooltipText}
    </span>
  </div>
);

export default TechIcon;
