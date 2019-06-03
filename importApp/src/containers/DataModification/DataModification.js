import React from 'react';
import {connect} from 'react-redux';

import {groupBy, sortBy, values} from 'lodash';

import {
  Button,
} from 'design-workshop';

import {RANKED_FIELDS} from '../../constants';
import {
  showModification, 
  hideModification,
  goNextError,
  goPrevError
} from '../../redux/modules/ui';
import SummaryTable from '../../components/SummaryTable';
import ContextTable from '../../components/ContextTable';

class DataModification extends React.Component {
  
  render() {
    const {flows, schemaFeedback, isModification, modificationIndex} = this.props;
    let orderedErrors;
    if (schemaFeedback.collectedErrors) {
      const errorsList = values(schemaFeedback.collectedErrors).reduce((res, item) => {
        return res.concat(item.errors)
      },[])
      const groupedErrorsList = values(groupBy(errorsList, (v) => v.field + v.value))
                                .map((errors)=> {
                                  return {
                                    field: errors[0].field,
                                    value: errors[0].value,
                                    errors
                                  }
                                })
      orderedErrors = sortBy(groupedErrorsList, (field) => {
        return RANKED_FIELDS[field.name]
      });
    }

    const handlePrevError = () => {
      if (modificationIndex > 0) this.props.goPrevError();
    }

    const handleNextError = () => {
      if (modificationIndex < orderedErrors.length - 1) this.props.goNextError();
    }
    return (
      <div>
        {
          !isModification &&
            <div>
              {
                orderedErrors.length > 0 &&
                <div className="has-text-danger has-text-weight-bold">{orderedErrors.length} different errors need to modify</div>
              }
              {
                orderedErrors && 
                <SummaryTable groupedErrors={orderedErrors} />
              }
              <Button isColor="info" onClick={this.props.showModification}>
                Start fix error
              </Button>
            </div>
        }
        {
          isModification &&
          <div>
            <Button isColor="info" onClick={this.props.hideModification}>
              Back to summary
            </Button>
            <div className="has-text-danger has-text-weight-bold">({modificationIndex + 1}) {orderedErrors[modificationIndex].errors[0].message}</div>
            <ContextTable flows={flows} modificationItem={orderedErrors[modificationIndex]} />
            {
              modificationIndex !==0 &&
                <Button isColor="info" onClick={handlePrevError}>
                  Prev Error
                </Button>
            }
            {
              modificationIndex !== (orderedErrors.length-1) &&
              <Button isColor="info" onClick={handleNextError}>
                Next Error
              </Button>
            }
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flows: state.flows.data,
  schemaFeedback: state.schemaValidation.schemaFeedback,
  isModification: state.ui.isModification,
  modificationIndex: state.ui.modificationIndex
})

export default connect(mapStateToProps, {
  showModification,
  hideModification,
  goNextError,
  goPrevError
})(DataModification);