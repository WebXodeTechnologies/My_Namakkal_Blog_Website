// app/page.js (or pages/index.js depending on your setup)

import Header from "./app/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
    </main>
  );
}
