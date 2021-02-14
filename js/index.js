window.addEventListener("load", () => {
    const viewer = HLViewer.init("#hlv-target", "../res");
    viewer.load("kz_ea_highblock.dem");
    // viewer.setTitle("c3a2e.bsp");
});