function realizarPago() {
    const monto = document.getElementById('amount').value;
    const mensaje = document.getElementById('subject').value;
    const loadingModal = document.getElementById("loadingModal");

    if (!validarFormulario(monto, mensaje)) return;
    else loadingModal.style.display="block";

    const data = {
        amount: Number(monto),
        currency: "CLP",
        subject: mensaje,
        picture_url:"https://i.pinimg.com/736x/f5/30/bc/f530bc00471830befb8c7548aeff562d.jpg"

    };

    fetch('https://payment-api.khipu.com/v3/payments', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'x-api-key': '2c7e151f-ba32-43de-85ed-90a585830b26' 
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) throw new Error('Error en la solicitud');
        return response.json();
    })
    .then(result => {
        console.log('API payments:', result);
        loadingModal.style.display="none";
        abrirVentanaKhipu(result.payment_url);
        document.querySelectorAll('input').forEach(input => input.value = '');
    });
    

}

function abrirVentanaKhipu(payment_url){
    const left = (window.screen.width - 800) / 2;
    const top = (window.screen.height - 550) / 2;
    window.open(
    payment_url,
    'KhipuPago',
    `width=800,height=550,top=${top},left=${left},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
    );
}


function validarFormulario(monto, mensaje){
    const amountError = document.getElementById("amountError");
    const subjectError = document.getElementById("subjectError");
    amountError.textContent = "";
    subjectError.textContent = "";

    let isValid = true;
    
    if (!monto) {
      amountError.textContent = "El monto es obligatorio";
       isValid = false;
    }
    if (parseInt(monto) < 1) {
      amountError.textContent = "El monto debe ser mayor a 0";
       isValid = false;
    }

    if (parseInt(monto) >= 5000) {
      amountError.textContent = "El monto debe ser menor a 5000";
       isValid = false;
    }

    if (!mensaje || mensaje.trim().length < 1) {
    subjectError.textContent = "El mensaje es obligatorio";
    isValid = false;
    }

    return isValid;
}