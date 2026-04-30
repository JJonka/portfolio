import TechIcon from "./TechLogo";
import ReactIcon from "./techLogos/react.svg";
import NextjsIcon from "./techLogos/nextjs.svg";
import TsIcon from "./techLogos/ts.svg";
import TailwindIcon from "./techLogos/tailwind.svg";
import ReduxIcon from "./techLogos/redux.svg";
import StorybookIcon from "./techLogos/storybook.svg";
import ExpressjsIcon from "./techLogos/expressjs.svg";
import PostgresqlIcon from "./techLogos/postgresql.svg";
import MongodbIcon from "./techLogos/mongodb.svg";
import PrismaIcon from "./techLogos/prisma.svg";
import StrapiIcon from "./techLogos/strapi.svg";
import DockerIcon from "./techLogos/docker.svg";
import GitIcon from "./techLogos/git.svg";
import DigitaloceanIcon from "./techLogos/digitalocean.svg";
import GithubCopilotIcon from "./techLogos/githubcopilot.svg";
import ClaudeCodeIcon from "./techLogos/claude.svg";

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

const TechLogosGrid = () => {
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
    <div className="mt-15 mb-15 flex flex-col items-center gap-15">
      {rows.map(({ slice }, i) => (
        <div key={i} className="flex justify-center gap-15">
          {slice.map(({ Icon, label }) => (
            <TechIcon key={label} icon={Icon} tooltipText={label} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TechLogosGrid;
