import React, { useEffect, useState } from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Alert,
	AppBar,
	Autocomplete,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Checkbox,
	CircularProgress,
	Collapse,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Drawer,
	FormControl,
	FormControlLabel,
	FormGroup,
	Icon,
	InputLabel,
	LinearProgress,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Modal,
	Radio,
	RadioGroup,
	Select,
	Snackbar,
	Tab,
	Tabs,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Test = () => {
	return (
		<Box>
			<CircularProgress />
			<br />
			<CircularProgress variant="determinate" value={10} />
			<br />
			<CircularProgress variant="determinate" value={50} />
			<br />
			<CircularProgress variant="determinate" value={80} />
			<br />
			<LinearProgress color="secondary" />
			<br />
			<LinearProgress
				color="success"
				variant="determinate"
				value={33}
				sx={{ width: "30%" }}
			/>
		</Box>
	);
};

export default Test;
