import Link from "next/link";
import { gjejUdhetimin } from "@/lib/udhetimet";

export default async function Detajet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const udhetim = gjejUdhetimin(id);

  if (!udhetim) {
    return (
      <main>
        <h1>Udhëtimi nuk u gjet</h1>
        <p>ID: {id}</p>
        <Link href="/">Kthehu te lista</Link>
      </main>
    );
  }

  return (
    <main>
      <Link href="/">← Kthehu te lista</Link>
      <h1>
        {udhetim.nisja} – {udhetim.destinacioni}
      </h1>
      <p>Ora: {udhetim.ora}</p>
      <p>Vendtakimi: {udhetim.vendtakimi}</p>
      <p>Vende të lira: {udhetim.vende}</p>

      {udhetim.vende > 0 ? (
        <Link className="action" href={`/udhetimi/${id}/kerkesa`}>
          Kërko vend
        </Link>
      ) : (
        <button className="action" disabled>
          Nuk ka vende të lira
        </button>
      )}
    </main>
  );
}
