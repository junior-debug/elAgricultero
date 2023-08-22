"use client";

export default function Grove() {
  const fetchData = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
  };
  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
}
