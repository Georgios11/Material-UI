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
	const [isOpen, setIsOpen] = useState(true);
	return (
		<Box>
			{/* <Snackbar
				message="Snackbar"
				open={isOpen}
				onClose={() => setIsOpen(false)}
				// autoHideDuration={2000}
			/> */}
			<Snackbar
				message="Snackbar"
				open={isOpen}
				onClose={() => setIsOpen(false)}
				autoHideDuration={2000}
			>
				<Alert severity="success">Success</Alert>
			</Snackbar>
		</Box>
	);
};

export default Test;
