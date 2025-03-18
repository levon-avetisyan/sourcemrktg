import React, { useState } from 'react';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import useSubmitReport from '../../../../hooks/useSubmitReport.ts';
import './ReportForm.scss';
import { groupFieldsByCategory, renderField, renderLabelWithTooltip } from './RenderFormFields.tsx';
import {
  inspectionOutcomeOptions,
  negativeOutComeReasons,
  outcomeOptions,
  progressFormFields,
} from '../../constants.ts';
import { toast } from 'react-toastify';

import { IFormData, IFormField } from '../../interfaces.ts';
import { IReportState } from './interfaces.ts';
import CurrencyInput from '../CurrencyInput.tsx';

const ReportForm = () => {
  const { submit, loading } = useSubmitReport();

  const [form] = Form.useForm();

  const [state, setState] = useState<IReportState>({
    additionalRows: {
      inspectionsScheduled: [],
      companyLeadsReceived: [],
    },
    showAppointmentsScheduled: false,
  });

  const { showAppointmentsScheduled } = state;

  const handleAdditionalRowsChange = (name: string, value: number) => {
    if (name === 'doorsKnocked') {
      setState({ ...state, showAppointmentsScheduled: value > 0 });
    } else {
      setState((prev: any) => {
        const additionalRows = { ...prev.additionalRows };

        if (value === 0) {
          delete additionalRows[name];
        } else {
          additionalRows[name] = [...Array.from({ length: value }).map(() => ({}))];
        }

        return { ...prev, additionalRows };
      });
    }
  };

  const expandableFormField = (field: IFormField) => {
    const { name } = field;
    return (
      <>
        <Form.Item
          name={name}
          label={renderLabelWithTooltip(field.label, field.tooltip)}
          rules={[{ required: field.required, message: 'This field is required' }]}
        >
          <Select
            onChange={(value: number) => handleAdditionalRowsChange(name, value)}
            placeholder={field.placeholder}
          >
            {field.options.map((option: number) => (
              <Select.Option key={`${name}-${option}`} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        {renderAdditionalRows(field)}
      </>
    );
  };

  const resetFormInput = (name: string, inputName: string, index: number | string) => {
    const entry = `${inputName}_${name}_${index}`;
    form.resetFields([entry]);
    form.setFieldValue(entry, undefined);
  };

  const handleSelectInputChange = (
    name: string,
    value: number | string,
    inputName: string,
    index: number
  ) => {
    setState((prevState) => {
      // Create a copy of the existing rows to avoid mutating state directly
      let updatedRows = [...(prevState.additionalRows[name] || [])];

      // If inputName is not provided, reset the additionalRows for the given name
      if (!inputName) {
        return {
          ...prevState,
          additionalRows: {
            ...prevState.additionalRows,
            [name]: [],
          },
        };
      }

      // Ensure the specific index exists in the array before updating
      if (!updatedRows[index]) {
        updatedRows[index] = {};
      }

      // Update the specific input field with the given value
      updatedRows[index] = {
        ...updatedRows[index],
        [inputName]: value,
      };

      // Helper function to remove a field from the object and reset the form input
      const removeField = (field: string) => {
        const { [field]: _, ...rest } = updatedRows[index];
        updatedRows[index] = rest;
        resetFormInput(name, field, index);
      };

      // If appointmentOutcome is changed and it's not 'completedInspection', remove inspectionOutcome
      if (
        inputName === 'appointmentOutcome' &&
        updatedRows[index].inspectionOutcome &&
        value !== 'completedInspection'
      ) {
        removeField('inspectionOutcome');
      }

      // Handle specific logic based on inspectionOutcome
      if (inputName === 'inspectionOutcome') {
        if (value === 'notClosed') {
          // Reset closedOption and remove installDate if inspection is not closed
          resetFormInput(name, 'closedOption', index);
          if (updatedRows[index].installDate) {
            removeField('installDate');
          }
        } else if (value === 'closed') {
          // Remove negative outcome reason fields when inspection is closed
          removeField('negativeOutcomeReason');
          removeField('otherReasonNegativeOutcome');
        }
      }

      // If negativeOutcomeReason is not 'other-${name}', reset otherReasonNegativeOutcome
      if (inputName === 'negativeOutcomeReason' && value !== `other-${name}`) {
        removeField('otherReasonNegativeOutcome');
      }

      // If closedOption is not 'scheduledInstallDate', remove installDate field
      if (inputName === 'closedOption' && value !== 'scheduledInstallDate') {
        removeField('installDate');
      }

      // If appointmentOutcome is not 'scheduledInspection', remove otherReasonNegativeOutcome if it exists
      if (
        inputName === 'appointmentOutcome' &&
        value !== 'scheduledInspection' &&
        updatedRows[index].otherReasonNegativeOutcome
      ) {
        removeField('otherReasonNegativeOutcome');
      }

      // If appointmentOutcome is not 'scheduledInspection', remove installDate if it exists
      if (
        inputName === 'appointmentOutcome' &&
        value !== 'scheduledInspection' &&
        updatedRows[index].installDate
      ) {
        removeField('installDate');
      }

      // Update state with the modified additionalRows
      return {
        ...prevState,
        additionalRows: {
          ...prevState.additionalRows,
          [name]: updatedRows,
        },
      };
    });
  };

  const renderAdditionalRows = (field: IFormField) => {
    const { name } = field;
    const { additionalRows } = state;
    const length = additionalRows[name]?.length || 0;
    return Array.from({ length }).map((_, index) => renderSingleRow(field, index));
  };

  const renderSingleRow = (field: IFormField, index: number) => {
    const { name } = field;
    const row = state.additionalRows[name]?.[index] || {};

    return (
      <Card
        key={index}
        style={{
          backgroundColor: '#fffbe6',
          borderColor: '#ffd666',
          marginBottom: '12px',
          marginTop: '12px',
        }}
      >
        {/* Customer ID + Customer Name + Outcome */}
        <Row gutter={[12, 12]} style={{ marginBottom: '12px' }}>
          {name !== 'inspectionsScheduled' && (
            <Col xs={24} lg={12}>
              <Form.Item
                name={`customerId_${name}_${index}`}
                label="Customer ID"
                rules={[{ required: true, message: 'This field is required' }]}
                style={{ marginBottom: 0 }}
              >
                <Input placeholder="Customer ID" />
              </Form.Item>
            </Col>
          )}
          <Col xs={24} lg={12}>
            <Form.Item
              name={`customerName_${name}_${index}`}
              label="Customer's Full Name"
              rules={[{ required: true, message: 'This field is required' }]}
              style={{ marginBottom: 0 }}
            >
              <Input placeholder="First name & last name" />
            </Form.Item>
          </Col>
        </Row>

        <Row style={{ marginBottom: '12px' }}>
          <Col xs={24} lg={24}>
            <Form.Item
              name={`appointmentOutcome_${name}_${index}`}
              label="Outcome of the appointment"
              rules={[{ required: true, message: 'This field is required' }]}
              style={{ marginBottom: 0 }}
            >
              <Select
                placeholder="Select the outcome of the appointment"
                onChange={(value: string) => {
                  handleSelectInputChange(name, value, 'appointmentOutcome', index);
                }}
              >
                {outcomeOptions.map((option) => (
                  <Select.Option key={`${name}-${option.value}`} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Show Inspection Outcome */}
        {row.appointmentOutcome === 'completedInspection' && (
          <Row style={{ marginBottom: '12px' }}>
            <Col xs={24}>
              <Form.Item
                name={`inspectionOutcome_${name}_${index}`}
                label="Outcome of the inspection"
                rules={[{ required: true, message: 'This field is required' }]}
                style={{ marginBottom: 0 }}
              >
                <Select
                  placeholder="Select the outcome of the inspection"
                  onChange={(value: string) =>
                    handleSelectInputChange(name, value, 'inspectionOutcome', index)
                  }
                >
                  {inspectionOutcomeOptions.map((option) => (
                    <Select.Option key={`${name}-${option.value}`} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        )}

        {/* Show Closed Fields */}
        {row.inspectionOutcome === 'closed' && (
          <>
            <Row style={{ marginBottom: '12px' }} gutter={{ xs: 12, lg: 24 }}>
              <Col xs={24} lg={12}>
                <Form.Item
                  name={`initialInstallCharged_${name}_${index}`}
                  label="Initial Install Charged"
                  rules={[{ required: true, message: 'This field is required' }]}
                  style={{ marginBottom: 0 }}
                >
                  <CurrencyInput
                    value={form.getFieldValue(`initialInstallCharged_${name}_${index}`)}
                    onChange={(value: any) =>
                      form.setFieldsValue({ [`initialInstallCharged_${name}_${index}`]: value })
                    }
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <Form.Item
                  name={`monthlyRecurringPayment_${name}_${index}`}
                  label="Monthly Recurring Payment"
                  rules={[{ required: true, message: 'This field is required' }]}
                  style={{ marginBottom: 0 }}
                >
                  <CurrencyInput
                    value={form.getFieldValue(`monthlyRecurringPayment_${name}_${index}`)}
                    onChange={(value: any) =>
                      form.setFieldsValue({ [`monthlyRecurringPayment_${name}_${index}`]: value })
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ marginBottom: '12px' }} gutter={{ xs: 12, lg: 24 }}>
              <Col xs={24} lg={24}>
                <Form.Item
                  name={`installDate_${name}_${index}`}
                  label="Installation Date"
                  rules={[{ required: true, message: 'This field is required' }]}
                  style={{ marginBottom: 0 }}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    placeholder="Select the installation date"
                    format="MM/DD/YYYY"
                    onChange={(_, dateString) =>
                      handleSelectInputChange(
                        name,
                        Array.isArray(dateString) ? dateString.join(', ') : dateString,
                        'installDate',
                        index
                      )
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}

        {/* Show Not Closed Fields */}
        {row.inspectionOutcome === 'notClosed' && (
          <Row style={{ marginBottom: '12px' }}>
            <Col xs={24} lg={24}>
              <Form.Item
                name={`negativeOutcomeReason_${name}_${index}`}
                label="Reason of the negative outcome"
                rules={[{ required: true, message: 'This field is required' }]}
                style={{ marginBottom: 0 }}
              >
                <Select
                  placeholder="Select reason of the negative outcome"
                  onChange={(value: string) =>
                    handleSelectInputChange(name, value, 'negativeOutcomeReason', index)
                  }
                >
                  {negativeOutComeReasons.map((option) => (
                    <Select.Option key={`${name}-${option.value}`} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                  <Select.Option key={`other-${name}`} value="other">
                    Other (please specify the reason)
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        )}

        {/* Show Other Reason Input */}
        {row.negativeOutcomeReason === 'other' && (
          <Row style={{ marginBottom: '12px' }}>
            <Col xs={24} lg={24}>
              <Form.Item
                name={`otherReasonNegativeOutcome_${name}_${index}`}
                label="Other Reason"
                rules={[{ required: true, message: 'This field is required' }]}
                style={{ marginBottom: 0 }}
              >
                <Input placeholder="Enter other reason" />
              </Form.Item>
            </Col>
          </Row>
        )}
        {/* Additional Notes */}
        <Row gutter={[12, 12]} style={{ marginBottom: '12px' }}>
          <Col xs={24}>
            <Form.Item
              name={`additionalNotes_${name}_${index}`}
              label="Additional Notes"
              style={{ marginBottom: 0 }}
            >
              <Input.TextArea placeholder="Additional notes" />
            </Form.Item>
          </Col>
        </Row>
      </Card>
    );
  };

  const groupedFields = groupFieldsByCategory(progressFormFields);

  const onFinishFailed = () => {
    toast.error('Missing required fields. Please fill out all required fields.');
  };

  const onFinish = async (formData: IFormData) => {
    console.log('formData: ', formData);
    const response = await submit(formData);
    if (response.status === 201) {
      toast.success('Thank you. Your report has been submitted.');

      // // Reset the form fields
      // form.resetFields();
      //
      // // Reset state to its initial value
      // setState({
      //   additionalRows: {
      //     inspectionsScheduled: [],
      //     companyLeadsReceived: [],
      //   },
      //   showAppointmentsScheduled: false,
      // });
    }
  };

  return (
    <div className="form-wrapper">
      <Form
        form={form}
        layout="vertical"
        style={{ padding: '20px' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={[12, 12]} justify="start">
          {Object.keys(groupedFields).map((category) => (
            <React.Fragment key={category}>
              <Col span={24}>
                <h3>{category}</h3>
              </Col>
              {groupedFields[category].map((field: IFormField) => {
                const name = field.name;
                const isExpandable = field.isExpandable;

                if (name === 'appointmentsScheduled' && !showAppointmentsScheduled) {
                  return null;
                }

                return (
                  <Col xs={24} sm={field.gridSpan || 12} lg={field.gridSpan || 8} key={name}>
                    {isExpandable ? expandableFormField(field) : renderField(field)}
                  </Col>
                );
              })}
            </React.Fragment>
          ))}
          <Col span={24}>
            <Form.Item>
              <Button
                size="large"
                color="default"
                block
                htmlType="submit"
                loading={loading}
                variant="solid"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ReportForm;
