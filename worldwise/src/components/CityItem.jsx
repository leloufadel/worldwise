

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

export default function CityItem({ city }) {
 const { cityName, emoji, date, id} = city;

    return (
        
        
        <li >
            <link className={styles.cityItem} to={`${id}`}>
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.name}>{cityName}</h3>
          <time className={styles.date}>({formatDate(date)})</time>
          <button className={styles.deleteBtn}>
            &times;
          </button>
          </link>
      </li>
  );
}
