import {Link} from 'react-router-dom';
import Search from './Search';
import CustomButtons from './CustomButtons';
import {AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, styled} from '@mui/material';
import {Menu} from '@mui/icons-material';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
    background: #2874f0; 
    height: 55px;
`
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: inherit;
`

const Subheading = styled(Typography)`
    font-size: 11px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 11,
    height: 12,
    marginLeft: 2
})

const ContainerButtonwrapper = styled(Box)(({theme})=>({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const MenuButton = styled(IconButton)(({theme})=> ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

 
const Header = () =>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open,setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    const list = () => {
        <Box style={{width: 200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    }
       
    return(
        <StyledHeader>
            <Toolbar style={{minHeight:'55px'}}>
                <MenuButton color='inherit' onClick={handleOpen}>
                    <Menu />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Component to='/' style={{textDecoration:'none'}}>
                    <img src={logoURL} alt='logo' style={{width: 75}} />
                    <Box style={{display:'flex'}}>
                        <Subheading>Explore&nbsp; 
                            <Box component='span' style={{color:'#ffe500'}}>Plus</Box>
                        </Subheading>
                        <PlusImage src={subURL} alt='sub-logo' />
                    </Box>
                </Component>
                <Search />
                <ContainerButtonwrapper>
                    <CustomButtons />
                </ContainerButtonwrapper>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header;