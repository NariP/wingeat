import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import {
  Paper,
  FormControlLabel,
  Checkbox,
  IconButton,
  Button,
} from '@mui/material';
import { fCurrency } from 'utils';
import { FEATURE_URL } from 'utils/constants';
import {
  changeLocalCartItemAmount,
  deleteLocalCartItem,
} from 'pages/Main/sections/mainUtils';

const CartItem = ({ id, price, amount, itemName, image, setPaymentMap }) => {
  const [checked, setChecked] = useState(true);
  const [currentAmount, setCurrentAmount] = useState(amount);
  const [totalPrice, setTotalPrice] = useState(price * amount);
  const checkBoxHandler = () => {
    setChecked(!checked);
  };
  const deleteItem = () => {
    deleteLocalCartItem(id);
  };
  const increase = () => {
    const newAmount = currentAmount + 1;
    setCurrentAmount(newAmount);
    setTotalPrice(price * newAmount);
    changeLocalCartItemAmount(id, newAmount);
  };
  const decrease = () => {
    const newAmount = currentAmount > 1 ? currentAmount - 1 : currentAmount;
    setCurrentAmount(newAmount);
    setTotalPrice(price * newAmount);
    changeLocalCartItemAmount(id, newAmount);
  };
  useEffect(() => {
    setPaymentMap(prev => ({ ...prev, [id]: { checked, totalPrice } }));
  }, [checked, totalPrice, id]);
  return (
    <Wrapper elevation={3}>
      <IconButton onClick={deleteItem}>
        <DeleteIcon />
      </IconButton>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={checkBoxHandler} />}
        label={itemName}
      />
      <DetailWrapper>
        <img
          src={`${FEATURE_URL}${image}`}
          alt={itemName}
          style={{ marginRight: '1rem', width: '20%' }}
        />
        <div>
          <div>{fCurrency(price)}원</div>
          <AmountBtnGroup>
            <Button onClick={decrease}>-</Button>
            <Amount>
              <span>{currentAmount}</span>
            </Amount>
            <Button onClick={increase}>+</Button>
          </AmountBtnGroup>
        </div>
      </DetailWrapper>
      <Total>합계: {fCurrency(totalPrice)}원</Total>
    </Wrapper>
  );
};
CartItem.prototype = {
  id: PropTypes.number,
  price: PropTypes.number,
  amount: PropTypes.number,
  itemName: PropTypes.string,
  image: PropTypes.string,
  setPaymentMap: PropTypes.func,
};
const Wrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: '0.5rem 1rem',
  '& > button': {
    color: theme.palette.text.secondary,
    width: 'fit-content',
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));
const DetailWrapper = styled('div')({
  display: 'flex',
  marginBottom: '1rem',
});
const AmountBtnGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: '0.8rem',
  button: {
    color: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.light}`,
    padding: '0.3em 1em',
    minWidth: '1em',
    '&:first-of-type': {
      borderRadius: '4px 0 0 4px',
    },
    '&:last-of-type': {
      borderRadius: '0 4px 4px 0',
    },
  },
}));
const Amount = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `solid ${theme.palette.primary.light}`,
  borderWidth: '1px 0',
  minWidth: '3em',
  span: {
    fontSize: '0.8em',
    padding: '0.3em 1em',
  },
}));
const Total = styled('div')({
  fontWeight: 'bold',
  position: 'absolute',
  right: '1rem',
  bottom: '0.5rem',
});
export default CartItem;
