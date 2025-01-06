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
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputLabel,
	Link,
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
	return (
		<div>
			<Container
				sx={{
					background: "pink",
					display: "flex",
					justifyContent: "center",
				}}
				maxWidth="xs"
			>
				This is XS
			</Container>
			<br />
			<Container sx={{ background: "pink" }} maxWidth="sm">
				This is S
			</Container>
			<br />
			<Container sx={{ background: "pink" }} maxWidth="md">
				This is M
			</Container>
			<br />
			<Container sx={{ background: "pink" }} maxWidth="lg">
				This is L
			</Container>
			<br />
			<Container sx={{ background: "pink" }} maxWidth="xl">
				This is XL
			</Container>
		</div>
	);
};

export default Test;
