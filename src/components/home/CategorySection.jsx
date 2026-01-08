import styles from "./CategorySection.module.css";
import {
  DevicePhoneMobileIcon,
  HomeModernIcon,
  ShoppingBagIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";


const categories = [
  {
    id: 1,
    label: "Electronics",
    icon: <DevicePhoneMobileIcon />,
  },
  {
    id: 2,
    label: "Furniture",
    icon: <HomeModernIcon />,
  },
  {
    id: 3,
    label: "Shoes",
    icon: <ShoppingBagIcon />,
  },
  {
    id: 4,
    label: "준비중",
    icon: <ClockIcon />,
  },
  {
    id: 5,
    label: "준비중",
    icon: <ClockIcon />,
  },
  {
    id: 6,
    label: "준비중",
    icon: <ClockIcon />,
  },
];

const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.title}>Browse By Category</h2>

      <div className={styles.categoryGrid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryCard}>
            <div className={styles.icon}>{category.icon}</div>
            <span className={styles.label}>{category.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
