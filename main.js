let a = document.getElementById('alert');
let t = document.getElementById('inputTxt');

a.innerHTML = `<div class="alert bg-dark" role="alert">
<strong class="text-white">Total de tratamiento:<br>
Total de cita:  </strong>
</div>`

t.addEventListener('keyup', (e) => {
    let n = Number(e.target.value)
    let t = 0;
    let c = 0;

    if (n <= 3) {
        c = 200;
        t = n * c;

    } else if (n <= 5) {
        c = 150;
        t = ((n-3) * c) + 600;
    } else if (n <= 8) {
        c = 100;
        t = ((n-5) * c) + 900;
    } else {
        c = 50;
        t = ((n-8) * c) + 1200;
    }

    a.innerHTML = `<div class="alert bg-dark" role="alert">
                    <strong class="text-white">Total de tratamiento: $${t.toFixed(2)}<br>
                    Total de cita: $${c.toFixed(2)}</strong>
                   </div>`


})