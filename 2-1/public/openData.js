const openData = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/product/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.text();
    window.open().document.write(`${data}`);
  } catch (error) {
    console.log(error, " errxx");
  }
};
