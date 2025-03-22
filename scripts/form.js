document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    try {
        const response = await fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        } else {
            alert('Submission failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please check your connection.');
    }
});

document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', function() {
        this.blur();
    });
});


var tl = gsap.timeline();

tl.from("#bhaap",{
    opacity:0,
    ease: "Power2inout"
    
})
tl.to("#bhaap",{
    opacity:0,
    ease: "Power2inout",
    duration:0.6

    
})
tl.from("#ulta",{
    opacity:0,
    delay:-0.4,
    ease: "Power2inout",
    duration:0.6

    
})

tl.repeat(-1);


function page6Animation() {
    gsap.from("#page6 span", {
        y: 250,
        stagger: 2, 
        duration: 2.5,
        scrollTrigger: {
            trigger: "#page6",
            start: "top 80%", 
            end: "bottom bottom",
            scrub: 2,
        }
    });
}
    
      page6Animation();
    


