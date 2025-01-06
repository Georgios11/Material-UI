# Installation

-   npm i @mui/material
-   npm i @emotion/react
-   npm i @emotion/styled

# Properties

[**Properties reference table ->**](https://mui.com/system/properties/#properties-reference-table)

# Typography

[**Typography API ->**](https://mui.com/material-ui/api/typography/)

```javascript
import React from "react";
import { Typography } from "@mui/material";
const Test = () => {
	return (
		<Typography variant="h5" sx={{ color: "red", border: "2px solid red" }}>
			Hello
		</Typography>
	);
};

export default Test;
```

# Buttons

[**Button Properties ->**](https://mui.com/material-ui/react-button/)

-   Predefined styles available

```javascript
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
```

# TextFields - Text Input

[**Textfield API ->**](https://mui.com/material-ui/api/text-field/)

-   Used in forms to add input

```javascript
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
```

# Form handling with Textfields

```javascript
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
```

# Handling Form with Checkboxes

[**Checkbox Docs ->**](https://mui.com/material-ui/react-checkbox/)

-   defaultCheck

```javascript

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
```

# Select Dropdown

```javascript
<FormControl fullWidth>
	<InputLabel>Age</InputLabel>
	<Select name="age" value={inputs.age} label="Age" onChange={handleChange}>
		<MenuItem value={10}>10</MenuItem>
		<MenuItem value={20}>20</MenuItem>
		<MenuItem value={30}>30</MenuItem>
	</Select>
</FormControl>
```

# Radio Buttons

```javascript
<RadioGroup defaultValue="female" name="gender" onChange={handleChange}>
	<FormControlLabel value="female" control={<Radio />} label="Female" />
	<FormControlLabel value="male" control={<Radio />} label="Male" />
	<FormControlLabel value="other" control={<Radio />} label="Other" />
</RadioGroup>
```

# AppBar And Toolbar

[**AppBar API docs ->**](https://mui.com/material-ui/api/app-bar/)

-   A toolbar provides a basic structure for adding elements

```javascript
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
```

# Tabs

-   Helps to switch between different views and navigations.

[**Tabs docs ->**](https://mui.com/material-ui/react-tabs/)

```javascript
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
```

# Menu and MenuItem Components for Menu List

[**Menu docs ->**](https://mui.com/material-ui/react-menu/)

-   It used to display the list of choices which we can select. They are just a list of choices, like a dashboard menu in which we can select an option of where we want to go. And it works dynamically on a click of an element like a button. Or we can have a state of when to open and it has a menu item component to add the content inside that, and each menu item can have its own callback function.

```javascript
const Test = () => {
	//initial value must be undefined
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};
	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpen(true);
	};
	return (
		<div>
			<Button variant="contained" onClick={handleClick}>
				Open Menu
			</Button>
			<Button variant="contained" onClick={handleClick}>
				Open Menu again
			</Button>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>Balance</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
};
```
