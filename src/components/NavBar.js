import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../sanityClient";
import "./NavBar.css";

export default function NavBar() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "member"]{ name, "slug": slug.current }`)
      .then((data) => setMembers(data))
      .catch(console.error);
  }, []);

  return (
    <nav className="navbar">
      <div className="group-title">R team </div>
      <ul className="nav-links">
        <li><Link to="/">Hjem</Link></li>
        {members.map((member) => (
          <li key={member.slug}>
            <Link to={`/member/${member.slug}`}>{member.name.split(" ")[0]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
