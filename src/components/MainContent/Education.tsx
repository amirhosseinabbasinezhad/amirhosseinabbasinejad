import { Box, Typography, Paper } from '@mui/material';
import edu from '../../assets/edu.svg';

interface EducationItem {
  title: string;
  date: string;
  uni: string;
 
}

interface EducationProps {
  experiences: EducationItem[];  // این خط مهم است
}

export const Education = ({ experiences }: EducationProps) => {
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
        <img src={edu} width={30}/>
        <Typography variant="h5" sx={{fontWeight:700,color:"#0f172a"}}>
          تحصیلات
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
            {exp.uni}
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
           
          </Box>
        </Paper>
      ))}
    </Box>
  );
};