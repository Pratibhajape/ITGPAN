function add_data(){
    let name=document.getElementById("name").value;
    let roll_no=document.getElementById("roll_no").value;
    let email_id=document.getElementById("email_id").value;

    let table=document.getElementsByTagName('table')[0];
    let newrow=table.insertRow(table.rows.length/2+1);

    let cell1=newrow.insertCell(0);
    let cell2=newrow.insertCell(1);
    let cell3=newrow.insertCell(2);

    cell1.innerHTML=name;
    cell2.innerHTML=roll_no;
    cell3.innerHTML=email_id;

}