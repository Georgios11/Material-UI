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

# Container

[**Container docs ->**](https://mui.com/material-ui/react-container/)

The container centers your content horizontally. It's the most basic layout element. While containers can be nested, most layouts do not require a nested container.

```javascript
const Test = () => {
	return (
		<div>
			<Container
				sx={{
					background: "pink",
					display: "flex",
					justifyContent: "center",
				}}
				maxWidth="xs"
			>
				This is XS
			</Container>
			<br />
			<Container sx={{ background: "pink" }} maxWidth="sm">
				This is S
			</Container>
			<br />
			<Container sx={{ background: "pink" }} maxWidth="md">
				This is M
			</Container>
			<br />
			<Container sx={{ background: "pink" }} maxWidth="lg">
				This is L
			</Container>
			<br />
			<Container sx={{ background: "pink" }} maxWidth="xl">
				This is XL
			</Container>
		</div>
	);
};
```

# Lists

[**Lists docs ->**](https://mui.com/material-ui/react-list/)

Lists present information in a concise, easy-to-follow format through a continuous, vertical index of text or images.

Material UI Lists are implemented using a collection of related components:

-   List: a wrapper for list items. Renders as a <ul> by default.
-   List Item: a common list item. Renders as an <li> by default.
-   List Item Button: an action element to be used inside a list item.
-   List Item Icon: an icon to be used inside of a list item.
-   List Item Avatar: an avatar to be used inside of a list item.
-   List Item Text: a container inside a list item, used to display text content.
-   List Divider: a separator between list items.
-   List Subheader: a label for a nested list.

```javascript
const Test = () => {
	const array = ["First", "Second", "Third"];

	const [open, setOpen] = useState(false);
	return (
		<Box>
			<List>
				<ListItem divider>
					<ListItemButton
						onClick={() => setOpen((prevOpen) => !prevOpen)}
					>
						<ChevronRightIcon />
						<ListItemText primary={"Expand List"} />
					</ListItemButton>
				</ListItem>
			</List>
			<Collapse in={open}>
				<List sx={{ ml: "25px", width: 300, background: "gray" }}>
					{array.map((item, i) => (
						<ListItem divider key={i}>
							<ListItemButton>
								<ListItemText primary={item} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Collapse>
		</Box>
	);
};
```

# Accordion

[**Accordion docs ->**](https://mui.com/material-ui/react-accordion/)

The Material UI Accordion component includes several complementary utility components to handle various use cases:

-   Accordion: the wrapper for grouping related components.
-   Accordion Summary: the wrapper for the - Accordion header, which expands or collapses the content when clicked.
-   Accordion Details: the wrapper for the - Accordion content.
-   Accordion Actions: an optional wrapper that groups a set of buttons.

```javascript
const Test = () => {
	const [open, setOpen] = useState(null); // Initialize as null

	const handleAccordionChange = (panel) => {
		setOpen((prevOpen) => (prevOpen === panel ? null : panel)); // Toggle logic
	};
	return (
		<Box>
			<Accordion
				expanded={open === "Accordion 1"}
				onChange={() => handleAccordionChange("Accordion 1")}
			>
				<AccordionSummary expandIcon={<ChevronRightIcon />}>
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>PAOKARA OLE</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={open === "Accordion 2"}
				onChange={() => handleAccordionChange("Accordion 2")}
			>
				<AccordionSummary expandIcon={<ChevronRightIcon />}>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>PAOKARA OLE</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={open === "Accordion 3"}
				onChange={() => handleAccordionChange("Accordion 3")}
			>
				<AccordionSummary expandIcon={<ChevronRightIcon />}>
					<Typography>Accordion 3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>PAOKARA OLE</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};
```

# Autocomplete

[**Autocomplete docs ->**](https://mui.com/material-ui/react-autocomplete/)

The autocomplete is a normal text input enhanced by a panel of suggested options.

```javascript
const Test = () => {
	const states = [
		"Alabama",
		"Alaska",
		"American Samoa",
		"Arizona",
		"Arkansas",
		"California",
		"Colorado",
		"Connecticut",
		"Delaware",
		"District of Columbia",
		"Federated States of Micronesia",
		"Florida",
		"Georgia",
		"Guam",
		"Hawaii",
		"Idaho",
		"Illinois",
		"Indiana",
		"Iowa",
		"Kansas",
		"Kentucky",
		"Louisiana",
		"Maine",
		"Marshall Islands",
		"Maryland",
		"Massachusetts",
		"Michigan",
		"Minnesota",
		"Mississippi",
		"Missouri",
		"Montana",
		"Nebraska",
		"Nevada",
		"New Hampshire",
		"New Jersey",
		"New Mexico",
		"New York",
		"North Carolina",
		"North Dakota",
		"Northern Mariana Islands",
		"Ohio",
		"Oklahoma",
		"Oregon",
		"Palau",
		"Pennsylvania",
		"Puerto Rico",
		"Rhode Island",
		"South Carolina",
		"South Dakota",
		"Tennessee",
		"Texas",
		"Utah",
		"Vermont",
		"Virgin Island",
		"Virginia",
		"Washington",
		"West Virginia",
		"Wisconsin",
		"Wyoming",
	];
	return (
		<Box>
			<Autocomplete
				sx={{ width: 300 }}
				options={states}
				renderInput={(params) => (
					<TextField {...params} label="List of states" />
				)}
			/>
		</Box>
	);
};

export default Test;
```

# Drawer

[**Drawer docs ->**](https://mui.com/material-ui/react-drawer/)

The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as switching accounts.

```javascript
const Test = () => {
	const optionsArr = ["Profile", "Balance", "Logout"];

	const [isOpen, setIsOpen] = useState(false);
	return (
		<Box>
			<Button onClick={() => setIsOpen((open) => !open)}>
				{isOpen ? "Close" : "Open"}
			</Button>
			<Drawer
				anchor="right"
				open={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<List>
					{optionsArr.map((opt, i) => (
						<ListItemButton
							key={i}
							onClick={() => setIsOpen(false)}
						>
							<ListItemText primary={opt} />
						</ListItemButton>
					))}
				</List>
			</Drawer>
		</Box>
	);
};

export default Test;
```

# Alert

[**Alert docs ->**](https://mui.com/material-ui/react-alert/)

```javascript
const Test = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<Box>
			{isOpen && (
				<Alert
					severity="success"
					onClose={() => {
						setIsOpen(false);
					}}
				>
					Alert
				</Alert>
			)}
		</Box>
	);
};
```

# Snackbar

-   Snackbars **(also known as toasts)** are used for brief notifications of processes that have been or will be performed.

[**Snackbar docs ->**](https://mui.com/material-ui/react-snackbar/)

```javascript
const Test = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<Box>
			{/* <Snackbar
				message="Snackbar"
				open={isOpen}
				onClose={() => setIsOpen(false)}
				// autoHideDuration={2000}
			/> */}
			<Snackbar
				message="Snackbar"
				open={isOpen}
				onClose={() => setIsOpen(false)}
				autoHideDuration={2000}
			>
				<Alert severity="success">Success</Alert>
			</Snackbar>
		</Box>
	);
};
```

# Progress

Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.

-   **Determinate** indicators display how long an operation will take.
-   **Indeterminate** indicators visualize an unspecified wait time.

[**Progress docs ->**](https://mui.com/material-ui/react-progress/)

```javascript
const Test = () => {
	return (
		<Box>
			<CircularProgress />
			<br />
			<CircularProgress variant="determinate" value={10} />
			<br />
			<CircularProgress variant="determinate" value={50} />
			<br />
			<CircularProgress variant="determinate" value={80} />
			<br />
			<LinearProgress color="secondary" />
			<br />
			<LinearProgress
				color="success"
				variant="determinate"
				value={33}
				sx={{ width: "30%" }}
			/>
		</Box>
	);
};
```

# Rating

-   Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.

[**Rating docs ->**](https://mui.com/material-ui/react-rating/)

```javascript
const Test = () => {
	const [rating, setRating] = useState(0);
	return (
		<Box>
			<Rating size="large" />
			<br />
			<Rating size="medium" />
			<br />
			<Rating
				size="small"
				value={rating}
				onChange={(e, value) => setRating(value)}
				precision={0.5}
			/>
			<Typography>Rated {rating}</Typography>
		</Box>
	);
};
```

# Image List

-   The Image List displays a collection of images in an organized grid. Image lists represent a collection of items in a repeated pattern. They help improve the visual comprehension of the content they hold.

[**Image List docs ->**](https://mui.com/material-ui/react-image-list/)

```javascript
const Test = () => {
	const itemData = [
		{
			img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
			title: "Breakfast",
		},
		{
			img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
			title: "Burger",
		},
		{
			img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
			title: "Camera",
		},
		{
			img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
			title: "Coffee",
		},
		{
			img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
			title: "Hats",
		},
		{
			img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
			title: "Honey",
		},
		{
			img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
			title: "Basketball",
		},
		{
			img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
			title: "Fern",
		},
		{
			img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
			title: "Mushrooms",
		},
		{
			img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
			title: "Tomato basil",
		},
		{
			img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
			title: "Sea star",
		},
		{
			img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
			title: "Bike",
		},
	];
	return (
		<Box>
			<ImageList
				sx={{ width: 400, height: 400 }}
				cols={3}
				// variant="masonry"
				// variant="quilted"
				// variant="woven"
				variant="standard"
			>
				{itemData.map((item, i) => (
					<ImageListItem key={i}>
						<img src={item.img} alt="item.title" loading="lazy" />
						<ImageListItemBar
							position="below"
							subtitle={<span>PAOK</span>}
							title={item.title}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};
```

# Validation with React Hook Form

```javascript
npm install react-hook-form
```

```javascript
import { useForm } from "react-hook-form";
const Test = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	console.log(errors);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const onSubmit = (data) => {
		console.log(data);
		setIsSubmitted(true);
	};
	console.log("rendered");
	return (
		<Box>
			<form
				onSubmit={handleSubmit(onSubmit)}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "2em",
					maxWidth: "60%",
					margin: "100px auto",
				}}
			>
				<TextField
					// type={"email"}
					error={Boolean(errors.email)}
					helperText={
						Boolean(errors.email) && (
							<Typography>Invalid email</Typography>
						)
					}
					{...register("email", {
						validate: (val) =>
							/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(
								val,
							),
					})}
				/>
				<TextField
					type={"password"}
					error={Boolean(errors.password)}
					{...register("password", { minLength: 6, required: true })}
					helperText={
						Boolean(errors.email) && (
							<Typography>Too short Password</Typography>
						)
					}
				/>
				<Button
					variant="contained"
					type="submit"
					disabled={Boolean(errors.email) || Boolean(errors.password)}
				>
					Submit
				</Button>
			</form>
		</Box>
	);
};
```
