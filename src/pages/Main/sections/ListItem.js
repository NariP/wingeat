import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
  Typography,
  Button,
} from '@mui/material';
import { FEATURE_URL } from 'utils/constants';
import { setLocalCartList, findLocalItemById } from './mainUtils';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ListItem = ({ itemName, price, image, id }) => {
  const [open, setOpen] = React.useState(false);

  const cardActionHandler = () => {
    setOpen(true);
    setLocalCartList({ id: Number(id), itemName, price, image });
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`${FEATURE_URL}${image}`}
            alt={itemName}
            onClick={cardActionHandler}
          />
        </CardActionArea>
        <CardBody>
          <Typography gutterBottom variant="subtitle1" component="div">
            {itemName}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {price}원
          </Typography>
        </CardBody>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {findLocalItemById(Number(id))
              ? `"${itemName}" 의 장바구니 내 수량을 추가했습니다.`
              : `"${itemName}" 을 장바구니에 추가했습니다.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

ListItem.prototype = {
  itemName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
const CardBody = styled(CardContent)({
  minHeight: '6.62em',
  maxHeight: '6.62em',
  wordBreak: 'normal',
  overflow: 'hidden',
});
export default ListItem;
