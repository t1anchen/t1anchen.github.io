import Link from "next/link";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Button variant="contained">
      Hello World. <Link href="/about">About</Link>
    </Button>
  );
}
