const Share = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <h1>WE’VE TOLD YOU ABOUT US. TELL US YOUR STORY . . .</h1>
        <div>
          <p>
            Do you have a positive, entertaining, sad, encouraging, or critical
            story to share? A story that can impact someone else?
          </p>
          <p>Share Your Story with the Finding Me Community.</p>
          <p>
            We all have our own preferences and style for sharing pieces of
            ourselves with those around us. At Finding Me, we encourage each
            individual to self-express in their most authentic voice.
          </p>
          <p>
            Submit your original story, poetry, personal stories, photography,
            drawing/illustrations, non-fiction or fiction.
          </p>
        </div>
      </div>
      <div>
        <form>
          <button>Choose a category</button>
          <textarea placeholder="Write or paste your story here" className="" />
          <input type="button" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Share;
