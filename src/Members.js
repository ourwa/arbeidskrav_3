import React, { useEffect, useState } from "react";
import client from "./sanityClient";
import { Link } from "react-router-dom";
import "./App.css";

function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "member"]{
        _id,
        name,
        email,
        slug,
        "imageUrl": image.asset->url
      }`)
      .then((data) => setMembers(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Gruppemedlemmer</h1>
      <div className="members-container">
        {members.map((member) => (
          <Link
            key={member._id}
            to={`/member/${member.slug?.current}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="member-card">
              {member.imageUrl && (
                <img src={member.imageUrl} alt={member.name} />
              )}
              <div className="member-name">{member.name}</div>
              <div className="member-email">{member.email}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Members;
