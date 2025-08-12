import styles from "./styles/ServicesSection.module.scss";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Drive through",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas at justo, tellus amet dignissim. Quam enim est dignissim",
      icon: "/Images/section_4_1.png",
      background: "/Images/section_4_bg.png",
    },
    {
      id: 2,
      title: "Front counter",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas at justo, tellus amet dignissim. Quam enim est dignissim",
      icon: "/Images/section_4_2.png",
      background: "/Images/section_4_bg.png",
    },
    {
      id: 3,
      title: "Call Center",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas at justo, tellus amet dignissim. Quam enim est dignissim",
      icon: "/Images/section_4_3.png",
      background: "/Images/section_4_bg.png",
    },
    {
      id: 4,
      title: "Curbside",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas at justo, tellus amet dignissim. Quam enim est dignissim",
      icon: "/Images/section_4_4.png",
      background: "/Images/section_3_bg.png",
    },
  ];

  return (
    <section className={styles.section4}>
      <div className={styles.container}>
        <h3 className={styles.animateIn}>Our Services</h3>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${styles.animateIn}`}
            >
              <div className={styles.cardBackground}>
                <img src={service.background} alt="Service background" />
              </div>
              <div className={styles.cardContent}>
                <figure className={styles.serviceIcon}>
                  <img src={service.icon} alt={service.title} />
                </figure>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
