import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?cs=srgb&dl=pexels-pixabay-270366.jpg&fm=jpg&h=359&w=500&fit=crop"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/shadyueh.png" />
        <strong>Shadow Yueh</strong>
        <span>Shadow Bringer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
