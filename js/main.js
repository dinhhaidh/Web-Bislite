const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () =>{
        // Thêm lớp menu hiển thị vào menu điều hướng
        nav.classList.toggle('show-menu')

        // Thêm show-icon để hiển thị và ẩn biểu tượng menu
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle','nav-menu')

// ======== HOME SWIPER  ========== //
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
      },
});
// ======== HOME SWIPER  ========== //
let swiperLastets = new Swiper('.lastets-works__swiper', {
    loop: true,
    spaceBetween: 37,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        950: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});

