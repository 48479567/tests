let c = console.log;
let $ = go.GraphObject.make;
let myDiagram = $(go.Diagram, 'myDiagramDiv', {
  'undoManager.isEnabled': true
});

myDiagram.nodeTemplate = $(go.Node, 'Auto',
  $(go.Shape, 'Rectangle',
    new go.Binding('fill', 'color')),
  $(go.TextBlock, {
    margin: 6, font: '18px sans-serif'
  }, new go.Binding('text', 'key')),

);

myDiagram.model = new go.GraphLinksModel([
  { key: 'Alpha', color: 'lightblue' },
  { key: 'Beta', color: 'orange' },
  { key: 'Gamma', color: 'lightgreen' },
  { key: 'Delta', color: 'pink' },
]);

let node = myDiagram.findNodeForKey('Alpha');
myDiagram.select(node);
console.log(node.data.key);
// Para la seleccion grafica es case sensitive. en todo