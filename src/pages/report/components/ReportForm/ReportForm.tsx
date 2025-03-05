import React, { useState } from 'react';
import { Button, Card, Col, Form, Input, Row, Select } from 'antd';
import useSubmitReport from '../../../../hooks/useSubmitReport.ts';
import './ReportForm.scss';
import { groupFieldsByCategory, renderField, renderLabelWithTooltip } from './RenderFormFields.tsx';
import { transformReportData } from '../../utiils.ts';
import {
  inspectionOutcomeOptions,
  negativeOutComeReasons,
  outcomeOptions,
  progressFormFields,
} from '../../constants.ts';
import { toast } from 'react-toastify';

import { IFormField } from '../../interfaces.ts';

const ReportForm = () => {
  const { submit, loading } = useSubmitReport();

  const [form] = Form.useForm();

  const [additionalRows, setAdditionalRows] = useState<Record<string, number>>({
    inspections_scheduled: 0,
    company_leads_received: 0,
    doors_knocked: 0,
  });
  const [hasCompletedInspection, setHasCompletedInspection] =
    useState<Record<string, number[]>>(null);
  const [hasNegativeOutcome, setHasNegativeOutcome] = useState<Record<string, number[]>>(null);
  const [hasOtherReason, setHasOtherReason] = useState<Record<string, number[]>>(null);
  const [showAppointmentsScheduled, setShowAppointmentsScheduled] = useState(false);
  const handleAdditionalRowsChange = (fieldName: string, value: number) => {
    // Show "appointments_scheduled" if "doors_knocked" value > 0
    if (fieldName === 'doors_knocked') {
      setShowAppointmentsScheduled(value > 0);
    } else {
      setAdditionalRows((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
    }
  };

  const expandableFormField = (field: IFormField) => {
    const fieldName = field.name;
    return (
      <>
        <Form.Item
          name={fieldName}
          label={renderLabelWithTooltip(field.label, field.tooltip)}
          rules={[{ required: field.required, message: 'This field is required' }]}
        >
          <Select
            onChange={(val: number) => handleAdditionalRowsChange(fieldName, val)}
            placeholder={field.placeholder}
          >
            {field.options.map((option: number) => (
              <Select.Option key={`${fieldName}-${option}`} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        {renderAdditionalRows(fieldName, additionalRows[fieldName] || 0)}
      </>
    );
  };

  const handleOutcomeChange = (
    fieldName: string,
    value: string,
    index: number,
    outcomeType: 'completedInspection' | 'notClosed' | 'other',
    stateUpdater: React.Dispatch<React.SetStateAction<Record<string, number[]>>>
  ) => {
    stateUpdater((prev) => {
      const updated = { ...prev };

      if (value === outcomeType) {
        if (!updated[fieldName]) {
          updated[fieldName] = [];
        }
        if (!updated[fieldName].includes(index)) {
          updated[fieldName].push(index);
        }
      } else {
        if (updated[fieldName]) {
          updated[fieldName] = updated[fieldName].filter((i) => i !== index);
          if (updated[fieldName].length === 0) {
            delete updated[fieldName];
          }
        }
      }

      return updated;
    });
  };

  // Usage examples:
  const handleCompletedInspectionChange = (fieldName: string, outcome: string, index: number) => {
    handleOutcomeChange(
      fieldName,
      outcome,
      index,
      'completedInspection',
      setHasCompletedInspection
    );
  };

  const handleInspectionOutcomeChange = (fieldName: string, outcome: string, index: number) => {
    handleOutcomeChange(fieldName, outcome, index, 'notClosed', setHasNegativeOutcome);
  };

  const handleNegativeOutcomeChange = (fieldName: string, reason: string, index: number) => {
    handleOutcomeChange(fieldName, reason, index, 'other', setHasOtherReason);
  };

  const renderSingleRow = (fieldName: string, index: number) => {
    return (
      <Card
        key={index}
        style={{
          backgroundColor: '#fffbe6',
          borderColor: '#ffd666',
          marginBottom: '12px',
        }}
      >
        {/* Customer Name + Outcome */}
        <Row gutter={[12, 12]} style={{ marginBottom: '12px' }}>
          {/* Customer ID */}
          <Col xs={24} lg={12}>
            <Form.Item
              name={`customer_id_${fieldName}_${index}`}
              label="Customer ID"
              rules={[{ required: true, message: 'This field is required' }]}
              style={{ marginBottom: 0 }}
            >
              <Input placeholder="Customer ID" />
            </Form.Item>
          </Col>
          {/* Customer Name */}
          <Col xs={24} lg={12}>
            <Form.Item
              name={`customer_name_${fieldName}_${index}`}
              label="Customer's Full Name"
              rules={[{ required: true, message: 'This field is required' }]}
              style={{ marginBottom: 0 }}
            >
              <Input placeholder="Customer Name" />
            </Form.Item>
          </Col>
          {/* Outcome of the appointment */}
          <Col xs={24} lg={12}>
            <Form.Item
              name={`appointment_outcome_${fieldName}_${index}`}
              label="Outcome of the appointment"
              rules={[{ required: true, message: 'This field is required' }]}
              style={{ marginBottom: 0 }}
            >
              <Select
                placeholder="Select the outcome of the appointment"
                onChange={(o: string) => handleCompletedInspectionChange(fieldName, o, index)}
              >
                {outcomeOptions.map((option) => (
                  <Select.Option key={`${fieldName}-${option.value}`} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          {/* If outcome is completed inspection */}
          {hasCompletedInspection[fieldName]?.includes(index) && (
            <>
              <Col xs={24} lg={12}>
                <Form.Item
                  name={`inspection_outcome_${fieldName}_${index}`}
                  label="Outcome of the inspection"
                  rules={[{ required: true, message: 'This field is required' }]}
                  style={{ marginBottom: 0 }}
                >
                  <Select
                    placeholder="Select the outcome of the inspection"
                    onChange={(r: string) => handleInspectionOutcomeChange(fieldName, r, index)}
                  >
                    {inspectionOutcomeOptions.map((option) => (
                      <Select.Option key={`${fieldName}-${option.value}`} value={option.value}>
                        {option.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              {/* If "other" selected, show text input */}
              {hasNegativeOutcome[fieldName]?.includes(index) && (
                <>
                  <Col xs={24} lg={24}>
                    {/*Select the reason of the negative outcome */}
                    <Form.Item
                      name={`negative_outcome_reason_${fieldName}_${index}`}
                      label="Reason of the negative outcome"
                      rules={[{ required: true, message: 'This field is required' }]}
                      style={{ marginBottom: 0 }}
                    >
                      <Select
                        placeholder="Select reason of the negative outcome"
                        onChange={(r: string) => handleNegativeOutcomeChange(fieldName, r, index)}
                      >
                        {negativeOutComeReasons.map((option) => (
                          <Select.Option key={`${fieldName}-${option.value}`} value={option.value}>
                            {option.label}
                          </Select.Option>
                        ))}
                        {/* Additional "Other" option with a unique key */}
                        <Select.Option key={`other-${fieldName}`} value="other">
                          Other
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  {hasOtherReason[fieldName]?.includes(index) && (
                    <Col xs={24} lg={24}>
                      <Form.Item
                        name={`other_reason_negative_outcome_${fieldName}_${index}`}
                        label="Other Reason"
                        rules={[{ required: true, message: 'This field is required' }]}
                        style={{ marginBottom: 0 }}
                      >
                        <Input placeholder="Enter other reason" />
                      </Form.Item>
                    </Col>
                  )}
                </>
              )}
            </>
          )}
        </Row>
      </Card>
    );
  };

  const renderAdditionalRows = (fieldName: string, count: number) => {
    return Array.from({ length: count }).map((_, index) => renderSingleRow(fieldName, index));
  };

  const groupedFields = groupFieldsByCategory(progressFormFields);

  const resetForm = () => {
    form.resetFields();
    setAdditionalRows({});
    setHasCompletedInspection({});
    setHasNegativeOutcome({});
    setHasOtherReason({});
    setShowAppointmentsScheduled(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onFinishFailed = () => {
    toast.error('Missing required fields. Please fill out all required fields.');
  };

  const onFinish = async (values) => {
    const payload = transformReportData(values);
    const response = await submit(payload);
    if (response.status === 201) {
      toast.success('Thank you. Your report has been submitted.');
      resetForm();
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
                const fieldName = field.name;
                const isExpandableField =
                  fieldName === 'inspections_scheduled' ||
                  fieldName === 'company_leads_received' ||
                  fieldName === 'doors_knocked';

                // Conditionally render 'appointments_scheduled' only when showAppointmentsScheduled is true
                if (fieldName === 'appointments_scheduled' && !showAppointmentsScheduled) {
                  return null; // Skip rendering when showAppointmentsScheduled is false
                }

                return (
                  <Col xs={24} sm={field.gridSpan || 12} lg={field.gridSpan || 8} key={fieldName}>
                    {isExpandableField ? expandableFormField(field) : renderField(field)}
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
