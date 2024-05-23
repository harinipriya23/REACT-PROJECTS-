import { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState("");
  const [scrollHeight, setScrollHeight] = useState("0");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData(url) {
    setLoading(true);

    try {
      let res = await fetch(url);
      let data = await res.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  }

  function handleScrolling() {
    // according to me... scrolltop(high- increases while scroll) = clientheight(fixed) + scrollheight(fixed)
    // console.log(document.body.scrollTop,document.documentElement.scrollTop)
    // console.log(document.documentElement.clientHeight,document.documentElement.scrollHeight)

    const scrolledHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollHeight((scrolledHeight / height) * 100);
  }
  console.log(scrollHeight);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);

    return window.removeEventListener("scroll", () => {});
  }, []);

  {
    loading && (
      <div className="text-2xl text-bold text-center capitalize">
        please wait...
      </div>
    );
  }
  {
    error && (
      <div className="text-2xl text-bold text-center capitalize">
        An error occured !! {error}
      </div>
    );
  }

  console.log(data);
  return (
    <div>
      <div className="scroll">
        <h1 className=" capitalize m-3 p-2 text-center text-2xl font-extrabold">
          custom scroll indicator
        </h1>
        <div className="default">
          <div className="current"
          style={{
            width:`${scrollHeight}%`,
          }}>
            <h1>..</h1>
          </div>
        </div>
      </div>
      <div className="relative top-10">
      {data && data.length > 0
        ? data.map((items, index) => (
            <p className=" text-center m-2 p-2 texi-xl" key={index}>
              {items.title}
            </p>
          ))
        : null}
        </div>
    </div>
  );
}
