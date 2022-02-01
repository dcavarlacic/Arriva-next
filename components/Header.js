import Link from "next/link";
import ResponsiveAppBar from "./NavigationBar";

export default function Header({ title }) {
  return (
    <div class="header">
      <ResponsiveAppBar></ResponsiveAppBar>
    </div>
    
  )
}
