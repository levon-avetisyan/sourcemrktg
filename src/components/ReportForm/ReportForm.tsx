import { Form, Row, Col, Button } from 'antd';
import useSubmitSalesReport from '../../hooks/useSubmitSalesReport';
import './ReportForm.scss';
import { progressFormFields } from './constants';
import { renderField, groupFieldsByCategory } from './RenderFormFields';
import React from 'react';

const ReportForm = () => {
  const [form] = Form.useForm();
  const { submit, loading, success } = useSubmitSalesReport();

  const onFinish = async (values: any) => {
    await submit(values);
    if (success) {
      form.resetFields();
    }
  };

  const groupedFields = groupFieldsByCategory(progressFormFields);

  return (
    <div className="form-wrapper">
      <Form form={form} layout="vertical" style={{ padding: '20px' }} onFinish={onFinish}>
        <Row gutter={[12, 12]} justify="start">
          {Object.keys(groupedFields).map((category) => (
            <React.Fragment key={category}>
              <Col span={24}>
                <h3>{category}</h3>
              </Col>
              {groupedFields[category].map((field) => (
                <Col xs={24} sm={field.gridSpan || 12} lg={field.gridSpan || 8} key={field.name}>
                  {renderField(field)}
                </Col>
              ))}
            </React.Fragment>
          ))}
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
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
