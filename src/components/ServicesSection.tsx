import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles/ServicesSection.module.scss";

export default function ServicesSection() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const services = [
    {
      id: 1,
      title: "Breakfast Special",
      description:
        "Start your day with our delicious breakfast options featuring fresh ingredients and wholesome flavors.",
      icon: "/Images/dishPhoto/breakFast_1.png",
      background: "/Images/dishPhoto/breakFast_1.png",
    },
    {
      id: 2,
      title: "Morning Delight",
      description:
        "A perfect morning meal with fresh eggs, crispy toast, and your choice of sides.",
      icon: "/Images/dishPhoto/breakFast_2.png",
      background: "/Images/dishPhoto/breakFast_2.png",
    },
    {
      id: 3,
      title: "Healthy Start",
      description:
        "Nutritious breakfast bowls packed with fresh fruits, granola, and natural yogurt.",
      icon: "/Images/dishPhoto/breakFast_3.png",
      background: "/Images/dishPhoto/breakFast_3.png",
    },
    {
      id: 4,
      title: "Premium Breakfast",
      description:
        "Indulge in our signature breakfast platter with all your morning favorites.",
      icon: "/Images/dishPhoto/brekFast_4.png",
      background: "/Images/dishPhoto/brekFast_4.png",
    },
    {
      id: 5,
      title: "Wellness Breakfast",
      description:
        "A balanced meal to fuel your day with the right nutrients and energy.",
      icon: "/Images/dishPhoto/healthBreakFast.png",
      background: "/Images/dishPhoto/healthBreakFast.png",
    },
    // Reusing for 6th item since only 5 images available
    {
      id: 6,
      title: "Breakfast Classic",
      description:
        "Traditional breakfast favorites made fresh with quality ingredients.",
      icon: "/Images/dishPhoto/breakFast_1.png",
      background: "/Images/dishPhoto/breakFast_1.png",
    },
  ];

  return (
    <section className={styles.servicesRoot}>
      <div className={`container ${styles.servicesContainer}`}>
        <h3 className={styles.servicesAnimateIn}>Our Popular Dishes</h3>
        <div className={styles.servicesCarouselWrap}>
          <Swiper
            className={styles.servicesCarousel}
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            centeredSlides
            centeredSlidesBounds
            spaceBetween={24}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className={styles.slide}>
                <article className={styles.slideCard}>
                  <img
                    className={styles.slideImage}
                    src={service.background}
                    alt={service.title}
                  />
                  <div className={styles.slideBody}>
                    <h4 className={styles.slideTitle}>{service.title}</h4>
                    <p className={styles.slideDescription}>
                      {service.description}
                    </p>
                    <a className={styles.slideCta} href="#">
                      Read more
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            aria-label="Previous"
            className={`${styles.navButton} ${styles.navPrev}`}
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            aria-label="Next"
            className={`${styles.navButton} ${styles.navNext}`}
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
