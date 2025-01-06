import React, { useEffect, useState } from "react";
import {
	AppBar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
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
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Button onClick={() => setOpen(true)}>Open Dialog</Button>
			<Dialog open={open} onClose={() => setOpen(false)}>
				<DialogTitle>Dialog Title</DialogTitle>
				<DialogContent>
					<DialogContentText>Ask user for action</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)}> Confirm</Button>
					<Button onClick={() => setOpen(false)}> Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Test;
