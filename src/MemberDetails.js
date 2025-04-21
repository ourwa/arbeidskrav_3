import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./sanityClient";
import './App.css';

const MemberDetails = () => {
  const { slug } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "member" && slug.current == $slug][0]{
          name,
          email,
          image{
            asset->{url}
          },
          bio,
          interests,
          logg[]{
            date,
            task,
            hours
          }
        }`,
        { slug }
      )
      .then((data) => setMember(data))
      .catch(console.error);
  }, [slug]);

  if (!member) return <div>Loading...</div>;

  return (
    <div className="member-details-container">
      <h1>{member.name}</h1>
      {member.image && (
        <img
          src={member.image.asset.url}
          alt={member.name}
          className="profile-img"
        />
      )}
      <p>{member.email}</p>
      <p className="member-bio"><strong>Bio:</strong> {member.bio}</p>

      {member.interests?.length > 0 && (
        <div className="interests-section">
          <h3>Interesser</h3>
          <ul>
            {member.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      )}

      {member.logg?.length > 0 && (
        <div>
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
              {member.logg.map((entry, index) => (
                <tr key={index}>
                  <td>{new Date(entry.date).toLocaleDateString("no-NO")}</td>
                  <td>{entry.task}</td>
                  <td>{entry.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MemberDetails;
