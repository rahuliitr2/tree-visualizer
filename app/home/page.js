import Tree from "./tree";
export default function Page() {
  let leftChild = {
    left: null,
    right: null,
    value: 10,
  };
  let rightChild = {
    left: null,
    right: null,
    value: 10,
  };
  let root = {
    left: leftChild,
    right: rightChild,
    value: 10,
  };

  let levelOrderArray = [
    [10],
    [12, 20],
    [14, 18, 22, 16],
    [14, 18, 22, 16, 21, 12, 1, 2],
    [14, 18, 22, 16, 21, 12, 1, 2, 14, 18, 22, 16, 21, 12, 1, 2],
  ];

  return (
    <>
      <h1>Tree</h1>
      <Tree levelOrderArray={levelOrderArray}></Tree>
    </>
  );
}
