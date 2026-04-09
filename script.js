function cekKebugaran() {
    let nama = document.getElementById("nama").value;
    let berat = document.getElementById("berat").value;
    let tinggi = document.getElementById("tinggi").value;

    if (!nama || !berat || !tinggi) {
        alert("Isi semua data dulu ya!");
        return;
    }

    let t = tinggi / 100;
    let bmi = berat / (t * t);
    let kategori = "";
    let emoji = "";

    if (bmi < 18.5) {
        kategori = "Kurus";
        emoji = "😟";
    } else if (bmi < 25) {
        kategori = "Sehat";
        emoji = "😊";
    } else if (bmi < 30) {
        kategori = "Berat Berlebih";
        emoji = "😐";
    } else {
        kategori = "Obesitas";
        emoji = "😰";
    }

    document.getElementById("hasil").innerHTML =
        `Halo <b>${nama}</b>!<br>
        BMI kamu: <b>${bmi.toFixed(2)}</b><br>
        Status: <b>${kategori}</b> ${emoji}`;
}
