import LoginDialog from '../login/LoginDialog';
import { Box, Button, Typography, Badge, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 14px;
    }
`

const Conatainer = styled(Link)`
    display: flex;
    textDecoration: none;
    color: inherit;
`

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
`

const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
    const openDialog = () => {
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}></Profile> :
                    <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>
            }

            <Typography style={{ margin: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ margin: 3 }}>More</Typography>
            <Conatainer to='/cart'>
                {/* <Badge badgeContent={cartItems?.length} color='secondry'> */}
                    <ShoppingCart />
                {/* </Badge> */}
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Conatainer>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}
export default CustomButtons;