import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 🖐'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'shadyueh.github.io'},
    ],
    publishedAt: new Date('2022-08-07 14:41:34'),
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 🖐'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      {type: 'link', content:'shadyueh.github.io'},
    ],
    publishedAt: new Date('2022-08-05 20:37:32'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
