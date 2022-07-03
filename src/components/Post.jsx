import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/shadyueh.png"
          />
          <div className={styles.authorInfo}>
            <strong>Shadow Yueh</strong>
            <span>Shadow Bringer</span>
          </div>
        </div>

        <time title="1 de Julho às 21:03h" dateTime="2022-07-01 21:03:45">
          Publicado há 1d
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>
          👋 Acabei de subir mais um projeto no meu portifa. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
