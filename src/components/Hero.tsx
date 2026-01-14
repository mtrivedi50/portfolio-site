import { Stack, Typography } from "@mui/material";

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
        Experienced ML software engineer. I'm currently at Meta, where I model
        for emerging surfaces. I specialize in solving complex problems across
        the stack.
      </Typography>
      <Typography variant="body1">
        Outside of work, I enjoy running/lifting, tinkering with open-source dev
        tools, and playing pickleball!
      </Typography>
    </Stack>
  );
}
