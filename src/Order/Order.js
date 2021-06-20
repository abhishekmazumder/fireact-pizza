import React from 'react';
import styled from 'styled-components';
import {
	DialogContent,
	DialogFooter,
	ConfirmBtn,
} from '../FoodDialog/FoodDialog';

const OrderStyled = styled.div`
	position: fixed;
	top: 57.5px;
	right: 0;
	width: 350px;
  height: auto;
  height: 680px;
	/* border: 1px solid orange; */
	background-color: white;
	z-index: 10;
	box-shadow: 0px 0px 20px 3px grey;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const OrderContent = styled(DialogContent)`
	padding: 20px;
	text-align: center;
`;

function Order() {
	return (
		<OrderStyled>
			<OrderContent>Your have no pending order!</OrderContent>
			<DialogFooter>
				<ConfirmBtn>checkout</ConfirmBtn>
			</DialogFooter>
		</OrderStyled>
	);
}

export default Order;
