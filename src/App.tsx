import "./styles.css";
import { useState, useEffect } from "react";
import usersAPI from "./api";
import { MembersList, MembersListType } from "./components/MembersList";

export default function App() {
  const [members, setMembers] = useState<MembersListType>();

  const getMembers = async () => {
    const response = await Promise.all([usersAPI.getUsers(), usersAPI.getInvites()]);
    const sortedMembers: MembersListType = {
      admins: [],
      users: []
    };
    response.flat().forEach((member) => {
      if (member.role === "Administrator") {
        sortedMembers.admins.push(member);
      } else {
        sortedMembers.users.push(member);
      }
    });
    return sortedMembers;
  };

  useEffect(() => {
    getMembers().then(setMembers);
  }, []);

  return (
    <div className="App">
      <MembersList members={members} />
    </div>
  );
}
