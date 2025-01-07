import React, { useEffect, useState } from "react";

const Data = () => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await fetch("https://dummyjson.com/todos");
				const data = await response.json();
				setTodos(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchTodos();
	}, []);
	console.log(todos);
	return <div>Data</div>;
};

export default Data;
