import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
const Test = () => {
	const [name, setName] = useState("");
	return (
		<>
			<TextField
				value={name}
				onChange={(e) => setName(e.target.value)}
				type={"text"}
				placeholder="Name"
				variant="outlined"
				sx={{ margin: 3 }}
			/>
			<TextField
				type="email"
				placeholder="Email"
				variant="standard"
				sx={{ margin: 3 }}
			/>
			<TextField
				type="password"
				sx={{ margin: 3 }}
				placeholder="Password"
				variant="filled"
			/>
			<Typography>{name}</Typography>
		</>
	);
};

export default Test;
