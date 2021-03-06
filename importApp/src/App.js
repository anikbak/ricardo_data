/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux'

import DataModification from './containers/DataModification';
import DataPublish from './containers/DataPublish';
import FileUpload from './containers/FileUpload';


import SchemaValidation from './containers/SchemaValidation';
import Layout from './containers/Layout';

import {downloadFlow} from './utils/fileExporter';

import styles from 'design-workshop/themes/default/style.css';
import './App.css';

import { 
  setStep,
  showModal,
  hideModal
} from './redux/modules/ui';

import LeaveModificationModal from './components/LeaveModificationModal';

const App = ({
  steps,
  isModalDisplay,
  selectedStep,
  repoData,
  flows,
  referenceTables,
  originalLength,
  modificationList,
  //actions
  setStep,
  showModal,
  hideModal
}) => {

  const renderChildren = () => {
    switch(selectedStep.id) {
      case '0':
      default:
        return <FileUpload />;
      case '1':
        return <SchemaValidation />;
      case '2':
        return <DataModification />;
      case '3':
        return <DataPublish />;
    }
  }
  const handleExport = () => {
    const {file, data} = flows;
    downloadFlow(data, `${file.name}_ongoing_corrections`, 'csv')
  }

  const handleSetStep = (step) => {
    const {remoteUpdateStatus} = repoData;
    let fixed
    if (modificationList) {
      fixed = modificationList.filter((item) => item.fixed)
    }
    if(fixed && step.id === '0' && remoteUpdateStatus !== 'updated') showModal();
    else setStep(step)
  }

  const handleDiscard = () => {
    setStep(steps[0]);
  }
  
  return (
    <div className="App">
      <Layout 
        steps={steps}
        selectedStep={selectedStep}
        onSetStep={handleSetStep}>
        {renderChildren()}
      </Layout>
      <LeaveModificationModal
        referenceTables={referenceTables}
        originalLength={originalLength}
        isActive={isModalDisplay}
        onSelectDiscard={handleDiscard}
        onSelectDownload={handleExport}
        closeModal={hideModal} />
    </div>
  );
}


const mapStateToProps = state => ({
  steps: state.ui.steps,
  isModalDisplay: state.ui.isModalDisplay,
  flows: state.flows,
  referenceTables: state.referenceTables.referenceTables,
  originalLength: state.referenceTables.originalLength,
  selectedStep: state.ui.selectedStep,
  modificationList: state.modification.modificationList,
  repoData: state.repoData
 })
 
 export default connect(mapStateToProps, {
  showModal,
  hideModal,
  setStep
 })(App);
