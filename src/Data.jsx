import { Box, Card, CardHeader } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const Data = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const columns = [
		{
			field: "id",
			headerName: "ID",
			width: 60,
			renderCell: (params) => {},
		},
		{
			field: "userId",
			headerName: "User ID",
			width: 60,
		},
		{
			field: "todo",
			headerName: "Todo",
			width: 60,
		},
		{
			field: "completed",
			headerName: "Completed",
			width: 200,
		},
	];
	useEffect(() => {
		const fetchTodos = async () => {
			try {
				setIsLoading(true);
				const response = await fetch("https://dummyjson.com/todos");
				const data = await response.json();
				setTodos(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchTodos();
	}, []);
	console.log(todos);
	return (
		<Card>
			<CardHeader title="Todo List ⭐"></CardHeader>
			<Box sx={{ width: "60%", margin: "0 auto", height: "100vh" }}>
				<DataGrid
					autoHeight
					columns={columns}
					rows={todos}
					loading={isLoading}
					// pageSize={5}
					// rowsPerPageOptions={[5]}
				/>
			</Box>
		</Card>
	);
};

export default Data;
