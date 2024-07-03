// import { ConversorLmht } from "@designliquido/lmht-js";

// const conversorLmht = new ConversorLmht();
// const resultado = conversorLmht.converterPorTexto("<lmht><cabeca><titulo>Teste</titulo></cabeca><corpo>Teste</corpo></lmht>");
// console.log(resultado);

import { ConversorHtml } from "@designliquido/lmht-js";

const conversorHtml = new ConversorHtml();
const resultado = conversorHtml.converterPorArquivo("test.html");
console.log(resultado);

<lmht>
    <cabeça>
        <meta/><meta nome="viewport" conteúdo="width=device-width, initial-scale=1.0"/>
        <título>Blog Simples</título>
    </cabeça>
    <corpo>
        <título1><ligação destino="#">Delégua Blog</ligação></título1>
        <navegação>
            <lista-simples></lista-simples>
        </navegação>
    </corpo>
</lmht>