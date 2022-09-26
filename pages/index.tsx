import Link from "next/link";
import Box from "@mui/material/Box";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"

export default function Home() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Button variant="contained">
        Hello World. <Link href="/about">About</Link>
      </Button>
    </Box>
  );
}
