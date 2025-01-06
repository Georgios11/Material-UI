import React, { useEffect, useState } from "react";
import {
	AppBar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
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
	const imgUrl = "/istockphoto-811210906-1024x1024.jpg";
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia sx={{ height: 320 }} image={`${imgUrl}`} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Lizard
				</Typography>
				<Typography variant="body2" sx={{ color: "text.secondary" }}>
					Lizards are a widespread group of squamate reptiles, with
					over 6,000 species, ranging across all continents except
					Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default Test;
