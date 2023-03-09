import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../redux/actions/cardActions';
import { payUsingPaytm } from '../service/api';
import { post } from '../utils/paytm';

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))
   
const Image = styled('img')({
    width: '85%',
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
})

const StyledButton = styled(Button)(({theme}) => ({
    width: '46%',
    height: '50px',
    borderRadius: '2px',
    verticalAlign: 'baseline',
    [theme.breakpoints.down('lg')]: {
        width: '44%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '46%'
    }
}))
   
const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1)
    // console.log(quantity);
    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id,quantity))
        navigate('/cart');
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'sinhalata887@gmail.com'});
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information)
    }

    return (
        <LeftContainer>
            {/* <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0',width: '85%'}}> */}
                <Image src={product.detailUrl} alt='product' />
            {/* </Box> */}
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginLeft: 5, background: '#ff9f00' }}><Cart />Add to Cart</StyledButton>&nbsp;&nbsp;
            <StyledButton variant='contained' onClick={() => buyNow()} style={{ background: '#fb541b' }}><Flash />Buy Now</StyledButton>
        </LeftContainer>
    )
}
export default ActionItem;