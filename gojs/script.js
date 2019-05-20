let c = console.log;
let $ = go.GraphObject.make;

//Ctrl c & ctrl v --» ✔, por defecto
let myDiagram = $(go.Diagram, 'myDiagramDiv', {
  'undoManager.isEnabled': true,
  // if (true) ctrl Z y ctrl Y --» ✔ , no funciona cuando se avanza en conjunto.
  layout: $(go.TreeLayout, {
    angle: 90, layerSpacing: 35
  })
  // Con esto puede repetirse lo graficos dependiendo de los parents. ...(a)
});

myDiagram.nodeTemplate = $(go.Node, 'Horizontal', { 
  background: 'white'
}, 
  $(go.Picture, { 
    margin: 10, width: 50, height: 50, background: '#343d46' 
  }, new go.Binding('source', 'src')), 
  $(go.TextBlock, 'Default Text', {
    margin: 12, stroke: '#343d46', font: 'bold 16px sans-serif'
  }, new go.Binding('text', 'name')),

);

myDiagram.linkTemplate = $(go.Link, {
  routing: go.Link.Orthogonal, corner: 5 },
  $(go.Shape, { strokeWidth: 3, stroke: '#fff' })
);



let myModel = $(go.TreeModel);
//En el modelos de datos, cada nodo es representado por un Objeto Javascript

myModel.nodeDataArray = [
  { key: '1', parent: '', name: 'Facebook', src: './assets/icons/facebook.asset.icon.svg' },
  { key: '2', parent: '1', name: 'Instagram', src: './assets/icons/instagram.asset.icon.svg' },
  { key: '3', parent: '1', name: 'LinkedIn', src: './assets/icons/linkedin.asset.icon.svg' },
  { key: '4', parent: '3', name: 'Twiter', src: './assets/icons/twiter.asset.icon.svg' },
  { key: '5', parent: '3', name: 'Other1' },
  { key: '6', parent: '2', name: 'Other2' },
  
];

myDiagram.model = myModel;





//src: funciona para mayuscular y minusculas

c('myDiagram.model', myDiagram.model);
c('$', $);
c('go', go);
c('myDiagram', myDiagram);
c('myModel', myModel);
c('go.Node', go.Node);
c('go.TextBlock', go.TextBlock);
c('new go.Binding', new go.Binding);
c('new go.Binding(text, key)', new go.Binding('text', 'key'));

// myDiagram.nodeTemplate = $(
//   go.Node, $(
//     go.TextBlock,
//     // TextBlock.text esta vinculado a Node.data.key
//     new go.Binding('text', 'key') 
//   )
// );

// myDiagram.nodeTemplate = $(
//   go.Node, 'Vertical', {
//     locationSpot: go.Spot.Center
//   }, 
//   new go.Binding('location', 'loc'), $(
//     go.Shape, 'RoundedRectangle', { },
//   new go.Binding('figure', 'fig')
//     ), $(
//       go.TextBlock, 'default text', { }, 
//       new go.Binding('text', 'key'))
// );


//(a) myDiagram.layout = $(go.TreeLayout, {
//   angle: 90, layerSpacing: 35
// });