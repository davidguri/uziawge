import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const nav = useNavigate();

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        width: "100svw",
        height: "100svh",
      }}
    >
      <h1 style={{ fontWeight: "900", fontSize: "10vw", lineHeight: 1 }}>
        COMING SOON
      </h1>
      <div
        style={{
          cursor: "pointer",
          paddingInline: "6vw",
          paddingBlock: "2vw",
          backgroundColor: "rgb(233, 121, 243)",
        }}
        onClick={() => nav(-1)}
      >
        <text
          style={{
            fontWeight: "900",
            fontSize: "2.5vw",
            color: "rgb(13, 1, 14)",
          }}
        >
          Go Back
        </text>
      </div>
    </main>
  );
}
