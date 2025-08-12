import styles from "./styles/BrandsSection.module.scss";

export default function BrandsSection() {
  const brands = [
    { id: 1, src: "/Images/section_6_1.png", alt: "Brand 1" },
    { id: 2, src: "/Images/section_6_2.png", alt: "Brand 2" },
    { id: 3, src: "/Images/section_6_3.png", alt: "Brand 3" },
    { id: 4, src: "/Images/section_6_4.png", alt: "Brand 4" },
    { id: 5, src: "/Images/section_6_5.png", alt: "Brand 5" },
    { id: 6, src: "/Images/section_6_6.png", alt: "Brand 6" },
    { id: 7, src: "/Images/section_6_7.png", alt: "Brand 7" },
    { id: 8, src: "/Images/section_6_8.png", alt: "Brand 8" },
    { id: 9, src: "/Images/section_6_9.png", alt: "Brand 9" },
  ];

  return (
    <section className={styles.section6}>
      <div className={styles.container}>
        <div className={styles.section6Header}>
          <h4 className={styles.animateIn}>As you Seen on</h4>
          <p className={styles.animateIn}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            at justo,
            <br />
            amet dignissim. Quam enim est dignissim quam dignissim aliquam
            congue.
          </p>
        </div>

        <div className={styles.brandsGrid}>
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={`${styles.brandItem} ${styles.animateIn}`}
            >
              <figure>
                <img src={brand.src} alt={brand.alt} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
