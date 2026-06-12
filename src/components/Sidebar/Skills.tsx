import { Box, Typography, LinearProgress } from '@mui/material';

interface Skill {
  name: string;
  percent: number;
}

interface SkillsProps {
  skills: Skill[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: '#f1f5f9',
          borderBottom: '2px solid #334155',
          display: 'inline-block',
          pb: 0.5,
        }}
      >
        مهارت‌های فنی
      </Typography>
      <Box>
        {skills.map((skill, idx) => (
          <Box key={idx} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                {skill.name}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {skill.percent}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={skill.percent}
              sx={{
                height: 8,
                borderRadius: 20,
                bgcolor: '#1e293b',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#38bdf8',
                  borderRadius: 20,
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};