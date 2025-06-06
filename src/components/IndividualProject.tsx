import { Card, Chip, Stack, Tooltip, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ImageGallery from "@/components/ImageGallery";

export interface IndividualProjectProps {
  name: string;
  description: string;
  technologies: string[];
  inProgress: boolean;
  images?: string[];
  browserUrl?: string;
  githubUrl?: string;
  stars?: number;
  docsUrl?: string;
}
export function IndividualProject(props: IndividualProjectProps) {
  return (
    <Card elevation={0}>
      <Stack spacing={4} sx={{ textAlign: "left" }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
            <Stack>
              <Typography variant="h5" fontWeight={700}>
                {props.name}
              </Typography>
              {props.inProgress && (
                <Typography color="secondary">(in progress)</Typography>
              )}
            </Stack>
            {props.stars && (
              <Chip
                sx={{
                  "& .MuiChip-label": {
                    paddingLeft: "8px",
                    paddingRight: "8px",
                  },
                  height: "1.25rem",
                }}
                label={
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center" }}
                  >
                    <StarBorderRoundedIcon sx={{ fontSize: "1rem" }} />
                    <Typography sx={{ fontSize: "0.8rem" }}>
                      {props.stars}
                    </Typography>
                  </Stack>
                }
                color={"default"}
                variant="outlined"
              />
            )}
          </Stack>
          <Stack spacing={2} direction="row">
            {props.browserUrl && (
              <Tooltip title="Github">
                <IconButton href={props.browserUrl}>
                  <OpenInNewIcon
                    sx={{ fontSize: "1.25rem" }}
                    color="secondary"
                  />
                </IconButton>
              </Tooltip>
            )}
            {props.githubUrl && (
              <Tooltip title="Github">
                <IconButton href={props.githubUrl}>
                  <GitHubIcon sx={{ fontSize: "1.25rem" }} color="secondary" />
                </IconButton>
              </Tooltip>
            )}
            {props.docsUrl && (
              <Tooltip title="Docs">
                <IconButton href={props.docsUrl}>
                  <ArticleIcon sx={{ fontSize: "1.25rem" }} color="secondary" />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        </Stack>
        <Typography variant="body2">{props.description}</Typography>
        <Stack direction="row" spacing={2}>
          {props.technologies.map((technology) => (
            <Chip key={technology} label={technology} />
          ))}
        </Stack>
        {props.images && <ImageGallery imageList={props.images} />}
      </Stack>
    </Card>
  );
}
