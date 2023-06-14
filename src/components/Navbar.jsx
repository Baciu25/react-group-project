import { Link } from "wouter";

const links = [
  { to: "/", name: "Home" },
  { to: "/login", name: "Login" },
  { to: "/register", name: "Register" },
  { to: "/settings", name: "Settings" },
  { to: "/search", name: "Search" },
];

export default function Navbar() {
  return (
    <>
      <nav className=" bg-red-200 w-screen p-4 flex justify-between">
        <Link href="/">
          <h1 className=""> Company Logo</h1>
        </Link>
        <div>
          {links.map((link) => (
            <Link href={link.to} key={link.to}>
              <a className="mx-2">{link.name}</a>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
