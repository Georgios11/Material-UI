import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { Box, Typography, useTheme } from "@mui/material";
const Test = () => {
	const theme = useTheme();
	console.log(theme);
	return (
		<Box>
			<Typography variant="h1" color="primary">
				PAOK
			</Typography>
		</Box>
	);
};

export default Test;
