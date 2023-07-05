import styles from './DisplayComponent.module.scss'

const DisplayComponent = props => {
  return (
    <div className={styles.displayComponent}>
      <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>&nbsp;:&nbsp;
      <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
      <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp;.&nbsp;
      <span>{props.time.ms}</span>
    </div>
  );
}

export default DisplayComponent;