const btn = document.querySelector( '#send');

btn.addEventListener('click', function(e){
    e.preventdefault();

    const name = document.querySelevtor('#Usuário');
    const value = name.value;
    console.log(value);
})