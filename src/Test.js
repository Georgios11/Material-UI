import React, { useState } from "react";
import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	TextField,
	Typography,
} from "@mui/material";
const Test = () => {
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		password: "",
		subscribe: false,
	});
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		console.log(type);
		console.log(name);
		console.log(value);
		setInputs((prev) => ({
			...prev,
			[name]: type === "checkbox" ? !checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);
		setInputs({
			name: "",
			email: "",
			password: "",
			subscribe: false,
		});
	};
	return (
		<>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					maxWidth: "60vw",
				}}
			>
				<TextField
					name="name"
					value={inputs.name}
					onChange={handleChange}
					type={"text"}
					placeholder="Name"
					variant="outlined"
					sx={{ margin: 3 }}
				/>
				<TextField
					value={inputs.email}
					name="email"
					type="email"
					onChange={handleChange}
					placeholder="Email"
					variant="standard"
					sx={{ margin: 3 }}
				/>
				<TextField
					value={inputs.password}
					name="password"
					type="password"
					sx={{ margin: 3 }}
					placeholder="Password"
					variant="filled"
					onChange={handleChange}
				/>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								type="checkbox"
								onChange={handleChange}
								name="subscribe"
								value={inputs.subscribe}
							/>
						}
						label="Subscribe"
					/>
				</FormGroup>
				<Button type="submit">Submit</Button>
			</form>
			<Typography>{inputs.name}</Typography>
			<Typography>{inputs.email}</Typography>
			<Typography>{inputs.password}</Typography>
		</>
	);
};

export default Test;
