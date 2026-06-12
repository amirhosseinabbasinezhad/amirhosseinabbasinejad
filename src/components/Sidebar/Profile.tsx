import { Box, Typography, Avatar } from '@mui/material';
import profile from "../../assets/profile.jpg"
interface ProfileProps {
  name: string;
  title: string;
  avatar?: string;
}

export const Profile = ({ name, title, avatar }: ProfileProps) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* عکس پروفایل */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 2,
        }}
      >
       <Avatar
    src={profile}
    alt={name}
    sx={{
        width: 120,
        height: 120,
         transform: 'scale(1.2)', 
        border: '4px solid #38bdf8',
        boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)',
        backgroundColor: '#ffffff',
        '& .MuiAvatar-img': {       
            objectFit: 'contain',    
            transform: 'scale(1.1)'   
        }
    }}
>
        
          {!avatar && name.charAt(0)}
        </Avatar>
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          marginBottom: 1,
          color: 'white',
          borderRight: '4px solid #38bdf8',
          paddingRight: 1.5,
          textAlign: 'right',
        }}
      >
        {name}
      </Typography>
      
      <Typography
        sx={{
          fontSize: '0.95rem',
          color: '#94a3b8',
          marginBottom: 3,
          fontWeight: 500,
          backgroundColor: 'rgba(56, 189, 248, 0.2)',
          display: 'inline-block',
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 0.5,
          paddingBottom: 0.5,
          borderRadius: '40px',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};