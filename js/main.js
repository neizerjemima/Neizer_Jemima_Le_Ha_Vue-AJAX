const makeup = Vue.createApp({
    created() {
        makeup.innerHTML=spinner;
        fetch("http://localhost/Neizer_Jemima-API/public/lips")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.lipsData = data; 
            })
            .catch(error => {
                console.error(error);
            });

            fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick")
            .then(res => res.json())
            .then(data => {
                this.makeupData = data.slice(-5);
            })
            .catch(error => {
                console.log("error", error); // Log any errors
                this.error = "Error fetching Makeup data";
                //Let user know if there was an error, write to DOM!
            });
    },

    data(){
        return{
            makeupData: [],
            lipsData: [],
            selectedMakeup: null,
            name: "",
            brand: "",
            description: "",
            product_image: "",
            product_link: "",
            title: "",
            benefits: "",
            error: ""
        }
    },

    methods: {
        showMakeupContent(makeup, event) {
            this.selectedMakeup = makeup;
            const makeupContentId = 'makeup_' + makeup.id;
            document.getElementById(makeupContentId).scrollIntoView({
            behavior: 'smooth'
        });
        },
        
    //      getMakeup(whichMakeup) {
    //     //     // console.log(whichMakeup);
    //     //     // let brand = "maybelline";
    //     //     // let convertedTitle = `brand=${encodeURIComponent(brand)}`;
    //     //     // console.log(convertedTitle);
        
    //         fetch("http://makeup-api.herokuapp.com/api/v1/products.json?")
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data); // Log the API response as an array
    //                 if (data.length > 0) {
    //                     console.log(data);
    //                     //Condition ? TrueExpression : FalseelseExpression
    //                     const makeup = data;
    //                     this.error = false;
    //                     this.name = makeup.name ? makeup.name[0] : "Not available";
    //                     this.brand = makeup.brand ? makeup.brand[0] : "Not available";
    //                     this.description = makeup.description ? makeup.description[0] : "Not available";
    //                     this.product_link = makeup.website_link ? makeup.website_link[0] : "Not available";
    //                     this.product_image = makeup.image_link ? makeup.image_link[0] : "Not available";
    //                     this.title = makeup.title ? makeup.title[0] : "Not available";
    //                     this.benefit_list = makeup.benefits.length > 0 ? makeup.benefits.map(benefit => benefit.benefit_list).join(", ") : "Not available";
        
    //                 } else {
    //                     this.error = "Makeup Lost in Space. Try Again."
    //                 }
    //         })
    //             .catch(error => {
    //                 console.log("error", error); // Log any errors
    //                 this.error = "Error fetching Makeup data";
    //                 //Let user know if there was an error, write to DOM!
    //             });
    //     }
        
     }
    
});

makeup.mount("#app");