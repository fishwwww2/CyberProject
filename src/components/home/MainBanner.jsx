import styles from "./MainBanner.module.css";

const MainBanner = () => {
  return (
    <section>
      <div className={styles.heroBanner}>
        <div className={styles.heroText}>
          <span>Pro. Beyond.</span>
          <h1 className={styles.heroTitle}>
            iPhone 14 <strong>Pro</strong>
          </h1>
          <p className={styles.heroDesc}>
            Created to change everything for the better.
          </p>
          <button className={styles.heroButton}>Shop Now</button>
        </div>

        <div className={styles.heroImage}>Image</div>
      </div>

      <div className={styles.subBannerGrid}>
        {/* PS5 */}
        <div className={styles.subBanner}>
          <h3 className={styles.subBannerTitle}>Playstation 5</h3>
          <p className={styles.subBannerDesc}>
            Incredibly powerful CPUs, GPUs, and an SSD.
          </p>
        </div>

        {/* AirPods */}
        <div className={styles.subBanner}>
          <h3 className={styles.subBannerTitle}>Apple AirPods Max</h3>
          <p className={styles.subBannerDesc}>
            Computational audio. Listen, it’s powerful.
          </p>
        </div>

        {/* MacBook */}
        <div className={styles.subBanner}>
          <h3 className={styles.subBannerTitle}>
            MacBook <strong>Air</strong>
          </h3>
          <p className={styles.subBannerDesc}>
            The new 15-inch MacBook Air with M2 chip.
          </p>
          <button className={styles.heroButton}>Shop Now</button>
        </div>
      </div>

    </section>
  );
};

export default MainBanner;
