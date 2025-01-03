import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
const Test = () => {
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);
		setInputs({
			name: "",
			email: "",
			password: "",
		});
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
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
				<Button type="submit">Submit</Button>
			</form>
			<Typography>{inputs.name}</Typography>
			<Typography>{inputs.email}</Typography>
			<Typography>{inputs.password}</Typography>
		</>
	);
};

export default Test;
