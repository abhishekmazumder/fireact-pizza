import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { pizzaRed } from '../Styles/colors';

const DialogShadow = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	background-color: black;
	opacity: 0.7;
	z-index: 4;
`;

const Dialog = styled.div`
	width: 500px;
	height: 500px;
	max-height: calc(100%-100px);
	background-color: white;
	position: fixed;
	top: 100px;
	left: calc(50% - 250px);
	z-index: 5;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 0px 2px 50px 3px black;
`;

const DialogBanner = styled.div`
	min-height: 200px;
	background-position: center;
	background-size: cover;
	margin-bottom: 20px;
	${({ img }) => `background-image: url(${img})`}
`;

const DialogBannerLabel = styled(FoodLabel)`
  font-size: 28px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const DialogContent = styled.div`
	overflow: auto;
	min-height: 100px;
`;

export const DialogFooter = styled.div`
	/* border: 2px solid red; */
	height: 60px;
	text-align: center;
`;

export const ConfirmBtn = styled.button`
	margin: 10px;
	/* font-size:15px; */
	background-color: ${pizzaRed};
  font-family: 'Righteous', cursive;
  letter-spacing: 1.3px;
	border: none;
	color: white;
	padding: 10px;
	width: 200px;
	border-radius: 6px;
	cursor: pointer;
	text-transform: uppercase;
`;

const FoodDialog = ({ openFood, setOpenFood }) => {
	return openFood ? (
		<>
			<DialogShadow onClick={() => setOpenFood(null)} />
			<Dialog>
				<DialogBanner img={openFood.img}>
					<DialogBannerLabel>{openFood.name}</DialogBannerLabel>
				</DialogBanner>
				<DialogContent>Content</DialogContent>
				<DialogFooter>
					<ConfirmBtn>Order</ConfirmBtn>
				</DialogFooter>
			</Dialog>
		</>
	) : null;
};

export default FoodDialog;
