import classes from "../styles/Video.module.css";

export default function Video({ title, id, noq }) {
  return (
    <div className={classes.video}>
      <img
        src={`https://xp.io/storage/${id}.png`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}

// http://img.youtube.com/vi/${id}/maxresdefault.jpg

// https://xp.io/storage/${id}.png