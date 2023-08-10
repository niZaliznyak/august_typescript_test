import { Invite } from "interfaces/invite.interface";
import { TeamMember } from "interfaces/teamMember.interface";

const mockUsers: TeamMember[] = [
  {
    id: 1,
    status: "request" as const,
    user: {
      id: 1,
      name: "Paul",
      lastName: "Newman",
      phone: "+353 6234567",
      email: "a@a.com",
    },
    role: "Standard" as const,
  },
  {
    id: 2,
    status: "request" as const,
    user: {
      id: 2,
      name: "Alex",
      lastName: "Cool",
      phone: "+353 1434567",
      email: "a1@a.com",
    },
    role: "Administrator" as const,
  },
];

const mockInvites: Invite[] = [
  {
    id: 3,
    phone: "+353 1234527",
    role: "Standard" as const,
  },
  {
    id: 4,
    phone: "+353 1234567",
    role: "Administrator" as const,
  },
];

class Users {
  async getUsers() {
    let response = new Promise<TeamMember[]>((resolve) => {
      setTimeout(() => resolve(mockUsers), 500);
    });
    return await response;
  }

  async getInvites() {
    let response = new Promise<Invite[]>((resolve) => {
      setTimeout(() => resolve(mockInvites), 500);
    });
    return await response;
  }
}

const usersApi = new Users();
export default usersApi;
