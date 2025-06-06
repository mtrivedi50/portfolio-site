import { Link, Stack, Typography } from "@mui/material";

export function Hero() {
  return (
    <Stack spacing={4} sx={{ textAlign: "left" }}>
      <Typography
        component="h1"
        sx={{ fontSize: "3.75rem", fontWeight: "300" }}
      >
        Mihir Trivedi
      </Typography>
      <Typography variant="body1">
        Experienced data scientist & software engineer, currently at{" "}
        <Link href="https://turquoise.health">Turquoise Health</Link>. I
        specialize in solving complex problems across the stack.
      </Typography>
      <Typography variant="body1">
        Outside of work, I am passionate about developer tools and open-source.
      </Typography>
    </Stack>
  );
}
