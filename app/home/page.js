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

  return (
    <>
      <h1>Tree</h1>
      <Tree root={root}></Tree>
    </>
  );
}
