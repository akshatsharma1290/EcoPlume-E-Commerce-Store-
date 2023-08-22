import IndianFlag from "../../assets/IndiaFlag.svg"

const Footer = () => {
  return (
    <>
    <section className="bg-slate-900 text-white flex flex-col gap-4 items-center font-outfit py-10">
    <article className="text-xl flex flex-col items-center gap-2">
    &copy; 2023 , Made By Akshat Sharma
    <p className="flex gap-4">Based In <img className="h-8" src={IndianFlag} alt="Flag Of India" /></p>
    </article>
    </section>
    </>
  )
}

export default Footer
