let x=0;

const editCv = () => {
    x=1;
    // loop res_details
    let res_details = document.getElementsByClassName('res_details');
    for (let i = 0; i < res_details.length; i++) {
        res_details[i].contentEditable = 'true';
    }

    

    
    var id=document.getElementById("img_clk");
    id.onclick = function() {
        imgData=prompt("Enter image URL")

        if(imgData!="")
            id.src=imgData;


    };
}



// function changeBarWidth() {
//     ifx==1:
//     document.getElementById("1").style.width = "100%";
// }

function changeBarWidth(id) {
    if(x==1){
        a=prompt("Enter in %")
        document.getElementById("1").style.width=;
    }
    
}

function printPageArea(areaID){
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=900,height=650');
    // add bootstrap css
    WinPrint.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Resume</title><script src="https://kit.fontawesome.com/1625eab60d.js" crossorigin="anonymous"></script><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" media="all"><link rel="stylesheet" href="style.css" media="all"></head>');
    WinPrint.document.write('<link rel="stylesheet" href="style.css" type="text/css" media="all"/>');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

