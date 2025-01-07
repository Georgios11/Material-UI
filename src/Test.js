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
	ImageList,
	ImageListItem,
	ImageListItemBar,
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

import { useForm } from "react-hook-form";
const Test = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	console.log(errors);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const onSubmit = (data) => {
		console.log(data);
		setIsSubmitted(true);
	};
	console.log("rendered");
	return (
		<Box>
			<form
				onSubmit={handleSubmit(onSubmit)}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "2em",
					maxWidth: "60%",
					margin: "100px auto",
				}}
			>
				<TextField
					// type={"email"}
					error={Boolean(errors.email)}
					helperText={
						Boolean(errors.email) && (
							<Typography>Invalid email</Typography>
						)
					}
					{...register("email", {
						validate: (val) =>
							/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(
								val,
							),
					})}
				/>
				<TextField
					type={"password"}
					error={Boolean(errors.password)}
					{...register("password", { minLength: 6, required: true })}
					helperText={
						Boolean(errors.email) && (
							<Typography>Too short Password</Typography>
						)
					}
				/>
				<Button
					variant="contained"
					type="submit"
					disabled={Boolean(errors.email) || Boolean(errors.password)}
				>
					Submit
				</Button>
			</form>
		</Box>
	);
};

export default Test;
