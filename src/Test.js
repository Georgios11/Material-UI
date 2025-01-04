import React, { useEffect, useState } from "react";
import {
	AppBar,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputLabel,
	Menu,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	Tab,
	Tabs,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
const Test = () => {
	//initial value must be undefined
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};
	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpen(true);
	};
	return (
		<div>
			<Button variant="contained" onClick={handleClick}>
				Open Menu
			</Button>
			<Button variant="contained" onClick={handleClick}>
				Open Menu again
			</Button>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>Balance</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
};

export default Test;
