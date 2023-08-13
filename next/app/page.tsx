export default function Home() {
  return (
    <main>
      <label htmlFor="from">from</label>
      <input id="from" type="time" name="from" value="21:00"></input>
      <label htmlFor="fromdate">from</label>
      <input
        id="fromdate"
        type="date"
        name="fromdate"
        value="2023/7/20"
      ></input>
    </main>
  );
}
