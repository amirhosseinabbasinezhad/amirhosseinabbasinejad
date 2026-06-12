import { Box, Typography, Card, CardMedia, CardContent, Alert } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import cameraTunnel from "../../assets/camera-tunel.jpg"

interface GalleryItem {
  src: string;
  caption: string;
}

interface GalleryProps {
  gallery: GalleryItem[];
}

export const Gallery = ({ gallery }: GalleryProps) => {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2, borderRight: '5px solid #38bdf8', paddingRight: 2 }}>
        <ImageIcon sx={{ color: '#0284c7' }} />
        <Typography variant="h5" sx={{ fontWeight: 700, color: "#0f172a" }}>
          تصاویر فعالیت‌های حرفه‌ای
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr',
          },
          gap: 2,
        }}
      >
        {gallery.map((item, idx) => (
          <Card key={idx} sx={{ borderRadius: 2, overflow: 'hidden', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
            <CardMedia
              component="img"
              image={cameraTunnel}
              alt={item.caption}
              sx={{ height: 130, objectFit: 'cover', backgroundColor: '#cbd5e1' }}
              onError={(e: any) => {
                e.target.src = 'https://placehold.co/400x200?text=Network+Equipment';
              }}
            />
            <CardContent sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}>
              <Typography sx={{fontSize:"0.75rem" ,fontWeight:500, textAlign:"center"}}>
                {item.caption}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Alert
        severity="info"
        sx={{ marginTop: 2, backgroundColor: '#fef9e3', borderRight: '4px solid #f59e0b', '& .MuiAlert-icon': { color: '#f59e0b' } }}
        icon={<i className="fas fa-info-circle"></i>}
      >
        تصاویر فوق شامل تجهیزات سیسکو، پیکربندی دوربین مداربسته سامسونگ و مانیتورهای حرفه‌ای می‌باشد که نشان‌دهنده مهارت‌های عملی در شبکه، ویدئو سرو و سخت‌افزار است.
      </Alert>
    </Box>
  );
};