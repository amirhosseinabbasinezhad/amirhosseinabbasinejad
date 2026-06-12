import { Box, Typography, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

interface Project {
  name: string;
  subtitle: string;
  description: string[];
  tech: string;
}

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
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
        <CodeIcon sx={{ color: '#0284c7' }} />
        <Typography variant="h5" sx={{fontWeight:700, color:"#0f172a"}}>
          سوابق عملی و پیاده‌سازی‌ها
        </Typography>
      </Box>

      {projects.map((project, idx) => (
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
              {project.name}
            </Typography>
            <Typography sx={{fontSize:"0.75rem", color:"#64748b"}}>
              {project.subtitle}
            </Typography>
          </Box>
          <Box
            component="ul"
            sx={{
              paddingRight: 2,
              marginTop: 1,
              color: '#334155',
              fontSize: '0.9rem',
            }}
          >
           {project.description.map((item, i) => (
              <li key={i} style={{ marginBottom: '0.3rem' }}>
                
            {item}
          
              </li>
            ))}
          </Box>
          <Box sx={{ fontSize: '0.75rem', color: '#475569', marginTop: 1 }}>
            <i className="fas fa-tag"></i> {project.tech}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};