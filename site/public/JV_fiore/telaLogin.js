
    function login(){

    var nomeEmpresa = ipt_nomeEmpresa.value;
    var senha = Number(ipt_senha.value);

    if(    
    nomeEmpresa.toLowerCase() == 'adriana florista ltda' &&
    senha == 00000 ||
    
    nomeEmpresa.toLowerCase() == 'floresfloridas@gmail.com' &&
    senha == 00000 ||

    nomeEmpresa.toLowerCase() == 'Lilian Nara' &&
    
    senha == 00000 

    ){
        window.location.href = "novografico.html"
    }else{
        alert(`Email ou senha podem estar incorretos`)
    };

}
