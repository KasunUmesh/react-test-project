function Article(): JSX.Element {
  return(
    <section className={"my-5 mx-5 min-h-[70vh]"}>
      
      {/*title*/}
      <div className={"text-4xl font-bold text-center"}>Title</div>

      {/*content*/}
      <div className={"mt-5 no-more-tailwind"}>
        <h1>Welcome to typescript</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam ipsa unde veritatis distinctio dolore odio vel suscipit aspernatur! Commodi ea ratione doloremque blanditiis, magnam illo reprehenderit reiciendis facere amet.</p>

        <ol>
          <li>java</li>
          <li>javascript</li>
          <li>perl</li>
          <li>Go</li>
        </ol>
      </div>

    </section>
  )
}

export default Article;