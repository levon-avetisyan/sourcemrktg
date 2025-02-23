import { Form, Input, Select, DatePicker } from 'antd';
import CustomTooltip from '../Tooltip/CustomTooltip.tsx';

const { RangePicker } = DatePicker;

const renderField = (field) => {
  const { name, label, type, options, required, tooltip, min, max } = field;
  const renderLabelWithTooltip = (label, tooltip, min, max) => {
    let tooltipContent = tooltip;
    if (min !== undefined && max !== undefined) {
      tooltipContent += ` (Min: ${min}, Max: ${max})`;
    } else if (min !== undefined) {
      tooltipContent += ` (Min: ${min})`;
    } else if (max !== undefined) {
      tooltipContent += ` (Max: ${max})`;
    }
    return (
      <span>
        {label}
        {tooltip && <CustomTooltip title={tooltipContent} />}
      </span>
    );
  };

  switch (type) {
    case 'text':
      return (
        <Form.Item
          name={name}
          label={renderLabelWithTooltip(label, tooltip, min, max)}
          rules={[{ required, message: `Is a required field` }]}
          key={name}
        >
          <Input placeholder={`Enter ${label.toLowerCase()}`} />
        </Form.Item>
      );
    case 'number':
      return (
        <Form.Item
          name={name}
          label={renderLabelWithTooltip(label, tooltip, min, max)}
          rules={[{ required, message: `Is a required field` }]}
          key={name}
        >
          <Input type="number" placeholder={`Enter ${label.toLowerCase()}`} />
        </Form.Item>
      );
    case 'date':
      return (
        <Form.Item
          name={name}
          label={renderLabelWithTooltip(label, tooltip, min, max)}
          rules={[{ required, message: `Is a required field` }]}
          key={name}
        >
          <DatePicker format="MM-DD-YYYY" placeholder={`Select ${label.toLowerCase()}`} />
        </Form.Item>
      );
    case 'dateRange':
      return (
        <Form.Item
          name={name}
          label={renderLabelWithTooltip(label, tooltip, min, max)}
          rules={[{ required, message: `Is a required field` }]}
          key={name}
        >
          <RangePicker showTime={{ format: 'HH:mm' }} format="HH:mm" />
        </Form.Item>
      );
    case 'select':
      return (
        <Form.Item
          name={name}
          label={renderLabelWithTooltip(label, tooltip, min, max)}
          rules={[{ required, message: `Is a required field` }]}
          key={name}
        >
          <Select placeholder={`Select ${label.toLowerCase()}`}>
            {options.map((option) => (
              <Select.Option key={option.value || option} value={option.value || option}>
                {option.label || option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      );
    default:
      return null;
  }
};

// Group the fields by category
const groupFieldsByCategory = (fields) => {
  return fields.reduce((groups, field) => {
    const { category } = field;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(field);
    return groups;
  }, {});
};

export { renderField, groupFieldsByCategory };
