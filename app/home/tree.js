import styles from "./styles.module.css";
import NodeWithArrows from "./nodeWithArrows";

export default function Tree(props) {
  let levelOrderArray = props.levelOrderArray;
  let n = levelOrderArray.length;

  let oneBoxSize = 100; // size of one node element including margins.
  let nodeRadius = 0.3; //radius of node element circle.
  let width = `${oneBoxSize * Math.pow(2, n - 1)}px`; // width of the last level of tree

  const geomatryCalculations = (index) => {
    let verticalGap = 1; // in terms of boxes.
    let horizontalGap;
    if (index >= n - 2) {
      horizontalGap = 1 / 2;
    } else {
      horizontalGap = Math.pow(2, n - 3 - index); // refer redme file for the formulas.
    }

    let angle = Math.atan(horizontalGap / verticalGap);
    let height = 1 - 2 * nodeRadius * Math.cos(angle);
    horizontalGap = horizontalGap - 2 * nodeRadius * Math.sin(angle);

    let leftRightDisplacement =
      horizontalGap - 0.2 - (nodeRadius - nodeRadius * Math.sin(angle));
    let arrowLen = Math.pow(
      horizontalGap * horizontalGap + height * height,
      0.5
    );

    leftRightDisplacement *= oneBoxSize;
    horizontalGap *= oneBoxSize;
    arrowLen *= oneBoxSize;
    height *= oneBoxSize;
    angle = (angle * 180) / 3.14;

    let calculationObj = {
      horizontalGap,
      angle,
      height,
      leftRightDisplacement,
      arrowLen,
    };

    return calculationObj;
  };
  const printArr = (ele, i) => {
    let calculationObj = geomatryCalculations(i);

    let res = [];
    for (let x of ele) {
      res.push(
        <NodeWithArrows
          currentIndex={i}
          calculationObj={calculationObj}
          nodeValue={x}
          n={n}
        ></NodeWithArrows>
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
  return <div className={styles.dashboard}>{print2DArr(levelOrderArray)}</div>;
}
