// var card_data = [
//     {
//         beer: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1a84b0db-b347-43fd-b5ac-3067178a80b7_425x425.jpg",
//         TIME: "DELIVERY IN 90 MINUTES",
//         brand: "STAGS LEAP CHARDONNAY NAPA VALLEY ",
//         PEICES: "1PC",
//         MRP: 1230,
//         ADD: " ADD"
//     },


//     {
//         beer: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/62c4298a-af17-4a66-aefa-37ce908bf9c5_425x425.jpg",
//         TIME: "DELIVERY IN 90 MINUTES",
//         brand: "STAGS LEAP CHARDONNAY NAPA VALLEY ",
//         PEICES: "1PC",
//         MRP: 7250,
//         ADD: " ADD"
//     },



//     {
//         beer: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4ed411ad-1790-400c-990a-3b295e959234_425x425.jpg",
//         TIME: "DELIVERY IN 90 MINUTES",
//         brand: "STAGS LEAP CHARDONNAY NAPA VALLEY ",
//         PEICES: "1PC",
//         MRP: 1250,
//         ADD: " ADD"
//     }



// ];
// var localdata = localStorage.setItem("localdatacart", JSON.stringify(card_data))
var localdatacart = JSON.parse(localStorage.getItem("localdatacart")) || []



if (localdatacart.length == 0) {
    var cart_detail = document.createElement("div")
    cart_detail.setAttribute("id", "cart_detail")
    var emptyicon = document.createElement("img")
    emptyicon.src = "https://d1z88p83zuviay.cloudfront.net/Images/Icon-no-cart.png"
    emptyicon.setAttribute("class", "emtImg")
    var notice = document.createElement("h3")
    notice.innerText = "No products added to your cart."
    var btn = document.createElement("button")
    btn.innerText = "Continue Shoping "
    btn.style.cursor = "pointer"
    btn.addEventListener("click", function () {
        window.location.href = "products.html"
    })
    cart_detail.append(emptyicon, notice, btn)
    document.querySelector(".container").append(cart_detail)

}
else {
    var subt = localdatacart.reduce(function (sum, ele) {
        return sum + ele.smallmrp
    }, 0)

    var delcharge = 50
    var ttl = subt + delcharge
    console.log(ttl)
    var added_card = document.createElement("div")
    added_card.setAttribute("id", "added_card")
    var upper = document.createElement("div")
    upper.setAttribute("id", "upper")
    var today = document.createElement("p")
    today.innerText = "GET YOUR ORDER DELIVERED TODAY ."
    today.setAttribute("class", "today")


    var lower = document.createElement("div")
    lower.setAttribute("id", "lower")
    var subtotal = document.createElement("div")
    subtotal.setAttribute("class", "subtotal")
    var sub = document.createElement("p")
    sub.innerText = "Sub-Total :" + "  " + "Rs" + " " + subt
    var total = document.createElement("h5")
    total.innerText = "Total :" + "  " + "Rs" + " " + ttl
    var delc = document.createElement("p")
    var xyz = "Delivery Charges :" + "  " + "Rs" + " " + delcharge
    delc.innerText = xyz;
    var notice = document.createElement("p")
    notice.innerText = "* Any customization of cheese/meat as per your selection will be done with the best possible effort."
    subtotal.append(sub, delc, total, notice)
    // 
    var checkout = document.createElement("div")
    checkout.setAttribute("class", "checkout")
    var checkbtn = document.createElement("button")
    checkbtn.innerText = "PROCEED TO CHECKOUT"
    checkbtn.addEventListener("click",function(){
        window.location.href="login.html"
    })
    checkout.append(checkbtn)
    upper.append(today)
    lower.append(subtotal, checkout)
    added_card.append(upper, lower)
    document.querySelector(".container").append(added_card)
    var detail = document.querySelector("#upper")
    localdatacart.forEach(function (ele) {
        var abc = ele.smallmrp
        var box = document.createElement("div")
        box.setAttribute('class', "box")
        var data1 = document.createElement("div")
        var pic = document.createElement("img")
        pic.src = ele.beer
        var brand = document.createElement("p")
        brand.innerText = ele.brand
        // var peice=document.createElement("p")
        // peice.innerText=ele.PEICES
        // first complete
        var data2 = document.createElement("div")
        var subs = document.createElement("button")
        subs.innerText = "-"

        subs.addEventListener("click", function () {
            Substract(-1)
        })




        var result = document.createElement("button")
        result.innerText = 1
        var add = document.createElement("button")
        add.innerText = "+"
        add.addEventListener("click", function () {
            Substract(1)
        })
        // second complete
        var data3 = document.createElement("div")
        var pricecal = document.createElement("p")
        var bcd = "Rs" + " " + abc

        pricecal.innerText = bcd

        // 3rd complete
        var data4 = document.createElement("div")
        var delet = document.createElement("button")
        delet.innerText = "X"
        delet.addEventListener("click", function () {
            Deletetion(ele)

        })
        delet.style.backgroundColor = "silver"



        // appending all thing

        data1.append(pic, brand)
        // 
        data2.append(subs, result, add)
        // 
        data3.append(pricecal)
        data4.append(delet)
        box.append(data1, data2, data3, data4)
        detail.append(box)

        // 

        function Substract(x) {


        }
    })
    function Deletetion(ele) {
        event.target.parentNode.parentNode.remove()
        var newlocaldata = localdatacart.filter(function (element)//here is little bug if two products MRP are same then this function neglect both
        {

            return ele.smallmrp != element.smallmrp
        })
        console.log(newlocaldata)

        localStorage.setItem("localdatacart", JSON.stringify(newlocaldata))
        window.location.reload()


    }
}


// 

var slide = document.getElementsByClassName("dummy")
slide[0].style.display = "block"

function controler(x) {
    if (x == -1) {
        for (y of slide) {
            y.style.display = "none"
        }
        slide[0].style.display = "block"
    }
    if (x == 1) {
        for (y of slide) {
            y.style.display = "none"
        }
        slide[1].style.display = "block"
    }
}

// 
