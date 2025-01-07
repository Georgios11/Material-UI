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
	Rating,
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
	const [rating, setRating] = useState(0);
	return (
		<Box>
			<Rating size="large" />
			<br />
			<Rating size="medium" />
			<br />
			<Rating
				size="small"
				value={rating}
				onChange={(e, value) => setRating(value)}
				precision={0.5}
			/>
			<Typography>Rated {rating}</Typography>
		</Box>
	);
};

export default Test;
