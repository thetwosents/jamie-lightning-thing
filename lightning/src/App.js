import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { Tree, IconSettings } from '@salesforce/design-system-react';
import PDF from 'react-pdf-js';

const sampleNodes = {
  sampleNodesWithInitialState: [
    {
      label: 'Grains',
      type: 'item',
      id: 1,
      selected: true,
    },
    {
      label: 'Fruits',
      type: 'branch',
      id: 2,
      expanded: true,
      nodes: [
        {
          label: 'Ground Fruits',
          type: 'branch',
          id: 4,
          nodes: [
            {
              label: 'Watermelon',
              type: 'item',
              id: 12,
            },
            {
              label: 'Canteloupe',
              type: 'item',
              id: 13,
            },
            {
              label: 'Strawberries',
              type: 'item',
              id: 14,
            },
          ],
        },
        {
          label: 'Tree Fruits',
          type: 'branch',
          id: 5,
          selected: true,
          nodes: [
            {
              label: 'Peaches',
              type: 'item',
              id: 15,
            },
            {
              label: 'Pears',
              type: 'item',
              id: 16,
            },
            {
              label: 'Citrus',
              type: 'branch',
              id: 17,
              nodes: [
                {
                  label: 'Orange',
                  type: 'item',
                  id: 20,
                },
                {
                  label: 'Grapefruit',
                  type: 'item',
                  id: 21,
                },
                {
                  label: 'Lemon',
                  type: 'item',
                  id: 22,
                },
                {
                  label: 'Lime',
                  type: 'item',
                  id: 23,
                },
              ],
            },
            {
              label: 'Apples',
              type: 'branch',
              id: 18,
              nodes: [
                {
                  label: 'Granny Smith',
                  type: 'item',
                  id: 24,
                },
                {
                  label: 'Pinklady',
                  type: 'item',
                  id: 25,
                },
                {
                  label: 'Rotten',
                  type: 'item',
                  id: 26,
                },
                {
                  label: 'Jonathan',
                  type: 'item',
                  id: 27,
                },
              ],
            },
            {
              label: 'Cherries',
              type: 'branch',
              id: 19,
              nodes: [
                {
                  label: 'Balaton',
                  type: 'item',
                  id: 28,
                },
                {
                  label: 'Erdi Botermo',
                  type: 'item',
                  id: 29,
                },
                {
                  label: 'Montmorency',
                  type: 'item',
                  id: 30,
                },
                {
                  label: 'Queen Ann',
                  type: 'item',
                  id: 31,
                },
                {
                  label: 'Ulster',
                  type: 'item',
                  id: 32,
                },
                {
                  label: 'Viva',
                  type: 'item',
                  id: 33,
                },
              ],
            },
            {
              label: 'Raspberries',
              type: 'item',
              id: 6,
            },
          ],
        },
      ],
    },
    {
      label: 'Nuts',
      type: 'branch',
      id: 3,
      nodes: [
        {
          label: 'Almonds',
          type: 'item',
          id: 8,
        },
        {
          label: 'Cashews',
          type: 'item',
          id: 9,
        },
        {
          label: 'Pecans',
          type: 'item',
          id: 10,
        },
        {
          label: 'Walnuts',
          type: 'item',
          id: 11,
        },
      ],
    },
    {
      label: 'Empty folder',
      type: 'branch',
      id: 7,
      expanded: true,
    },
  ],

  sampleNodesDefault: [
    {
      label: 'Grains',
      type: 'item',
      id: 1,
    },
    {
      label: 'Fruits',
      type: 'branch',
      id: 2,
      nodes: [
        {
          label: 'Ground Fruits',
          type: 'branch',
          id: 4,
          nodes: [
            {
              label: 'Watermelon',
              type: 'item',
              id: 12,
            },
            {
              label: 'Canteloupe',
              type: 'item',
              id: 13,
            },
            {
              label: 'Strawberries',
              type: 'item',
              id: 14,
            },
          ],
        },
        {
          label: 'Tree Fruits',
          type: 'branch',
          id: 5,
          nodes: [
            {
              label: 'Peaches',
              type: 'item',
              id: 15,
            },
            {
              label: 'Pears',
              type: 'item',
              id: 16,
            },
            {
              label: 'Citrus',
              type: 'branch',
              id: 17,
              nodes: [
                {
                  label: 'Orange',
                  type: 'item',
                  id: 20,
                },
                {
                  label: 'Grapefruit',
                  type: 'item',
                  id: 21,
                },
                {
                  label: 'Lemon',
                  type: 'item',
                  id: 22,
                },
                {
                  label: 'Lime',
                  type: 'item',
                  id: 23,
                },
              ],
            },
            {
              label: 'Apples',
              type: 'branch',
              id: 18,
              nodes: [
                {
                  label: 'Granny Smith',
                  type: 'item',
                  id: 24,
                },
                {
                  label: 'Pinklady',
                  type: 'item',
                  id: 25,
                },
                {
                  label: 'Rotten',
                  type: 'item',
                  id: 26,
                },
                {
                  label: 'Jonathan',
                  type: 'item',
                  id: 27,
                },
              ],
            },
            {
              label: 'Cherries',
              type: 'branch',
              id: 19,
              nodes: [
                {
                  label: 'Balaton',
                  type: 'item',
                  id: 28,
                },
                {
                  label: 'Erdi Botermo',
                  type: 'item',
                  id: 29,
                },
                {
                  label: 'Montmorency',
                  type: 'item',
                  id: 30,
                },
                {
                  label: 'Queen Ann',
                  type: 'item',
                  id: 31,
                },
                {
                  label: 'Ulster',
                  type: 'item',
                  id: 32,
                },
                {
                  label: 'Viva',
                  type: 'item',
                  id: 33,
                },
              ],
            },
            {
              label: 'Raspberries',
              type: 'item',
              id: 6,
            },
          ],
        },
      ],
    },
    {
      label: 'Nuts',
      type: 'branch',
      id: 3,
      nodes: [
        {
          label: 'Almonds',
          type: 'item',
          id: 8,
        },
        {
          label: 'Cashews',
          type: 'item',
          id: 9,
        },
        {
          label: 'Pecans',
          type: 'item',
          id: 10,
        },
        {
          label: 'Walnuts',
          type: 'item',
          id: 11,
        },
      ],
    },
    {
      label: 'Empty folder',
      type: 'branch',
      id: 7,
    },
  ],
};



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nodes: sampleNodes.sampleNodesDefault,
      clicked: []
    }
    this.handleClick = this.handleClick.bind(this);
    
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }  

  handleClick (event, data) {
    console.log(data.node.label);
    this.setState({
      clicked: this.state.clicked.concat([data.node.label])
    })

    if (this.props.singleSelection) {
      data.node.selected = data.select;
      this.setState((prevState) => {
        if (
          this.state.selectedNode &&
          this.state.selectedNode.id !== data.node.id
        ) {
          this.state.selectedNode.selected = false;
        }
        return { selectedNode: data.node };
      });
      console.log('[handleClick branch] (event, data)', event, data);
    } else if (
      !this.props.noBranchSelection ||
      (this.props.noBranchSelection && data.node.type !== 'branch')
    ) {
      data.node.selected = data.select;
      // trigger render
      this.setState((prevState) => ({ ...prevState }));
      console.log('[handleClick] (event, data)', event, data);
    }
  }
  handleExpandClick (event, data) {
    console.log('[handleExpandClick] (event, data)', event, data);
    data.node.loading = data.expand ? true : undefined;

    setTimeout(
      (node) => {
        node.loading = false;
        this.forceUpdate();
      },
      250,
      data.node
    );
    data.node.expanded = data.expand;
  }
  handleScroll (event, data) {
    console.log('[handleScroll] (event, data)', event, data);
  }
  render() {
    const props = {
      singleSelection: true,
    }
    return (
      <div className="App">
        <Tree
            id="tree"
            heading="Miscellaneous Foods"
            nodes={this.state.nodes}
            onExpandClick={this.handleExpandClick}
            onClick={this.handleClick}
            onScroll={this.handleScroll}
          />

        <div className="window">
          <PDFList items={this.state.clicked}></PDFList>
        </div>
      </div>
    );
  }
}

class PDFList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const rows = [];
    const props = {
      items: this.props.items
    }

    props.items.map((item,index) => {
      if (props.items.length > 0) {
        rows.push(<PDFItem key={index} id={index} label={item}></PDFItem>)
      }
    })
    return (
      <div className="resource-table__list">{rows.reverse()}</div>
    )
  }
}

class PDFItem extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
  }
  onDocumentComplete (pages)  {
    this.setState({ page: 1, pages });    
  }

  onPageComplete (page) {
    var heightObj = this.refs.pdf1Blank;

    setTimeout(() => {
      console.log(heightObj.offsetHeight);
      var object = this.refs.pdf1;
      console.log(this.state.pages);
      object.style.height = heightObj.offsetHeight * this.state.pages + 'px';
      heightObj.style.display = 'none';
    },1000);
    
  }
  render() {
    const label = this.props.label;
    const key = this.props.id;
    const list = ['http://www.pdf995.com/samples/pdf.pdf','http://www.axmag.com/download/pdfurl-guide.pdf','http://www.pdf995.com/samples/pdf.pdf']
    return (
      <div>
        <div ref="pdf1Blank">
          <PDF
            file={list[key]}
            onDocumentComplete={this.onDocumentComplete}
            onPageComplete={this.onPageComplete}
          />
        </div>
        <object  ref="pdf1" data={list[key]} id="pdf" type="application/pdf" width="600px" height="100%">
           <p><b>Example fallback content</b>: This browser does not support PDFs. Please download the PDF to view it: <a href="/pdf/sample-3pp.pdf">Download PDF</a>.</p>
        </object>
      </div>
    )
  }
}

App.propTypes = {
  exampleNodesIndex: PropTypes.string,
  noBranchSelection: PropTypes.bool,
  searchTerm: PropTypes.string,
  searchable: PropTypes.bool,
  singleSelection: PropTypes.bool
}

export default App;
