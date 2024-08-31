let lastScrollY = 0
navBar = document.getElementById('navBar')

window.addEventListener('scroll', function(){
    const currentScrollY = window.scrollY
    
    if (currentScrollY > lastScrollY){
        navBar.classList.add("hidden")
    }
    else{
        navBar.classList.remove("hidden")
    }
    
    lastScrollY = currentScrollY
})

let count = 0
const dropBar = document.querySelector('.dropBar')
const barsIcon = document.querySelector('.fa-solid.fa-bars.fa-xl')
const xBtn = document.querySelector('.fa-solid.fa-x.fa-xl')

function showNavbar(){
    count += 1
    if (count % 2 != 0){
        dropBar.style.display = "flex"
        barsIcon.replaceWith(xBtn)
        xBtn.style.display = "flex"
        lastScrollY = 100000
        document.body.classList.add('stopScrolling')
    }
    else{
        dropBar.style.display = "none"
        xBtn.replaceWith(barsIcon)
        xBtn.style.display = "none"
        document.body.classList.remove('stopScrolling')
    }
}


const servicePage = document.querySelector(".clickedServicePg")

function showService1(){
    servicePage.style.display = 'flex'
    document.body.classList.add("stopScrolling")
    document.getElementById('serviceHeader').textContent='Airport Transfer'
    document.getElementById('imageCard').src="images/airportEntrance.jpg"
    document.getElementById('serviceDesc').textContent='Our airport transfer service ensures you start or end your journey stress-free with reliable, on-time pickups and drop-offs. Whether you’re catching a flight or arriving after a long journey, we’ve got you covered with comfortable, clean vehicles and professional drivers.'
    document.getElementById('serviceList').innerHTML="<li><b>On-Time Guarantee:</b> We track your flight and adjust pickup times as needed.</li> <li><b>Meet & Greet Service:</b> Friendly drivers waiting for you at arrivals.</li> <li><b>Wide Range of Vehicles:</b> From sedans to spacious vans for solo travelers or groups.</li> <li><b>Easy Booking:</b> Simple online reservation process.</li>"
}

function showService2(){
    servicePage.style.display = 'flex'
    document.body.classList.add("stopScrolling")
    document.getElementById('serviceHeader').textContent='VVIP Exclusive'
    document.getElementById('imageCard').src='images/vvipExecutive.jpg'
    document.getElementById('serviceDesc').textContent='When only the best will do, our VVIP Exclusive service offers top-tier transportation with complete privacy and luxury. Perfect for high-profile clients or special occasions, this service includes high-end vehicles, discreet and professional chauffeurs, and personalized attention to every detail.'
    document.getElementById('serviceList').innerHTML="<li><b>Luxury Vehicles:</b> Travel in premium cars like luxury sedans or limousines.</li> <li><b>Personalised Service:</b> Tailored to your specific needs and preferences.</li> <li><b>Discreet & Professional:</b> Experienced chauffeurs ensuring a smooth, private journey.</li> <li><b>Extra Amenities:</b> Onboard refreshments, and other luxury features.</li>"
}

function showService3(){
    servicePage.style.display = 'flex'
    document.body.classList.add("stopScrolling")
    document.getElementById('serviceHeader').textContent='Events Transport'
    document.getElementById('imageCard').src="images/whyUs4.jpg"
    document.getElementById('serviceDesc').textContent='Planning an event? Let us handle the transportation logistics so you can focus on enjoying the occasion. Whether it’s a wedding, corporate event, or a large gathering, we provide seamless transport solutions for groups of any size.'
    document.getElementById('serviceList').innerHTML="<li><b>Group Transport:</b> Buses, vans, and other vehicles to accommodate all your guests. </li> <li><b>Flexible Scheduling:</b> Multiple pickups and drop-offs tailored to your event schedule.</li> <li><b>Experienced Coordination:</b> We handle all the details, so everything runs smoothly</li> <li><b>Comfortable Rides:</b> Ensure your guests travel in comfort and style.</li>"
}

function showService4(){
    servicePage.style.display = 'flex'
    document.body.classList.add("stopScrolling")
    document.getElementById('serviceHeader').textContent='Premium Transfer'
    document.getElementById('imageCard').src="images/premiumCar.jpg"
    document.getElementById('serviceDesc').textContent='Elevate your travel experience with our Premium Transfer service. Ideal for those who value comfort and style, this service features premium vehicles with luxury interiors, perfect for business travel, special occasions, or anyone who enjoys a touch of luxury.'
    document.getElementById('serviceList').innerHTML="<li><b>High-End Vehicles:</b> Choose from a range of premium cars with top-tier features.</li> <li><b>Professional Drivers:</b> Courteous, skilled chauffeurs dedicated to your comfort.</li> <li><b>Customizable Experience:</b> Tailor your ride with additional services and amenities.</li> <li><b>Seamless Booking:</b> Effortless reservation process for a hassle-free experience.</li>"
}

function showService5(){
    servicePage.style.display = 'flex'
    document.body.classList.add("stopScrolling")
    document.getElementById('serviceHeader').textContent='School Car Pooling'
    document.getElementById('imageCard').src="images/schPool.jpeg"
    document.getElementById('serviceDesc').textContent='Make school commutes easier and more efficient with our School Car Pooling service. Designed to reduce the hassle of daily school runs, this service provides safe and reliable transport for small groups of students, with cost-effective and eco-friendly options.'
    document.getElementById('serviceList').innerHTML="<li><b>Safe & Reliable:</b> Experienced drivers with a focus on student safety.</li> <li><b>Cost-Effective:</b> Share the ride, split the cost, and reduce traffic.</li> <li><b>Flexible Routes:</b> Customized pickup and drop-off locations for convenience.</li> <li><b>Parental Peace of Mind:</b> Regular updates and communication for reassurance.</li>"
}

function showService6(){
    servicePage.style.display = 'flex'
    document.body.classList.add("stopScrolling")
    document.getElementById('serviceHeader').textContent='Cross-Border Transfer'
    document.getElementById('imageCard').src="images/mobReplace.png"
    document.getElementById('serviceDesc').textContent='Our Malaysia Cross-Border Transfer service takes the stress out of traveling between Singapore and Malaysia. Whether for business or leisure, we ensure a smooth, hassle-free journey with professional drivers who know the best routes and handle all the details.'
    document.getElementById('serviceList').innerHTML="<li><b>Malaysia Destinations:</b> JB, KL, Legoland, Desaru, Malacca, Mersing, Genting Highlands, and more.</li> <li><b>Comfortable Vehicles:</b> Travel in well-maintained cars or vans, perfect for long trips.</li> <li><b>Experienced Drivers:</b> Knowledgeable in cross-border regulations and routes.</li> <li><b>Flexible Options:</b> Choose the vehicle and schedule that fits your needs.</li>"
}





function closeService(){
    servicePage.style.display = 'none'
    document.body.classList.remove("stopScrolling")
}