import React, { useEffect, useState } from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
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
	Tab,
	Tabs,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Test = () => {
	const optionsArr = ["Profile", "Balance", "Logout"];

	const [isOpen, setIsOpen] = useState(false);
	return (
		<Box>
			<Button onClick={() => setIsOpen((open) => !open)}>
				{isOpen ? "Close" : "Open"}
			</Button>
			<Drawer
				anchor="right"
				open={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<List>
					{optionsArr.map((opt, i) => (
						<ListItemButton
							key={i}
							onClick={() => setIsOpen(false)}
						>
							<ListItemText primary={opt} />
						</ListItemButton>
					))}
				</List>
			</Drawer>
		</Box>
	);
};

export default Test;
