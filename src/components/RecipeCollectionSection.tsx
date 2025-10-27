import styles from "./styles/RecipeCollectionSection.module.scss";

export default function RecipeCollectionSection() {
  return (
    <section id="ninjas" className={styles.recipeRoot}>
      <div className={`container ${styles.recipeContainer}`}>
        <div
          className={`d-grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 sm:gap-10 ${styles.recipeGrid}`}
        >
          <div
            className={`${styles.recipeLeft} d-flex items-center justify-start md:justify-center`}
          >
            <figure className={styles.recipeFigure}>
              <img
                src="/Images/dishPhoto/showCaseDish_2.png"
                alt="Gourmet dish showcase"
              />
            </figure>
          </div>
          <div
            className={`${styles.recipeRight} d-flex flex-column items-center md:items-start`}
          >
            <h2 className={styles.recipeHeading}>
              Explore Our Recipe Collection
            </h2>
            <p className={styles.recipeDescription}>
              Discover mouthwatering dishes from around the world. From healthy
              breakfasts to gourmet dinners, we have recipes for every taste and
              occasion. Join thousands of home cooks who have transformed their
              kitchen with our carefully curated collection.
            </p>
            <button className={`${styles.recipeCtaButton} btn btn-primary`}>
              View Recipes
              <figure>
                <img src="/Images/Expand_right_double.png" alt="Arrow" />
              </figure>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
