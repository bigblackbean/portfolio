import Navigation from "./components/Navigation";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}
