import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Temukan credit card yang lebih baik <br className="sm:block hidden" /> tanpa ribet 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Terdapat banyak jenis-jenis kartu kredit yang tersedia di seluruh dunia.
      Kamu bisa memilih dan miiki kartu kredit yang sesuai dengan keinginan dan kebutuhan.
      yang jelas jangan pake FlashBank 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;