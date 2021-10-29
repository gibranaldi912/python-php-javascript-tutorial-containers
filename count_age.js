// global variable
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
// end

function proses(tahun, bulan, tanggal) {
  if (tanggal !== "..." && bulan !== "..." && tahun !== "...") {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(tahun, bulan, tanggal);

    const secondDate = new Date(yyyy, mm, dd);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    const newFormat_tahun = Math.floor(Number(diffDays) / 365);
    const newFormat_s = Number(diffDays) % 365;
    const newFormat_bulan = Math.floor(Number(newFormat_s) / 30.4167);
    const newFormat_ss = Math.floor(Number(newFormat_s) % 30.4167);

    console.log(
      `Your age now ${newFormat_tahun} Year ${newFormat_bulan} Month ${newFormat_ss} Day`
    );
  } else {
    console.log("Wrong Parameter");
  }
}

console.log(proses(2000, 10, 10));
//result: Your age now 21 Year 0 Month 24 Day
