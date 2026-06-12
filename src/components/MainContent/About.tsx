import { Box, Typography, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface AboutProps {
  text: string;
}

export const About = ({ text }: AboutProps) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, borderRight: '5px solid #38bdf8', pr: 2 }}>
        <AccountCircleIcon sx={{ color: '#0284c7' }} />
        <Typography variant="h5" sx={{fontWeight:700, color:"#0f172a"}}>
          درباره من
        </Typography>
      </Box>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: '#f8fafc',
          borderRadius: 2,
          border: '1px solid #e2e8f0',
          lineHeight: 1.7,
        }}
      >
        <Typography>{text}</Typography>
      </Paper>
    </Box>
  );
};