import FooterSection from "./components/footer/FooterSection"
import HeaderSection from "./components/header/HeaderSection"
import TableSection from "./components/table/TableSection"

function App() {
  return (
    <>
      <HeaderSection />
      <main className="main">
        <TableSection />
      </main>
      <FooterSection />
    </>
  )
}
export default App
