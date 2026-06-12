
import { Box, Grid, Paper, Typography } from "@mui/material";

export default function Certificates() {
  const items = [
    "CCNA",
    "MTCNA",
    "Network+",
    "MCSA",
    "VMware VCP (ICM)"
  ];

  return (
    <Box sx={{mb:5}}>
      <Typography variant="h4" sx={{fontWeight:"bold", mb:2}}>
        مدارک و گواهینامه‌ها
      </Typography>

      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid size={{ xs: 12, md: 4 }} key={item}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 4,
              }}
            >
              <Typography sx={{fontWeight:"bold"}}>
                {item}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


