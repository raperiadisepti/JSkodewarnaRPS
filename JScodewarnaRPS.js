function processColor() {
    // Mendapatkan nilai dari input
    var colorInput = document.getElementById('colorInput').value;

    // Validasi format hex
    var hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
    if (hexRegex.test(colorInput)) {
        // Mengganti warna pada color box
        document.getElementById('colorBox').style.backgroundColor = colorInput;
        var colorText = document.createElement('div');
        colorText.textContent = 'Warna Hex: ' + colorInput;
        colorBox.appendChild(colorText);
    } else {
        alert('raperiadisepti: kode hex color tidak valid!');
    }
}
