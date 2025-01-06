import React, { useEffect, useState } from "react";
import {
	AppBar,
	Box,
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
	Modal,
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
			<Button onClick={() => setOpen(true)}>Open Modal</Button>

			<Modal open={open} onClose={() => setOpen(false)}>
				<Box position="absolute" top="50%" left="50%">
					<Typography>This is a Modal</Typography>
					<Button variant="contained" onClick={() => setOpen(false)}>
						Close
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default Test;
