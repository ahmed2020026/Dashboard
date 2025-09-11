import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export const ProductSkeleton = ({ color, toColor }) => {
    return (
        <Box
            sx={{
                bgcolor: { color } || '#fff',
                borderRadius: 0,
                p: 0,
                boxShadow: 0,
                width: '100%',
            }}
        ><Skeleton
                variant="rectangular"
                width='100%'
                height={40}
                sx={{ bgcolor: {toColor} || 'grey.200' , borderRadius:0 }}
            />
        </Box >
    );
};
