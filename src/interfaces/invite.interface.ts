import { Role } from "./roleTypes";

export interface Invite {
  id: number;
  phone: string;
  role: Role;
}
