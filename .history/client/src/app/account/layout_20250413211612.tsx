import Sidebar from "../components/Sidebar"


export default function AccountLayout({ children }: { children: React.ReactNode }) {
    return (
      <section className="flex ">
        
        {children}
      </section>
    )
  }
  