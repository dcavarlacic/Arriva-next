import Link from "next/link";
import ResponsiveAppBar from "./NavigationBar";

export default function Header({ title }) {
  return (
    <div class="header">
      <ResponsiveAppBar></ResponsiveAppBar>
      
     {/* <nav>
        <ul>
          <li><Link href="/usluge">Usluge</Link></li>
          <li><Link href="/onama">O nama</Link></li>
          <li><Link href="/blog">Arriva Blog</Link></li>
          <li><Link href="/repozitorij">Repozitorij</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
        </ul>
        
     </nav>*/}
    </div>
  )
}
