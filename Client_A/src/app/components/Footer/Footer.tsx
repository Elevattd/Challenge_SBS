import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Box sx={{ bgcolor: "common.black", color: "grey.700" }}>
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Typography variant="body1" color="white">
            Mariano Dunand
          </Typography>
          <br />
          <Typography variant="body1">Fecha deploy 15/08/2022</Typography>
          <br />
          <Grid container spacing={5}>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <a href="https://github.com/Elevattd" target="_blank">
                  <GitHubIcon className="link" />
                </a>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <a
                  href="https://www.linkedin.com/in/mariano-dunand/"
                  target="_blank"
                >
                  <LinkedInIcon className="link" />
                </a>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <a href="https://mariano-dunand.vercel.app/" target="_blank">
                  <PermContactCalendarIcon className="link" />
                </a>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <a href="https://www.instagram.com/marianoo9" target="_blank">
                  <InstagramIcon className="link" />
                </a>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
