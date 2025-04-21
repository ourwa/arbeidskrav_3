import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "./sanityClient";

export default function MemberDetails() {
  const { slug } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "member" && slug.current == $slug][0]{
          name,
          email,
          image {
            asset-> {
              url
            }
          },
          bio,
          interests,
          logg[]{
            dato,
            tekst,
            timer
          }
        }`,
        { slug }
      )
      .then(setMember)
      .catch(console.error);
  }, [slug]);

  if (!member) return <div>Loading...</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{member.name}</h1>
      <img
        src={member.image?.asset.url}
        alt={member.name}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>{member.email}</p>
      <p><strong>Bio:</strong> {member.bio}</p>
      <h3>Interesser</h3>
      <ul>
        {member.interests?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Arbeidslogg</h3>
      <table>
        <thead>
          <tr>
            <th>Dato</th>
            <th>Oppgave</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody>
          {member.logg?.map((entry, i) => (
            <tr key={i}>
              <td>{entry.dato}</td>
              <td>{entry.tekst}</td>
              <td>{entry.timer} timer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
