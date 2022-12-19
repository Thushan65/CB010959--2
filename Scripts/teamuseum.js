let btnaddorder=document.getElementById("addorder");
let btnplaceorder=document.getElementById("placeorder");

btnaddorder.addEventListener("click",AddOrder1);
btnaddorder.addEventListener("click",AddOrder);
btnaddorder.addEventListener("click",Reset);

btnplaceorder.addEventListener("click",PlaceOrder);

//Creating the Bill
    function AddOrder(event){

        event.preventDefault();

        const txtName=document.getElementById("name");
        document.getElementById("no1").innerText=txtName.value

        document.getElementById("no2").innerText=document.getElementById("foreignadults").value;
        document.getElementById("no3").innerText=document.getElementById("foreignchild").value;

        document.getElementById("no4").innerText=document.getElementById("localadults").value;
        document.getElementById("no6").innerText=document.getElementById("localchildu15").value;
        document.getElementById("no5").innerText=document.getElementById("localchildu6").value;

        document.getElementById("no7").innerText=document.getElementById("foreignap").value;
        document.getElementById("no8").innerText=document.getElementById("foreignft").value; 

        document.getElementById("no12").innerText=document.getElementById("localap").value;
        document.getElementById("no13").innerText=document.getElementById("localft").value;

    }

//Calculating current cost
    function AddOrder1(){

        let lextras=0;

        let t1=document.getElementById("time1");
        let t2=document.getElementById("time2");
        let t3=document.getElementById("time3");
        let t4=document.getElementById("time4");

        if(t1.checked==true){
            lextras=lextras+0;
        }
        else if(t2.checked==true){
            lextras=lextras+250;
        }
        else if(t3.checked==true){
            lextras=lextras+500;
        }
        else if(t4.checked==true){
            lextras=lextras+1000;
        }

        let fextras=0;

        let t5=document.getElementById("time5");
        let t6=document.getElementById("time6");
        let t7=document.getElementById("time7");
        let t8=document.getElementById("time8");

        if(t5.checked==true){
            fextras=fextras+1000;
        }
        else if(t6.checked==true){
            fextras=fextras+500;
        }
        else if(t7.checked==true){
            fextras=fextras+1000;
        }
        else if(t8.checked==true){
            fextras=fextras+2000;
        }

        document.getElementById("no10").innerText= lextras + fextras ;

        let totaltickets = parseInt(document.getElementById("foreignadults").value) + parseInt(document.getElementById("foreignchild").value) + parseInt(document.getElementById("localadults").value) + parseInt(document.getElementById("localchildu15").value) + parseInt(document.getElementById("localchildu6").value) + parseInt(document.getElementById("foreignap").value) + parseInt(document.getElementById("foreignft").value) + parseInt(document.getElementById("localap").value) + parseInt(document.getElementById("localft").value);

        
        document.getElementById("items2").innerText = totaltickets;

        let totalPrice = parseInt(document.getElementById("foreignadults").value * 3000) + parseInt(document.getElementById("foreignchild").value * 2500) + parseInt(document.getElementById("localadults").value * 2500) + parseInt(document.getElementById("localchildu15").value * 1000) + parseInt(document.getElementById("localchildu6").value * 500) + parseInt(document.getElementById("foreignap").value * 5000) + parseInt(document.getElementById("foreignft").value * 500) + parseInt(document.getElementById("localap").value * 5000) + parseInt(document.getElementById("localft").value * 500) + lextras + fextras;

        document.getElementById("overallprice").innerText = totalPrice;

    }

//Making values 0 
    function RealTime() {

            document.getElementById("items1").innerText = "0";
            document.getElementById("currentprice").innerText = "0";

            alert("Order has been added to the Overall Order")
        }

//Calculation the overall cost
    let tickets = [];
    function AddtoCurrent(){

        let durationlocal=document.getElementById("durationlocal").value;
        let lextras=0;;
        if (durationlocal == "Three Hours") {
            lextras = lextras+0
    
        }
        else if (durationlocal == "Half Day") {
            lextras = lextras+250
        }
        else if (durationlocal == "Full Day") {
           lextras = lextras+500
        }
        else if (durationlocal == "Two Days") {
            lextras = lextras+1000
        }
    
        let durationforeign=document.getElementById("durationforeign").value;
        let fextras=0;;
    
        if (durationforeign == "Three Hours") {
            fextras = fextras+1000
    
        }
        else if (durationforeign == "Half Day") {
            fextras = fextras+500
        }
        else if (durationforeign == "Full Day") {
            fextras = fextras+1000
        }
        else if (durationforeign == "Two Days") {
            fextras = fextras+2000
        }

        let currentTickets = parseInt(document.getElementById("foreignadults").value) + parseInt(document.getElementById("foreignchild").value)  + parseInt(document.getElementById("localadults").value ) + parseInt(document.getElementById("localchildu15").value ) + parseInt(document.getElementById("localchildu6").value ) + parseInt(document.getElementById("foreignap").value) + parseInt(document.getElementById("foreignft").value);
        console.log(currentTickets) + parseInt(document.getElementById("localap").value) + parseInt(document.getElementById("localft").value);
        

        document.getElementById("items1").innerText = currentTickets;

        let currentPrice = parseInt(document.getElementById("foreignadults").value * 3000) + parseInt(document.getElementById("foreignchild").value * 2500) + parseInt(document.getElementById("localadults").value * 2500) + parseInt(document.getElementById("localchildu15").value * 1000) + parseInt(document.getElementById("localchildu6").value * 500) + parseInt(document.getElementById("foreignap").value * 5000) + parseInt(document.getElementById("foreignft").value * 500) + parseInt(document.getElementById("localap").value * 5000) + parseInt(document.getElementById("localft").value * 500 + lextras + fextras);
        console.log(currentPrice);

        document.getElementById("currentprice").innerText =currentPrice;
        
    }

//Reseting the bill
    function Reset(){
        document.getElementById("name").value="";
        document.getElementById("email").value="";
    
        document.getElementById("foreignadults").value=00;
        document.getElementById("foreignchild").value=00;
        document.getElementById("localadults").value=00;
        document.getElementById("localchildu6").value=00;
        document.getElementById("localchildu15").value=00;
        document.getElementById("foreignap").value=00;
        document.getElementById("foreignft").value=00;
        document.getElementById("localap").value=00;
        document.getElementById("localft").value=00;
    }

//Placing the order
    function PlaceOrder(){

        alert("Are you sure, your want to reserve following tickets?");
    
        let time1=document.getElementById("time1");
        let time2=document.getElementById("time2");
        let time3=document.getElementById("time3");
        let time4=document.getElementById("time4");
        let time5=document.getElementById("time5");
        let time6=document.getElementById("time6");
        let time7=document.getElementById("time7");
        let time8=document.getElementById("time8");
    
        if(time1.checked==true||time2.checked==true||time3.checked==true||time4.checked==true&&time5.checked==true||time6.checked==true||time7.checked==true||time8.checked==true){

            alert("Thank you for your custom reservation.\nYour train number is:TN0000699.\nA detailed bill will send to your Email.\nHave a nice day!");

        }

        else{
            alert("Incomplete order!\nPlese try Again!")
        }
    
    }



let btnSubmit3 = document.getElementById("submit2");
btnSubmit3.addEventListener("click",Donation);

//Donation Function
function Donation (){

    let da1=document.getElementById("da1");
    let da2=document.getElementById("da2");
    let da3=document.getElementById("da3");
    let da4=document.getElementById("da4");
    let da5=document.getElementById("da5");
    let da6=document.getElementById("da6");
    let da7=document.getElementById("da7");

    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let address=document.getElementById("address").value;
    let cardnumber=document.getElementById("cardnumber").value;
    let cardname=document.getElementById("cardname").value;
    let expdate=document.getElementById("expdate").value;
    let cvv=document.getElementById("cvv").value;
    

    if(fname===""){
        alert("Donation unsuccessful!\nPlese try again!");
    }
    else if(lname===""){
        alert("Donation unsuccessful!\nPlese try again!");
    }
    else if(address===""){
        alert("Donation unsuccessful!\nPlese try again!");
    }
    else if(cardnumber===""){
        alert("Donation unsuccessful!\nPlese try again!");
    }
    else if(cardname===""){
        alert("Donation unsuccessful!\nPlese try again!");
    }
    else if(expdate===""){
        alert("Donation unsuccessful!\nPlese try again!");
    }
    else if(cvv===""){
        alert("Donation unsuccessful!\nPlese try again!");
    }


    if(da1.checked==true||da2.checked==true||da3.checked==true||da4.checked==true||da5.checked==true||da6.checked==true||da7.checked==true){
        alert("Donation successful!\nThank you for your kindness!");
     }
    else{
        alert("Donation unsuccessful!\nPlese try again!")
    }

}