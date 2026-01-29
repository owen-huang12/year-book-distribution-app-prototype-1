import { useRef, useState } from "react";

export default function Scan() {
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const handleSubmit = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(`/api/students/search?studentId=${query}`);
      if (!res.ok) throw new Error();

      const data = await res.json();
      alert(`FOUND: ${data.name}`);

      // Ready for next scan
      setQuery("");
      inputRef.current.focus();
    } catch {
      alert("NOT FOUND — check ID");
      inputRef.current.select();
    }
  };

  return (
    <div className="scan-page">
      <h2>Scan</h2>

      <form
        className="search-bar"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
          placeholder="Scan or type student ID..."
          className="scan-input"
        />

        {/* Hidden submit for Enter key support */}
        <button type="submit" style={{ display: "none" }} />
      </form>
    </div>
  );
}