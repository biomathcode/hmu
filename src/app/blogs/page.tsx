async function Page() {
  const pages = await fetch("");

  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}

export default Page;
