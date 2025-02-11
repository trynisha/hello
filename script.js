// this is project  where there is a box and we have to fill the color in the box. left bata right ma janxa bhane red color aauxa gradually also the intensity of the color ni gradually increase hunxa left mai hunxa (i.e. 255 hunxa left ko 0 position ma huda ani bich tira huda ali kam intensity ko hunxa red ) ani right bata left ma janxa bhane blue color aauxa, same for the right side ma pani 




// document.querySelector('#box').addEventListener('mousemove',function(){
//     console.log(getBoundingClientRect());
// })

// var rect = document.querySelector('#box');
// rect.addEventListener('mousemove',function(){
//     // this helllo gievs the postion of mouse in the box and the getBoundingClientRect gives the position of the box
//     console.log(rect.getBoundingClientRect())
//     // console.log(hello)
// // console.log(hello.clientX)//x axis ko value dinxa 
// })

// we are now finding the value of the mouse inside the box only, whole screen ma depend nagari ani for that we do the following ;.

var rect = document.querySelector("#box");
rect.addEventListener ("mousemove", function(hello){
    var boxPosition= rect.getBoundingClientRect();
    var insiderect =hello.clientX -boxPosition.left
    if(insiderect<boxPosition.width/2){
        // here boxPosition.width gives the total widthe of the box and we are dividing the width by 2 to get the half of the box
         var red = gsap.utils.mapRange(0 ,boxPosition.width/2,255,0,insiderect) 
         gsap.to("#box",
            {
                backgroundColor:`rgb(${red},0,0)`,
                ease:"power4",
                //power4 is a highly dramatic easing function.
// It starts slowly and accelerates quickly (for easeIn).
// It starts fast and slows down smoothly (for easeOut).
// It combines both effects for easeInOut, creating a smooth curve with strong acceleration and deceleration.
            }
         )
    }
    else{
        var blue = gsap.utils.mapRange(boxPosition.width/2,boxPosition.width,0,255,insiderect) 
         gsap.to(rect,
            {
                backgroundColor:`rgb(0,0,${blue})`,
                ease:"power4",
            }
        )
   
    }
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:'white',
        ease:"power4",
    })
})

//ani for gradually changing the color , we have to use the mapRange features of the Gsap, and the syntax of the mapRange is (inmax,outmax, outmin,outMax,valuetoMap)
// //inMin : Number - The lower bound of the initial range to map from
// inMax : Number - The upper bound of the initial range to map from
// outMin : Number - The lower bound of the range to map to
// outMax : Number - The upper bound of the range to map to
// valueToMap : Number - The value that should be mapped (typically it's between inMin and inMax).

