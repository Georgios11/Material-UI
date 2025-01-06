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

Checkboxes allow the user to select one or more items from a set.

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

Select components are used for collecting user provided information from a list of options.

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

Tabs are implemented using a collection of related components:

-   <Tab /> - the tab element itself. Clicking on a tab displays its corresponding panel.
    -   <Tabs /> - the container that houses the tabs. Responsible for handling focus and keyboard navigation between tabs.

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

# Card

-   Cards are surfaces that display content and actions on a single topic. The Material UI Card component includes several complementary utility components to handle various use cases:
    -   Card: a surface-level container for grouping related components.
    -   Card Content: the wrapper for the Card content.
    -   Card Header: an optional wrapper for the Card header.
    -   Card Media: an optional container for displaying images, videos, etc.
    -   Card Actions: an optional wrapper that groups a set of buttons.
    -   Card Action Area: an optional wrapper that allows users to interact with the specified area of the
    -   Card.
        [**Card docs ->**](https://mui.com/material-ui/react-card/)

```javascript
const imgUrl = "/istockphoto-811210906-1024x1024.jpg";
return (
	<Card sx={{ maxWidth: 345 }}>
		<CardMedia sx={{ height: 320 }} image={`${imgUrl}`} />
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				Lizard
			</Typography>
			<Typography variant="body2" sx={{ color: "text.secondary" }}>
				Lizards are a widespread group of squamate reptiles, with over
				6,000 species, ranging across all continents except Antarctica
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small">Share</Button>
			<Button size="small">Learn More</Button>
		</CardActions>
	</Card>
);
```

# Dialog

[**Dialog docs ->**](https://mui.com/material-ui/react-dialog/)

-   A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken. Dialogs are purposefully interruptive, so they should be used sparingly.

```javascript
const Test = () => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Button onClick={() => setOpen(true)}>Open Dialog</Button>
			<Dialog open={open} onClose={() => setOpen(false)}>
				<DialogTitle>Dialog Title</DialogTitle>
				<DialogContent>
					<DialogContentText>Ask user for action</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)}> Confirm</Button>
					<Button onClick={() => setOpen(false)}> Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
```

# Modal

The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.

-   💄 Manages modal stacking when one-at-a-time just isn't enough.
-   🔐 Creates a backdrop, for disabling interaction below the modal.
-   🔐 It disables scrolling of the page content while open.
-   ♿️ It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
-   ♿️ Adds the appropriate ARIA roles automatically.

If you are creating a modal dialog, you probably want to use the Dialog component rather than directly using Modal. Modal is a lower-level construct that is leveraged by the following components:

-   Dialog
-   Drawer
-   Menu
-   Popover
-   Basic modal

    [**Modal docs ->**](https://mui.com/material-ui/react-modal/)

```javascript
const Test = () => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Button onClick={() => setOpen(true)}>Open Modal</Button>

			<Modal open={open} onClose={() => setOpen(false)}>
				<Box position="absolute" top="50%" left="50%">
					<Typography>This is a Modal</Typography>
					<Button variant="contained" onClick={() => setOpen(false)}>
						Close
					</Button>
				</Box>
			</Modal>
		</div>
	);
};
```

# Link

[**Link docs ->**](https://mui.com/material-ui/react-link/)

```javascript
const Test = () => {
	return (
		<div>
			<Link
				href="https://www.google.com"
				target="_blank"
				underline="none"
				color="secondary"
				variant="h4"
			>
				Visit Google
			</Link>
		</div>
	);
};
```
