import styles from './DisplayComponent.module.scss'

const DisplayComponent = ({ time }) => {
  const milliseconds = time % 1000;
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor((time / 1000 / 60 / 60) % 24);

  return (
    <div className={styles.displayComponent}>
      <span>{(hours >= 10) ? hours : "0" + hours}</span>&nbsp;:&nbsp;
      <span>{(minutes >= 10) ? minutes : "0" + minutes}</span>&nbsp;:&nbsp;
      <span>{(seconds >= 10) ? seconds : "0" + seconds}</span>&nbsp;.&nbsp;
      <span>{milliseconds}</span>
    </div>
  );
}

export default DisplayComponent;