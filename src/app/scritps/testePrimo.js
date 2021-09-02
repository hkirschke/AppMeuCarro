function primo()
{
    let n = 17; // os comandos abaixo poder funcionar para quaisquer valores de n

    let primo = true;
    for(let i =  n ; i >  0 ; i--)
        if(n%i == 0) // Testa se n é divisível por i
    primo = false;

    console.log('${n} ${!primo?"não ":"")} é um número primo.');
}