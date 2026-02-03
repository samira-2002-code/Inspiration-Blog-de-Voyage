const add_btn=document.querySelector(".add_btn");
const form=document.querySelector(".form");
const close_btn =document.querySelector(".close_btn") 

add_btn.addEventListener("click",()=>{
     form.classList.add('flex');
    form.classList.remove('hidden');
    
})


close_btn.addEventListener("click",()=>{
     form.classList.remove('flex');
    form.classList.add('hidden');
    
})
            // <div
            //     class="fixed left-0 right-0 top-0 bg-gray-500 w-20 h-[100vh] flex flex-col justify-around items-center    "
            // >
            //     <img class="w-8 h-8" src="home.png" />
            //     <img class="w-8 h-8" src="heart.png" />
            //     <img class="w-8 h-8" src="black-placeholder-variant.png" />
            //     <a href="profile.html"
            //         ><img class="w-8 h-8" src="user.png"
            //     /></a>
            // </div>
