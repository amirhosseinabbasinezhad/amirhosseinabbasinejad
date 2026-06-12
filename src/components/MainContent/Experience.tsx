import { Box, Typography, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

interface ExperienceItem {
  title: string;
  date: string;
  company: string;
  description: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];  // این خط مهم است
}

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          marginBottom: 2,
          borderRight: '5px solid #38bdf8',
          paddingRight: 2,
        }}
      >
        <WorkIcon sx={{ color: '#0284c7' }} />
        <Typography variant="h5" sx={{fontWeight:700,color:"#0f172a"}}>
          سوابق کاری
        </Typography>
      </Box>

      {experiences.map((exp, idx) => (
        <Paper
          key={idx}
          elevation={0}
          sx={{
            padding: 2,
            marginBottom: 2,
            backgroundColor: '#f8fafc',
            borderRadius: 2,
            border: '1px solid #e2e8f0',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              marginBottom: 1,
            }}
          >
            <Typography sx={{fontWeight:800, fontSize:"1.1rem" ,color:"#0f172a"}}>
              {exp.title}
            </Typography>
            <Typography sx={{fontSize:"0.75rem", color:"#64748b"}}>
              {exp.date}
            </Typography>
          </Box>
          <Typography sx={{color:"#0284c7", fontWeight:600, marginBottom: 1 }}>
            {exp.company}
          </Typography>
          <Box
            component="ul"
            sx={{
              paddingRight: 2,
              marginTop: 1,
              color: '#334155',
              fontSize: '0.9rem',
            }}
          >
            {exp.description.map((item, i) => (
              <li key={i} style={{ marginBottom: '0.3rem' }}>
                ▸ {item}
              </li>
            ))}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};