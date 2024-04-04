let c;
let p;
function ss(){
    c =4 
    p =4
    var g = c * p;
    var t = 0;
    sumVal = 0;
    var table = document.getElementById("hell");
    document.write("<table border='2px solid black' id=table>");
    for (var k = 0; k < p; k++) {

        for (var i = t; i < g; i += p) {
            sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
        }
        document.write("<tr>");
        for (let j = 0; j < 1; j++) {
            document.write("<th>avg" + (k+1) + "</th>")
            document.write("<td>" + sumVal / c + "</td>")
        }
        document.write("</tr>");
        console.log(sumVal);
        sumVal = 0;
        t = t + 1;
    }
    document.write("</table>")
};
