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
