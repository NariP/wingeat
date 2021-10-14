import React, { useEffect, useState } from 'react';
import { FEATURE_URL } from 'utils/constants';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import {
  Paper,
  FormControlLabel,
  Checkbox,
  IconButton,
  ButtonGroup,
  Button,
} from '@mui/material';
import { fCurrency } from 'utils';
import {
  changeLocalCartItemAmount,
  deleteLocalCartItem,
} from 'pages/Main/sections/mainUtils';
import PropTypes from 'prop-types';

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
      <CustomBtn onClick={deleteItem}>
        <DeleteIcon />
      </CustomBtn>
      <div>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={checkBoxHandler} />}
          label={itemName}
        />
      </div>
      <DetailWrapper>
        <img
          src={`${FEATURE_URL}${image}`}
          alt={itemName}
          width="20%"
          style={{ marginRight: '1rem' }}
        />
        <div>
          <div>{fCurrency(price)}원</div>
          <ButtonGroup
            size="small"
            aria-label="small button group"
            sx={{ marginTop: '0.5rem' }}
          >
            <AmountBtn onClick={decrease}>-</AmountBtn>
            <Amount>
              <span>{currentAmount}</span>
            </Amount>
            <AmountBtn onClick={increase}>+</AmountBtn>
          </ButtonGroup>
        </div>
      </DetailWrapper>
      <Total>합계: {fCurrency(totalPrice)}원</Total>
    </Wrapper>
  );
};
// TODO: Proptype 정의하기
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
  '& + &': {
    marginTop: '1rem',
  },
}));
const CustomBtn = styled(IconButton)(({ theme }) => ({
  width: 'fit-content',
  position: 'absolute',
  top: 0,
  right: 0,
}));
const DetailWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  marginBottom: '1rem',
}));
const AmountBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.light,
  borderColor: theme.palette.primary.light,
}));
const Amount = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.palette.primary.light}`,
  span: {
    fontSize: '0.8em',
  },
}));
const Total = styled('div')({
  fontWeight: 'bold',
  position: 'absolute',
  right: '1rem',
  bottom: '0.5rem',
});
export default CartItem;
