import { owner as copy } from "@/data/content";
import MemberRow from "./MemberRow";

export default function OwnerCard({ member }) {
  if (!member) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg">{copy.title}</h2>
      <p className="mb-3 mt-1 text-sm text-muted">{copy.lead}</p>

      <div className="sm:max-w-md">
        <MemberRow member={member} badge={copy.badge} />
      </div>
    </section>
  );
}
