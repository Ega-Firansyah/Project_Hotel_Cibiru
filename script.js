function validateForm() {
    const name = document.getElementById("name").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const idNumber = document.getElementById("idNumber").value.trim();
    const roomType = document.getElementById("roomType").value;
    const duration = document.getElementById("duration").value;
    const breakfast = document.getElementById("breakfast").checked;

    // Validate Name
    if (!name) {
        alert("Nama Pemesan harus diisi.");
        return false;
    }

    // Validate Gender
    if (!gender) {
        alert("Pilih jenis kelamin.");
        return false;
    }

    // Validate ID Number
    if (idNumber.length !== 16 || isNaN(idNumber)) {
        alert("Nomor Identitas harus berupa angka 16 digit.");
        return false;
    }

    // Validate Room Type
    if (!roomType) {
        alert("Pilih tipe kamar.");
        return false;
    }

    // Validate Duration
    if (isNaN(duration) || duration <= 0) {
        alert("Durasi Menginap harus berupa angka lebih dari 0.");
        return false;
    }

    // Calculate Total Payment
    const pricePerNight = roomType === "Standard" ? 300000 : roomType === "Deluxe" ? 500000 : 800000;
    let total = pricePerNight * duration;

    if (duration > 3) {
        total *= 0.9; // Apply 10% discount
    }

    if (breakfast) {
        total += 80000; // Add breakfast cost
    }

    document.getElementById("totalPayment").innerText = `Rp ${total.toLocaleString("id-ID")}`;

    // Display summary
    const summary = `
        Nama Pemesan: ${name}\n
        Jenis Kelamin: ${gender.value}\n
        Nomor Identitas: ${idNumber}\n
        Tipe Kamar: ${roomType}\n
        Durasi Menginap: ${duration} malam\n
        Termasuk Breakfast: ${breakfast ? "Ya" : "Tidak"}\n
        Total Bayar: Rp ${total.toLocaleString("id-ID")}
    `;
    alert("Resume Pemesanan:\n" + summary);
    return false; // Prevent actual form submission
}