let counts1 = setInterval(updated1);
let upto1 = 0;
function updated1() {
    let count = document.getElementById("counter1");
    count.innerHTML = ++upto1;
    if (upto1 === 96) {
        clearInterval(counts1);
    }
}
let counts2 = setInterval(updated2);
let upto2 = 0;
function updated2() {
    let count = document.getElementById("counter2");
    count.innerHTML = ++upto2;
    if (upto2 === 183) {
        clearInterval(counts2);
    }
}
let counts3 = setInterval(updated3);
let upto3 = 0;
function updated3() {
    let count = document.getElementById("counter3");
    count.innerHTML = ++upto3;
    if (upto3 === 82) {
        clearInterval(counts3);
    }
}

// testimonials
document.getElementById('btn-client-1').addEventListener('click', function () {
    const testimonialTextElement = document.getElementById('testimonial-text');
    const testimonialClientNameElement = document.getElementById('testimonial-client-name');
    testimonialTextElement.innerText = `I hired Ebarak for onboarding and implementing HubSpot for
    two of my SaaS clients. Ebarak did an excellent job in providing deliverables as expected. What's
    more, with his profound SEO knowledge, we implemented the Topic-Cluster SEO model and are watching
    the organic traffic grow exponentially. I will hire him again for my future projects.`;
    testimonialClientNameElement.innerText = `Melissa Bohlsen, B2B Marketing Consultant, Germany`;
})
document.getElementById('btn-client-2').addEventListener('click', function () {
    const testimonialTextElement = document.getElementById('testimonial-text');
    const testimonialClientNameElement = document.getElementById('testimonial-client-name');
    testimonialTextElement.innerText = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;
    testimonialClientNameElement.innerText = `Dan Novit, HubSpot Agency Owner, US`;
})
document.getElementById('btn-client-3').addEventListener('click', function () {
    const testimonialTextElement = document.getElementById('testimonial-text');
    const testimonialClientNameElement = document.getElementById('testimonial-client-name');
    testimonialTextElement.innerText = `I hired Ebarak for onboarding and implementing HubSpot for
    two of my SaaS clients. Ebarak did an excellent job in providing deliverables as expected. What's
    more, with his profound SEO knowledge, we implemented the Topic-Cluster SEO model and are watching
    the organic traffic grow exponentially. I will hire him again for my future projects.`;
    testimonialClientNameElement.innerText = `Melissa Bohlsen, B2B Marketing Consultant, Germany`;
})
document.getElementById('btn-client-4').addEventListener('click', function () {
    const testimonialTextElement = document.getElementById('testimonial-text');
    const testimonialClientNameElement = document.getElementById('testimonial-client-name');
    testimonialTextElement.innerText = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;
    testimonialClientNameElement.innerText = `Dan Novit, HubSpot Agency Owner, US`;
})

// view all
document.getElementById('view-all').addEventListener('click', function () {
    let hidden = document.getElementById('hidden1');
    hidden.classList.remove('hidden');
})
document.getElementById('view-all').addEventListener('click', function () {
    let hidden = document.getElementById('hidden2');
    hidden.classList.remove('hidden');
})
document.getElementById('view-all').addEventListener('click', function () {
    let hidden = document.getElementById('hidden3');
    hidden.classList.remove('hidden');
})