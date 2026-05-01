import TechIcon from "./TechLogo";
import ReactIcon from "./svgs/react.svg";
import NextjsIcon from "./svgs/nextjs.svg";
import TsIcon from "./svgs/ts.svg";
import TailwindIcon from "./svgs/tailwind.svg";
import ReduxIcon from "./svgs/redux.svg";
import StorybookIcon from "./svgs/storybook.svg";
import ExpressjsIcon from "./svgs/expressjs.svg";
import PostgresqlIcon from "./svgs/postgresql.svg";
import MongodbIcon from "./svgs/mongodb.svg";
import PrismaIcon from "./svgs/prisma.svg";
import StrapiIcon from "./svgs/strapi.svg";
import DockerIcon from "./svgs/docker.svg";
import GitIcon from "./svgs/git.svg";
import DigitaloceanIcon from "./svgs/digitalocean.svg";
import GithubCopilotIcon from "./svgs/githubcopilot.svg";
import ClaudeCodeIcon from "./svgs/claude.svg";

const TECH_LOGOS = [
  { Icon: ReactIcon, label: "React" },
  { Icon: NextjsIcon, label: "Next.js" },
  { Icon: TsIcon, label: "TypeScript" },
  { Icon: TailwindIcon, label: "Tailwind CSS" },
  { Icon: ReduxIcon, label: "Redux" },
  { Icon: StorybookIcon, label: "Storybook" },
  { Icon: ExpressjsIcon, label: "Express.js" },
  { Icon: PostgresqlIcon, label: "PostgreSQL" },
  { Icon: MongodbIcon, label: "MongoDB" },
  { Icon: PrismaIcon, label: "Prisma" },
  { Icon: StrapiIcon, label: "Strapi" },
  { Icon: DockerIcon, label: "Docker" },
  { Icon: GitIcon, label: "Git" },
  { Icon: DigitaloceanIcon, label: "Digital Ocean" },
  { Icon: GithubCopilotIcon, label: "GitHub Copilot" },
  { Icon: ClaudeCodeIcon, label: "Claude Code" },
];

const ROWS = [7, 5, 4];

const svgsGrid = () => {
  const rows = ROWS.reduce<{ slice: typeof TECH_LOGOS; start: number }[]>(
    (acc, count) => {
      const start = acc.length
        ? acc[acc.length - 1].start + acc[acc.length - 1].slice.length
        : 0;
      return [...acc, { slice: TECH_LOGOS.slice(start, start + count), start }];
    },
    [],
  );

  return (
    <div className="mb-15 mt-15">
      {/* Mobile: natural wrap */}
      <div className="flex flex-wrap justify-center gap-6 lg:hidden">
        {TECH_LOGOS.map(({ Icon, label }) => (
          <TechIcon key={label} icon={Icon} tooltipText={label} />
        ))}
      </div>

      {/* Desktop: pyramid layout */}
      <div className="hidden flex-col items-center gap-15 lg:flex">
        {rows.map(({ slice }, i) => (
          <div key={i} className="flex justify-center gap-15">
            {slice.map(({ Icon, label }) => (
              <TechIcon key={label} icon={Icon} tooltipText={label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default svgsGrid;
