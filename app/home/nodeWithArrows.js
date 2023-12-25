import styles from "./styles.module.css";
export default function NodeWithArrows(props) {
  let currentIndex = props.currentIndex;
  let nodeValue = props.nodeValue;
  let calculationObj = props.calculationObj;
  let n = props.n;

  return (
    <div className={styles.box}>
      {currentIndex != n - 1 && (
        <div
          style={{
            position: "absolute",
            width: calculationObj.horizontalGap,
            height: calculationObj.height,
            bottom: (-1 / 2) * calculationObj.height,
            left: -1 * calculationObj.leftRightDisplacement,
          }}
        >
          <div className={styles.boxForArrow}>
            <div
              className={styles.line}
              style={{
                width: `${calculationObj.arrowLen}px`,
                transform: `rotate(-${90 - calculationObj.angle}deg)`,
              }}
            ></div>
          </div>
        </div>
      )}
      <div className={styles.rowEle}>{nodeValue}</div>
      {currentIndex != n - 1 && (
        <div
          style={{
            position: "absolute",
            width: calculationObj.horizontalGap,
            height: calculationObj.height,
            bottom: (-1 / 2) * calculationObj.height,
            right: -1 * calculationObj.leftRightDisplacement,
          }}
        >
          <div className={styles.boxForArrow}>
            <div
              className={styles.lineRight}
              style={{
                width: `${calculationObj.arrowLen}px`,
                transform: `rotate(${90 - calculationObj.angle}deg)`,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
