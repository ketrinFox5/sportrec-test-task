import { SvgIcon } from '../../../node_modules/@mui/material/index';

const ArrowDownSvg = () => {
    return(
        <SvgIcon sx={{width: 12, height: 8, }}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#9395B8" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
            </svg>
        </SvgIcon>
    )
}

export default ArrowDownSvg;