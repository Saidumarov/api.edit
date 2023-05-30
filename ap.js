const postDataBtn = document.querySelector(".postData")
const getDataBtn = document.querySelector(".getData")
let title = document.querySelector(".input1")
let price = document.querySelector(".input2")
let description = document.querySelector(".input3")


postDataBtn.addEventListener("click", () => {
         fetch('https://api.escuelajs.co/api/v1/products/' ,{
            method: "POST",
            body: JSON.stringify({
            title: title.value,  
            price: +price.value,
            description: description.value,
            catogoriyID: 1,
            image: "https://placeimg.com/640/480/any?r=0.591926261873231"



        }),

            headers: {
            "Content-type": "application/json; charset=UTF-8 ",

        },

    })
        .then((res) => res.json())
        .then((data) => console.log(data))
});


getDataBtn.addEventListener("click", () => {
    fetch(" https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
        .then((data) => console.log(data))
})