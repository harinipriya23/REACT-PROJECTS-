export default function PopUp({ id, header, body, footor }) {
  return (
    <div id={id || "MODEL POPUP"} className="flex justify-center">
      <div className="animate px-10 capitalize flex flex-col gap-56 bg-black w-3/4 h-3/4 text-cyan-300">
        <div>
          <header>
            <h1 className="heading">{header ? header : "HEADER"}</h1>
          </header>
        </div>
        <div>
          <main className="heading">{body ? body : <p>THIS BODY IS GIVEN DEFAULT</p>}</main>
        </div>
        <div>
          <footer>
            <h1 className="heading">{footor ? footor : "FOOTER"}</h1>
          </footer>
        </div>
      </div>
    </div>
  );
}
