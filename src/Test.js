import React, { useEffect, useState } from "react";
import {
	AppBar,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
const Test = () => {
	return (
		<div>
			<AppBar>
				<Toolbar>
					<Typography>Logo</Typography>
					<Button
						variant={"contained"}
						color="warning"
						sx={{ ml: "auto " }}
					>
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Test;
