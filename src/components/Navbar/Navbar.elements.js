import styled from "styled-components";
import { Container } from "../../globalStyles";
import { WiHorizon } from "react-icons/wi";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
	@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
	font-family: "Russo One", sans-serif;
	font-size: 1.2rem;
	font-weight: 600;
	background-color: #101522;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
`;

export const NavIcon = styled(WiHorizon)`
	margin-right: 0.5rem;
	font-size: 3.2rem;
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		margin-top: 4px;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		opacity: 1;
		transition: all 0.5s ease;
		background: #101522;
	}
`;

export const NavItem = styled.li`
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 2px solid #101522;
	}

	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	font-weight: 500;
	height: 100%;
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;
