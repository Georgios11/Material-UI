import React from "react";
import { Button } from "@mui/material";
const Test = () => {
	return (
		<>
			<Button
				variant="contained"
				size="large"
				sx={{ margin: 3 }}
				color="success"
				onClick={(e) => console.log("Click")}
				disabled
			>
				First
			</Button>
			<Button
				variant="outlined"
				size="medium"
				sx={{ margin: 3 }}
				color="error"
			>
				Second
			</Button>
			<Button variant="text" size="small" sx={{ margin: 3 }} color="info">
				Third
			</Button>
		</>
	);
};

export default Test;
