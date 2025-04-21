import React, { useEffect, useState } from "react";
import sanityClient from "./sanityClient";
import { Link } from "react-router-dom";
import "./App.css";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "member" && createdBy == "ourwa"]{
        _id,
        name,
        email,
        slug,
        "imageUrl": image.asset->url,
        logg
      }`)
      .then((data) => setMembers(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Gruppemedlemmer</h1>
      <div className="members-container">
        {members.map((member) => (
          <Link key={member._id} to={`/member/${member.slug?.current}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="member-card">
              {member.imageUrl && <img src={member.imageUrl} alt={member.name} />}
              <div className="member-name">{member.name}</div>
              <div className="member-email">{member.email}</div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ padding: "2rem" }}>
        <h2>Arbeidslogg</h2>
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", marginTop: "1rem", width: "100%" }}>
          <thead>
            <tr>
              <th>Dato</th>
              <th>Navn</th>
              <th>Oppgave</th>
              <th>Timer</th>
            </tr>
          </thead>
          
<tbody>
  {members.flatMap((member) =>
    (member.logg || []).map((entry, index) => (
      <tr key={`${member._id}-${index}`}>
        <td>{new Date(entry.date).toLocaleDateString("no-NO")}</td>
        <td>{member.name}</td>
        <td>{entry.task}</td>
        <td>{entry.hours}</td>
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>
    </div>
  );
}
