    // Exercise 1: 
    /*Make a script that asks for the number of rows and columns and writes a table. 
    Inside each of the cells a consecutive number should be written in descending order. 
    If, for example, the table is 5×5, the numbers will go from 25 to 1.*/

    let row = prompt("Enter the number of rows: ")
    let column = prompt("Enter the number of columns: ")
    let number = row * column

    document.write("<table border='1'>");

    for (let i = 0; i < row; i++) {
        document.write("<tr>");
        for (let j = 0; j < column; j++) {
            document.write("<td>"+ number +"<td>");
            number--
        }
        document.write("</tr>");
    }
    document.write("</table>");
