import React, { useState } from "react";
import {
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
	Typography,
} from "@mui/material";
const Test = () => {
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		password: "",
		subscribe: false,
		age: "",
		gender: "",
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
				<Typography>{inputs.name}</Typography>
				<Typography>{inputs.email}</Typography>
				<Typography>{inputs.password}</Typography>

				<FormControl fullWidth>
					<InputLabel>Age</InputLabel>
					<Select
						name="age"
						value={inputs.age}
						label="Age"
						onChange={handleChange}
					>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={20}>20</MenuItem>
						<MenuItem value={30}>30</MenuItem>
					</Select>
				</FormControl>
				<RadioGroup
					defaultValue="female"
					name="gender"
					onChange={handleChange}
				>
					<FormControlLabel
						value="female"
						control={<Radio />}
						label="Female"
					/>
					<FormControlLabel
						value="male"
						control={<Radio />}
						label="Male"
					/>
					<FormControlLabel
						value="other"
						control={<Radio />}
						label="Other"
					/>
				</RadioGroup>
				<Button type="submit">Submit</Button>
			</form>
		</>
	);
};

export default Test;
