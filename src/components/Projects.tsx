import { Stack, Typography } from "@mui/material";
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

const _fullStackProjectDetails: IndividualProjectProps[] = [
  {
    name: "KnowledgeHub",
    description:
      "GraphRAG agent for searching against all internal repositories of company knowledge (Slack, Github, Notion, etc.). Performs entity resolution to ensure that different sources are linked together for more accurate, thorough answers.",
    browserUrl: "TODO",
    inProgress: true,
    technologies: [
      "FastAPI",
      "SQLAlchemy",
      "Typescript + React",
      "Postgres",
      "Pinecone",
      "MongoDB",
      "Neo4J",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    name: "DataDocs",
    description:
      "Automatically generate beautiful data dictionaries using Pydantic. Supports versioning and markdown documentation for LLMs.",
    browserUrl: "TODO",
    inProgress: true,
    technologies: [
      "Django Rest Framework",
      "Typescript + React",
      "Pydantic",
      "Postgres",
      "Heroku",
    ],
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
    <Stack spacing={8} sx={{ textAlign: "left" }}>
      <Typography variant="h2">Featured Projects</Typography>
      <Stack spacing={2}>
        {openSourceProjectDetails.map((project) => (
          <IndividualProject key={project.name} {...project} />
        ))}
      </Stack>
    </Stack>
  );
}
