import styles from './landing.module.css'
import { assets } from '../../assets/assets'

export default function Landing() {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.hero}>
                    <img src={assets.svg} alt="svg" />
                    <div className={styles.heroContent}>
                        <h1>Build advanced chatbots visually</h1>
                        <p className={styles.description}>Typebot gives you powerful blocks to create unique chat experiences. Embed them anywhere on your web/mobile apps and start collecting results like magic.</p>
                        <button className={styles.primarybtn}>Create a FormBot for free</button>
                    </div>
                    <img src={assets.semicircle} alt="semicircle" />
                </div>
            </div>
            <div className={styles.container}>
                <img src={assets.figure} alt="figure" />
            </div>
        </div>
    )
}