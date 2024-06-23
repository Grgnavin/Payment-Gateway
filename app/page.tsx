import { PrismaClient } from "@repo/db";
const client = new PrismaClient();

export default function Home() {
  return (
    <div className="bg-red-500 text-3xl">
      Hi there
    </div>
  );
}
