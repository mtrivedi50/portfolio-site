import { Divider, Stack, Typography } from "@mui/material";
import {
  IndividualProject,
  type IndividualProjectProps,
} from "@/components/IndividualProject";
import prismInit from "@/assets/prism_init.png";
import prismRun from "@/assets/prism_run.png";
import prismDocs from "@/assets/prism_docs.png";
import altoConfig from "@/assets/alto_config.png";
import altoBuild from "@/assets/alto_build.png";
import beehiveCode from "@/assets/beehive_code.png";
import beehiveFigure from "@/assets/beehive_figure.png";
import integrationsFigure from "@/assets/integrations.png";
import chatFigure from "@/assets/chat.png";
// import fullDemo from "@/assets/demo.gif";

const fullStackProjectDetails: IndividualProjectProps[] = [
  {
    name: "cmd+A",
    description:
      "GraphRAG agent for searching against all internal repositories of company knowledge (Slack, Github, Notion, etc.). Performs entity resolution to ensure that different sources are linked together for more accurate, thorough answers.",
    githubUrl: "https://github.com/mtrivedi50/cmd-a",
    browserUrl: "https://cmda.mihir-trivedi.com",
    inProgress: false,
    technologies: [
      "Kubernetes",
      "Docker",
      "FastAPI",
      "SQLModel",
      "Pydantic",
      "MongoDb",
      "Redis",
      "Pinecone",
      "Neo4J",
      "Typescript + React",
    ],
    images: [integrationsFigure, chatFigure],
  },
];

const openSourceProjectDetails: IndividualProjectProps[] = [
  {
    name: "Prism",
    description:
      "Open-source data orchestration in Python. Features runtime dependency declaration via function calls, a flexible CLI, integrations to external databases and data processing frameworks (e.g., Postgres, Snowflake, Trino, PySpark), and an interactive graph visualization.",
    githubUrl: "https://github.com/runprism/prism",
    stars: 86,
    inProgress: false,
    docsUrl: "https://docs.runprism.com",
    technologies: ["Python3", "SQLAlchemy", "Javascript"],
    images: [prismInit, prismRun, prismDocs],
  },
  {
    name: "Alto",
    description:
      "Cloud deployment in Python. Users can run Python functions, programs, modules, or Jupyter notebooks on virtual machines. Integrates with containerization tools like Docker.",
    githubUrl: "https://github.com/runprism/alto",
    stars: 39,
    inProgress: false,
    docsUrl: "https://alto.mintlify.app/welcome/v0.0.8/welcome",
    technologies: ["Python3", "Docker", "EC2"],
    images: [altoConfig, altoBuild],
  },
  {
    name: "Beehive",
    description:
      "LLM agent orchestration framework. Supports sequential chats, hierarchical chats, multi-agent collaboration / debates, loops and conditionals between agents, and feedback!",
    githubUrl: "https://github.com/beehivehq/beehive-ai",
    stars: 64,
    inProgress: false,
    docsUrl: "https://beehivehq.github.io/beehive-ai/",
    technologies: ["Python3", "Pydantic", "OpenAI", "ReAct"],
    images: [beehiveCode, beehiveFigure],
  },
];
export function Projects() {
  return (
    <Stack spacing={8}>
      <Stack spacing={4} sx={{ textAlign: "left" }}>
        <Typography variant="h2">Full-Stack Projects</Typography>
        <Stack spacing={2}>
          {fullStackProjectDetails.map((project) => (
            <IndividualProject key={project.name} {...project} />
          ))}
        </Stack>
      </Stack>
      <Divider />
      <Stack spacing={4} sx={{ textAlign: "left" }}>
        <Typography variant="h2">Featured Projects</Typography>
        <Stack spacing={2}>
          {openSourceProjectDetails.map((project) => (
            <IndividualProject key={project.name} {...project} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
