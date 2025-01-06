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
	const array = ["First", "Second", "Third"];

	const [open, setOpen] = useState(false);
	return (
		<Box>
			<List>
				<ListItem divider>
					<ListItemButton
						onClick={() => setOpen((prevOpen) => !prevOpen)}
					>
						<ChevronRightIcon />
						<ListItemText primary={"Expand List"} />
					</ListItemButton>
				</ListItem>
			</List>
			<Collapse in={open}>
				<List sx={{ ml: "25px", width: 300, background: "gray" }}>
					{array.map((item, i) => (
						<ListItem divider key={i}>
							<ListItemButton>
								<ListItemText primary={item} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Collapse>
		</Box>
	);
};

export default Test;
