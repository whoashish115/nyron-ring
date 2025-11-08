import { members as copy } from "@/data/content";
import MemberRow from "./MemberRow";

export default function MemberList({ members = [] }) {
  if (members.length === 0) {
    return (
      <p className="border border-dashed border-border py-8 text-center text-sm text-muted">
        {copy.empty}
      </p>
    );
  }

  return (
    <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <li key={member.id} className="flex">
          <MemberRow member={member} />
        </li>
      ))}
    </ol>
  );
}
