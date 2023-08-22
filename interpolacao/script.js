$(document).ready(function () {
  $("#calcular").on("click", function () {
    /* Primeiro pego todos os valores necessários que estão em string */
    const x0 = $("#inputX0")[0].value;
    const y0 = $("#inputY0")[0].value;
    const x1 = $("#inputX1")[0].value;
    const y1 = $("#inputY1")[0].value;
    const x = $("#inputX")[0].value;

    /* Preciso saber qual deles te o maior número de casas decimais */
    function divisorDecimal(valor) {
      /* Primeiro descubro o tipo de diferença de cadas decimais */
      let comVirgula = valor.split(",");
      let comPonto = valor.split(".");
      if (comVirgula.length > comPonto.length) {
        return comVirgula;
      } else if (comVirgula.length < comPonto.length) {
        return comPonto;
      }
      /* caso não tenha casas decimais, retorna 0 */
      return [valor, "0"];
    }

    const x0NumSplit = divisorDecimal(x0);
    const y0NumSplit = divisorDecimal(y0);
    const x1NumSplit = divisorDecimal(x1);
    const y1NumSplit = divisorDecimal(y1);
    const xNumSplit = divisorDecimal(x);

    /* Verifico qual deles tem mais cadas decimais */
    const multiplicador = Math.pow(
      10,
      Math.max(
        x0NumSplit[1].length,
        y0NumSplit[1].length,
        x1NumSplit[1].length,
        y1NumSplit[1].length,
        xNumSplit[1].length
      )
    );

    const x0Num = parseInt(
      Number(x0NumSplit[0] + "." + x0NumSplit[1]) * multiplicador
    );
    const y0Num = parseInt(
      Number(y0NumSplit[0] + "." + y0NumSplit[1]) * multiplicador
    );
    const x1Num = parseInt(
      Number(x1NumSplit[0] + "." + x1NumSplit[1]) * multiplicador
    );
    const y1Num = parseInt(
      Number(y1NumSplit[0] + "." + y1NumSplit[1]) * multiplicador
    );
    const xNum = parseInt(
      Number(xNumSplit[0] + "." + xNumSplit[1]) * multiplicador
    );

    const yNum =
      ((xNum - x0Num) * (y1Num - y0Num) + y0Num * (x1Num - x0Num)) /
      ((x1Num - x0Num) * multiplicador);

    $("#inputY")[0].value = yNum;
    console.log(yNum);
  });
});
