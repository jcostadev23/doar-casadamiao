import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-3xl">Não foi encontrada</h2>
      <p className="text-lg">Esta rota não existe </p>
      <Link className="underline" href="/">
        Volta a Pagina inicial
      </Link>
    </div>
  );
}
