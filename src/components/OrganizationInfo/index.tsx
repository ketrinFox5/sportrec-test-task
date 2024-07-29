import { Avatar, Box, Typography } from '../../../node_modules/@mui/material/index';
import MapSvg from '../Icons/MapSvg';

const OrganizationInfo = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar src="src/assets/logoUrl.svg" sx={{ width: 80, height: 80, mr: 2, bgcolor: '#F8F8F9'}} />
            <Box>
               <Typography>
                   name
               </Typography>
               <Box sx={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
               <MapSvg/>
                <Typography>
                    location
                </Typography>
               </Box>
               <Box>

               </Box>
            </Box>
        </Box>
    )
}

export default OrganizationInfo;