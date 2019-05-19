let mxBasePath = '../node_modules/mxgraph/javascript';

// let mxgraph = require('mxgraph')({
//   mxImageBasePath: './src/images',
//   mxBasePath: './src'
// });

// console.log('mxgraph', mxgraph);

//container- nodo DOM que contendrá el gráfico. Esto se llama en el bodyOnload.
function main() {
  if (!mxClient.isBrowserSupported()) {
    mxUtils.error('Browser is not supported!', 200, false);
  } else {
    console.log('Ahora Puedes Usar MxGraph');


    let container = document.getElementById('graph');

    let config = mxUtils.load('editors/config/keyhandler-commons.xml').getDocumentElement();
    console.log('config', config);


    //Esta ruta esta especificada, por el mismo mxgraph, otra ruta de xml no se puede renderizar. cuando es otro formato de archivo te manda un html de error.

    let object = new Object();
    object.myBool = true;
    object.myObject = new Object();
    object.myObject.name = 'Test';
    object.myArray = ['a', ['b', 'c'], 'd'];


    let encoder = new mxCodec();
    let node = encoder.encode(object);
    let getXml = mxUtils.getXml(node);
    console.log('object', object);
    console.log('getXml', getXml);
    console.log('encoder', encoder);

    let editor = new mxEditor(config);
    console.log('editor', editor);

    let data = editor.writeGraphModel();
    console.log('data', data);
    editor.readGraphModel(mxUtils.parseXml(data));


    let root = new mxCell();
    root.insert(new mxCell());

    let model = new mxGraphModel(root);
    let graph = new mxGraph(container, model);
    //El segundo argumento es opcional.


    mxGraph.prototype.getImage = function (state) {
      if (state != null && state.style != null) {
        return state.style[mxConstants.STYLE_IMAGE];
      }
      return null;
    }

    let vertexStyle = graph.getStylesheet().getDefaultVertexStyle();
    vertexStyle[mxConstants.ROUNDED] = true;

    console.log('graph', graph);
    console.log('root', root);
    console.log('model', model);
    console.log('vertexStyle', vertexStyle);


    let edgeStyle = graph.getStylesheet().getDefaultEdgeStyle();
    edgeStyle[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom;

    // graph.setEnabled(false); deshabilita controles.

    let parent = graph.getDefaultParent();

    model.beginUpdate();
    try {
      let v1 = graph.insertVertex(parent, null, 'Hello', 20, 20, 80, 30, 'rounded;strokeColor=white;fontColor=white;fillColor=rgba(76,76,76,0.5);');

      // Esto para todos en general.
      // vertexStyle.fillColor = '#0275d8';
      // vertexStyle.fontColor = 'white';
      console.log('v1', v1);

      let v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
      let e1 = graph.insertEdge(parent, null, '', v1, v2);
    } finally {
      // Actualizar la vista
      model.endUpdate();
    }

  }
}