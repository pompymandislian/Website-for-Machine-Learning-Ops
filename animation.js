// Home
const hidden_elements = document.querySelectorAll('.penjelasan')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show')
        }
    })
});

hidden_elements.forEach(el => {
    observer.observe(el);
});

// Marketing Analytics
document.addEventListener("DOMContentLoaded", function() {
    // Temukan elemen "Marketing Analytics"
    var marketingAnalyticsLink = document.querySelector('header nav#subtopnav ul li:nth-child(4) a');
    
    // Tambahkan event listener untuk mendengarkan klik pada elemen tersebut
    marketingAnalyticsLink.addEventListener("click", function(event) {
        // Berhenti default behavior dari link
        event.preventDefault();
        
        // Redirect pengguna ke halaman yang dituju (misalnya "marketing_analytics.html")
        window.location.href = "marketing.html";
    });
});


// Sign In
document.addEventListener("DOMContentLoaded", function() {
    // Temukan elemen "Sign in"
    var marketingAnalyticsLink = document.querySelector('header nav#subtopnav ul li:nth-child(6) a');
    
    // Tambahkan event listener untuk mendengarkan klik pada elemen tersebut
    marketingAnalyticsLink.addEventListener("click", function(event) {
        // Berhenti default behavior dari link
        event.preventDefault();
        
        // Redirect pengguna ke halaman yang dituju (misalnya "marketing_analytics.html")
        window.location.href = "sign_in.html";
    });
});

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function goBack() {
    redirectToHome(); // Redirect to home.html saat tombol back ditekan
}

function redirectToHome() {
    window.location.href = "Home.html"; // Mengarahkan ke home.html
}

document.addEventListener("DOMContentLoaded", function() {
    // Temukan tanda panah
    var arrow = document.querySelector('.arrow');
    
    // Tambahkan event listener untuk menangani klik pada tanda panah
    arrow.addEventListener('click', function() {
        // Arahkan pengguna ke halaman home.html
        window.location.href = 'Home.html';
    });
});
