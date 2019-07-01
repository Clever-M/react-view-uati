import React, {Component} from 'react';
import {withRouter} from 'react-router';
import httpHandler from '../services/httpHandler'
//import fileUploadCSV from './../services/UploadFileService';

class ImportCsv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName:'',
    };
  }

  handleFile(e) {
    let file = e.target.files[0];
    console.log(file)
    this.setState({file: file, fileName:file.name});
  }

  handleUpload = (e) => {
    e.preventDefault();
     httpHandler.uploadCsv(this.state.file);
  }

  render = () => (
    <div className="container">
        <h4>File chosen: {this.state.fileName}</h4>
        <form>
          <div className="">
            <label>Selecione o arquivo</label>
            <input type="file" value = '' name="uploadfile" onChange={e => this.handleFile(e)} />

            <button type="submit" onClick={ (e) => this.handleUpload(e) }>
              Upload
            </button>
          </div>
        </form>
    </div>
  );
}
export default withRouter(ImportCsv);