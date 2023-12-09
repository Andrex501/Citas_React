function Error({children}) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ff7675",
          padding: "1px",
          borderRadius: "10px",
          width: "100%",
          justifyContent: "center",
          display: "grid",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "17px" }}>{children}</p>
      </div>
    </>
  );
}

export default Error;
