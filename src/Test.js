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
	Tab,
	Tabs,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
const Test = () => {
	//initial value must be undefined
	const [value, setValue] = useState();

	return (
		<div>
			<AppBar>
				<Toolbar>
					<Tabs
						indicatorColor="secondary"
						textColor="inherit"
						value={value}
						onChange={(e, val) => setValue(val)}
					>
						<Tab label="First" />
						<Tab label="Second" />
						<Tab label="Third" />
					</Tabs>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Test;
