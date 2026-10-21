const whatsappUrl = "https://wa.me/27725679877?text=Hello%20Perm%27s%20Hair%20Salon!%20I%20would%20like%20to%20book%20a%20hairstyle.%20Please%20let%20me%20know%20your%20available%20dates%20and%20prices.";

const hairstyleExamples = [
  {
    name: "Knotless braids",
    price: 850,
    description: "Lightweight, neat braids with a natural-looking finish.",
    image: "https://images.pexels.com/photos/17463802/pexels-photo-17463802.jpeg?auto=compress&cs=tinysrgb&w=800&h=950&fit=crop",
    alt: "Long knotless braids styled over the shoulder"
  },
  {
    name: "Box braids",
    price: 750,
    description: "A timeless protective style, made to suit your length and size.",
    image: "https://images.pexels.com/photos/11268995/pexels-photo-11268995.jpeg?auto=compress&cs=tinysrgb&w=800&h=950&fit=crop",
    alt: "Detailed braided hair finished with wooden beads"
  },
  {
    name: "Cornrows",
    price: 350,
    description: "Clean, close-to-the-scalp braids for a polished everyday look.",
    image: "https://images.pexels.com/photos/31473242/pexels-photo-31473242.jpeg?auto=compress&cs=tinysrgb&w=800&h=950&fit=crop",
    alt: "Intricate cornrow braids viewed from behind"
  },
  {
    name: "Straight-back braids",
    price: 300,
    description: "Classic straight-back lines with a tidy, lasting finish.",
    image: "https://images.pexels.com/photos/7607802/pexels-photo-7607802.jpeg?auto=compress&cs=tinysrgb&w=800&h=950&fit=crop",
    alt: "Close detail of a braided hairstyle"
  },
  {
    name: "Twists",
    price: 700,
    description: "Soft, versatile twists shaped around your own style.",
    image: "https://images.pexels.com/photos/11515407/pexels-photo-11515407.jpeg?auto=compress&cs=tinysrgb&w=800&h=950&fit=crop",
    alt: "Woman wearing a finished twist hairstyle"
  },
  {
    name: "Wig installation",
    price: 450,
    description: "A smooth install and finish for a confident, natural look.",
    image: "https://images.pexels.com/photos/6923437/pexels-photo-6923437.jpeg?auto=compress&cs=tinysrgb&w=800&h=950&fit=crop",
    alt: "Stylist fitting a curly wig in a salon"
  },
  {
    name: "Natural hair styling",
    price: 250,
    description: "Thoughtful styling that celebrates your natural texture.",
    image: "https://images.pexels.com/photos/7928042/pexels-photo-7928042.jpeg?auto=compress&cs=tinysrgb&w=800&h=950&fit=crop",
    alt: "Woman with a natural afro hairstyle"
  },
  {
    name: "Hair washing & styling",
    price: 300,
    description: "A refreshing wash followed by a style that feels like you.",
    image: "https://images.pexels.com/photos/11830085/pexels-photo-11830085.jpeg?auto=compress&cs=tinysrgb&w=800&h=950&fit=crop",
    alt: "Portrait of a woman with healthy natural curls"
  }
];

const serviceGrid = document.querySelector("#service-grid");
const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");

const formatExamplePrice = (price) => `Example from R${price.toLocaleString("en-ZA")}`;

serviceGrid.innerHTML = hairstyleExamples.map((style, index) => `
  <article class="service-card">
    <div class="service-image-wrap">
      <img class="service-image" src="${style.image}" alt="${style.alt}" loading="lazy">
      <span class="service-number">${String(index + 1).padStart(2, "0")}</span>
    </div>
    <div class="service-content">
      <div class="service-title-row"><h3>${style.name}</h3><span class="service-price">${formatExamplePrice(style.price)}</span></div>
      <p>${style.description}</p>
      <a class="service-book" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Ask about this style <span aria-hidden="true">↗</span></a>
    </div>
  </article>
`).join("");

document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
  link.href = whatsappUrl;
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.documentElement.classList.add("js-enabled");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  siteNavigation.classList.toggle("is-open", !isExpanded);
});

siteNavigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNavigation.classList.remove("is-open");
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".service-card, .gallery-item, .detail-block").forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });
}