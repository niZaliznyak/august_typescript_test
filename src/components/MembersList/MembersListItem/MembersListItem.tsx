import styles from "./MembersListItem.module.css";
import { ArrowRightIcon } from "common/icons";
import { Invite } from "interfaces/invite.interface";
import { TeamMember } from "interfaces/teamMember.interface";

type MembersListItemProps = {
  item: TeamMember | Invite;
};

function isMember(member: TeamMember | Invite): member is TeamMember {
  return "user" in member;
}

export function MembersListItem({ item }: MembersListItemProps): JSX.Element {
  let className = styles.item;
  if (isMember(item)) {
    return (
      <li className={className}>
        {item.user.name} {item.user.lastName}
        <ArrowRightIcon />
      </li>
    );
  }

  className += ` ${styles.invite}`;
  return (
    <li className={className}>
      {item.phone}
      <span>Invited</span>
      <ArrowRightIcon />
    </li>
  );
}
