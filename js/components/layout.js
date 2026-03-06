async function includeLayout() {
  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if (headerTarget) {
    try {
      const response = await fetch("./components/header.html");
      if (!response.ok) throw new Error(`header load failed: ${response.status}`);
      headerTarget.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
    }
  }

  if (footerTarget) {
    try {
      const response = await fetch("./components/footer.html");
      if (!response.ok) throw new Error(`footer load failed: ${response.status}`);
      footerTarget.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
    }
  }
}

includeLayout();
