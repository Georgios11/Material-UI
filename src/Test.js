import React, { useEffect, useState } from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	AppBar,
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
	Tab,
	Tabs,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Test = () => {
	const [open, setOpen] = useState(null); // Initialize as null

	const handleAccordionChange = (panel) => {
		setOpen((prevOpen) => (prevOpen === panel ? null : panel)); // Toggle logic
	};
	return (
		<Box>
			<Accordion
				expanded={open === "Accordion 1"}
				onChange={() => handleAccordionChange("Accordion 1")}
			>
				<AccordionSummary expandIcon={<ChevronRightIcon />}>
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>PAOKARA OLE</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={open === "Accordion 2"}
				onChange={() => handleAccordionChange("Accordion 2")}
			>
				<AccordionSummary expandIcon={<ChevronRightIcon />}>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>PAOKARA OLE</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={open === "Accordion 3"}
				onChange={() => handleAccordionChange("Accordion 3")}
			>
				<AccordionSummary expandIcon={<ChevronRightIcon />}>
					<Typography>Accordion 3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>PAOKARA OLE</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default Test;
