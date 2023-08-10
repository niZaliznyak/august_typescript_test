import { Role } from "./roleTypes";

export interface TeamMember {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}

type Status = "request" | "pending" | "approved" | "declined" | "invited";

interface UserShortData {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}
