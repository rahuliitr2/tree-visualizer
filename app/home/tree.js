import styles from "./styles.module.css";

export default function Tree(props) {
  let root = [
    [10],
    [12, 20],
    [14, 18, 22, 16],
    [14, 18, 22, 16, 21, 12, 1, 2],
    [14, 18, 22, 16, 21, 12, 1, 2, 14, 18, 22, 16, 21, 12, 1, 2],
  ];
  let n = root.length;
  let oneBoxSize = 100;
  let nodeRadius = 0.3;
  let width = `${oneBoxSize * Math.pow(2, n - 1)}px`;

  const geomatryCalculations = (index) => {
    let verticalGap = 1; // in terms of boxes.
    let horizontalGap;
    if (index >= n - 2) {
      horizontalGap = 1 / 2;
    } else {
      horizontalGap = Math.pow(2, n - 3 - index);
    }
    let angle = Math.atan(horizontalGap / verticalGap);

    let size =
      Math.pow(horizontalGap * horizontalGap + verticalGap * verticalGap, 0.5) -
      2 * nodeRadius;
    let bottom = verticalGap / 2;
    let left = horizontalGap / 4;

    let height = 1 - 2 * nodeRadius * Math.cos(angle);
    horizontalGap = horizontalGap - 2 * nodeRadius * Math.sin(angle);
    let t = horizontalGap - 0.2 - (nodeRadius - nodeRadius * Math.sin(angle));
    t *= oneBoxSize;
    horizontalGap *= oneBoxSize;

    height *= oneBoxSize;
    size *= oneBoxSize;
    bottom *= oneBoxSize;
    left *= oneBoxSize;
    angle = (angle * 180) / 3.14;

    let arrowLen = Math.pow(
      horizontalGap * horizontalGap + height * height,
      0.5
    );

    return { horizontalGap, angle, size, left, bottom, height, t, arrowLen };
  };
  const printArr = (ele, i) => {
    let { horizontalGap, angle, size, left, bottom, height, t, arrowLen } =
      geomatryCalculations(i);

    let res = [];
    for (let x of ele) {
      res.push(
        <div
          style={{
            height: "100px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {i != n - 1 && (
            <div
              style={{
                position: "absolute",
                width: horizontalGap,
                height: height,
                bottom: (-1 / 2) * height,
                left: -1 * t,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  className={styles.line}
                  style={{
                    width: `${arrowLen}px`,
                    transform: `rotate(-${90 - angle}deg)`,
                  }}
                ></div>
              </div>
            </div>
          )}
          <div className={styles.rowEle}>{x}</div>
          {i != n - 1 && (
            <div
              style={{
                position: "absolute",
                width: horizontalGap,
                height: height,
                bottom: (-1 / 2) * height,
                right: -1 * t,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  className={styles.lineRight}
                  style={{
                    width: `${arrowLen}px`,
                    transform: `rotate(${90 - angle}deg)`,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      );
    }
    return res;
  };
  const print2DArr = (root) => {
    let res = [];
    for (let i = 0; i < root.length; i++) {
      res.push(
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: width,
          }}
        >
          {printArr(root[i], i)}
        </div>
      );
    }
    return res;
  };
  return <div className={styles.dashboard}>{print2DArr(root)}</div>;
}
