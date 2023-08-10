import styles from "./MembersList.module.css";
import { MembersListItem } from "./MembersListItem";
import { TeamMember } from "interfaces/teamMember.interface";
import { Invite } from "interfaces/invite.interface";
import { AdminIcon, UserIcon } from "common/icons";

export type MembersListType = Record<
  "admins" | "users",
  Array<TeamMember | Invite>
>;

type MembersListProps = {
  members: MembersListType | undefined;
};

export function MembersList({ members }: MembersListProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <p>
        <AdminIcon />
        Administrators
      </p>
      <ul className={styles.members_list}>
        {members?.admins?.map((admin) => (
          <MembersListItem key={admin.id} item={admin} />
        ))}
        {members?.admins?.length === 0 && <li>No admins or invites</li>}
      </ul>
      <p>
        <UserIcon />
        Standard Users
      </p>
      <ul className={styles.members_list}>
        {members?.users?.map((user) => (
          <MembersListItem key={user.id} item={user} />
        ))}
        {members?.users?.length === 0 && <li>No users or invites</li>}
      </ul>
    </div>
  );
}
